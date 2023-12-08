import React, { useContext } from "react";
import { EditorContext } from "../context/EditorContext";
import Table from "./Table"; // Adjust the import path as per your project structure

const Output = () => {
  const { queryHistory } = useContext(EditorContext);
  const { outputData } = queryHistory;

  return (
    <div className="output-container">
      <Table data={outputData} />
    </div>
  );
};

export default Output;
