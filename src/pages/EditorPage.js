import React from "react";
import QueryEditor from "../components/QueryEditor"; // Update the path as necessary
import Output from "../components/Output"; // Update the path as necessary

const EditorPage = () => {
  return (
    <div className="editor-page">
      <QueryEditor />
      <Output />
    </div>
  );
};

export default EditorPage;
