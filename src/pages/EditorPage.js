import React from "react";
import QueryEditor from "../components/QueryEditor";
import Output from "../components/Output";
import Sidebar from "../components/Sidebar";
import { EditorProvider } from "../context/EditorContext";

const EditorPage = () => {
  return (
    <EditorProvider>
      <div className="editor-page">
        <Sidebar />
        <div className="editor-content">
          <QueryEditor />
          <Output />
        </div>
      </div>
    </EditorProvider>
  );
};

export default EditorPage;
