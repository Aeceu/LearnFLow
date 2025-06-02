"use client";
import Editor, { OnMount } from "@monaco-editor/react";
import { MutableRefObject, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import axios from "axios";

const Practice = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [value, setValue] = useState<string | undefined>("");

  const onMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] mt-20 flex items-center justify-center gap-4 p-4">
      <div className="w-1/2 h-full flex flex-col gap-4">
        <button className=" h-[35px] w-[150px] bg-orange-600 rounded-full ">
          Javascript
        </button>
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
            fontSize: 18,
            fontFamily: "Poppins",
            lineHeight: 24,
            padding: {
              top: 16,
              bottom: 16,
            },
            wordWrap: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            renderWhitespace: "all",
            overviewRulerBorder: false,
          }}
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// write your code"
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
      <Output editorRef={editorRef} />
    </div>
  );
};

export default Practice;

type OutputProps = {
  editorRef: MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>;
};

export const Output = ({ editorRef }: OutputProps) => {
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    if (!editorRef.current) return;

    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    setIsLoading(true);
    try {
      const result = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        {
          language: "javascript",
          version: "18.15.0",
          files: [
            {
              content: sourceCode,
            },
          ],
        }
      );
      setOutput(result.data.run.output.split("\n"));
      console.log(result.data.run.output);
      result.data.run.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-1/2 h-full flex flex-col gap-4">
      <button
        disabled={isLoading}
        onClick={runCode}
        className=" h-[35px] w-[150px] bg-orange-600 rounded-full "
      >
        {isLoading ? "Loading...." : "Run Code"}
      </button>
      <div
        className={`w-full h-full bg-[#1e1e1e] p-2 ${
          isError && "text-red-500"
        }`}
      >
        {output.length > 0
          ? output.map((line, i) => (
              <h1 key={i} className="text-lg">
                {line}
              </h1>
            ))
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};
