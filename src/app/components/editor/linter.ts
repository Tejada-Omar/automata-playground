import { ESLint } from "eslint";
import jsonc from "eslint-plugin-jsonc";
import { Annotation } from "codemirror/addon/lint/lint";

export function createEslintInstance() {
  return new ESLint({
    allowInlineConfig: false,
    useEslintrc: false,
    ...jsonc.configs["flat/recommended-with-jsonc"],
    overrideConfig: {
      env: { browser: true },
    },
  });
}

export async function lint(
  eslint: ESLint,
  code: string,
  // TODO: Find out how to properly identify errors in async function
): Promise<Annotation[] | never> {
  let results: ESLint.LintResult[];
  try {
    results = await eslint.lintText(code);
  } catch (e) {
    // TODO: Catch error
    throw new Error();
  }

  let diagnostics = results
    .flatMap((result) => result.messages)
    .map((message) => {
      return {
        from: {
          line: message.line,
          ch: message.column,
        },
        to: {
          line: message.endLine !== undefined ? message.endLine : message.line,
          ch:
            message.endColumn !== undefined
              ? message.endColumn
              : message.column,
        },
        message: message.message,
        severity: message.severity === 1 ? "WARNING" : "ERROR",
        // from: message.line,
        // to: message.endLine !== undefined ? message.endLine : message.line,
      };
    });

  return diagnostics;
}
