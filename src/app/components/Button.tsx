interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-blue-500 rounded border-black border-2 basis-1/5 grow shrink-0 px-3 py-2 m-6 font-semibold text-nowrap">
      {text}
    </button>
  );
}
