import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { defaultMarkdown } from "./data";

const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-8">
      <div className="prose w-full flex flex-col p-4">
        <label
          htmlFor="editor"
          className="font-semibold text-2xl text-indigo-700 mb-2"
        >
          Editor
        </label>
        <textarea
          id="editor"
          rows={10}
          className="block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md shadow-sm mb-7"
          defaultValue={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
        />
        <label
          htmlFor="preview"
          className="font-semibold text-2xl text-indigo-700 mb-2"
        >
          Preview
        </label>
        <div
          id="preview"
          className="bg-white border border-gray-300 rounded-md shadow-sm p-3"
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default App;
