"use client";

import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { useState, useCallback, SetStateAction } from "react";
import { material } from "@uiw/codemirror-theme-material";

const defaultCode = `{
  "q0": {
    "q1": {
      "I": { "out": "I", "move": "R" }
    }
  },
  "q1": {
    "q0": {
      "I": { "out": "I", "move": "R" }
    },
    "q1": {
      " ": { "out": " ", "move": "R" }
    }
  }
}`;

export default function Editor() {
  const [code, setCode] = useState(defaultCode);

  const onChange = useCallback((val: SetStateAction<string>, _: any) => {
    setCode(val);
  }, []);

  const extensions = [langs.json()];

  return (
    <CodeMirror
      placeholder="Please enter valid JSON."
      theme={material}
      minHeight="15em"
      extensions={extensions}
      value={code}
      onChange={onChange}
    />
  );
}
