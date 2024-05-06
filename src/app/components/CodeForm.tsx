import RevertButton from "./RevertButton";
import SubmitButton from "./SubmitButton";
import Editor from "./editor/Editor";

export default function CodeForm() {
  return (
    <form name="code-form" method="get" rel="next">
      <div className="flex flex-wrap flex-auto items-center">
        <SubmitButton />
        <RevertButton />
      </div>
      <Editor />
    </form>
  );
}
