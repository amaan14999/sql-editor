import React from "react";
import QueryEditor from "../components/QueryEditor";
import Output from "../components/Output";
import Sidebar from "../components/Sidebar";
import { EditorProvider } from "../context/EditorContext";

const EditorPage = () => {
  return (
    <EditorProvider>
      <div className="flex w-full h-full px-8 pb-20 pt-4 gap-8">
        <Sidebar />
        <div className="flex-[7] flex flex-col justify-between gap-8">
          <QueryEditor />
          <Output />
        </div>
      </div>
    </EditorProvider>
  );
};

export default EditorPage;
