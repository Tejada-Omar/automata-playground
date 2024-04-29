import Button from "./components/Button";
import Editor from "./components/Editor";

export default function Home() {
  return (
    <div className="block space-y-2 max-w-screen-md">
      <div className="flex flex-wrap flex-auto items-center">
        <Button text="Load Machine" />
        <Button text="Revert to Diagram" />
      </div>
      <Editor />
    </div>
  );
}
