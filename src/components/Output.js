import React, { useContext, useState, useEffect } from "react";
import { EditorContext } from "../context/EditorContext";
import Table from "./Table"; // Adjust the import path as per your project structure

const Output = () => {
  const { queryHistory } = useContext(EditorContext);
  const { outputData } = queryHistory;

  // State for execution time
  const [executionTime, setExecutionTime] = useState(0);

  // Simulate execution time when outputData changes
  useEffect(() => {
    const startTime = performance.now();
    // Simulate a delay
    setTimeout(() => {
      const endTime = performance.now();
      setExecutionTime(((endTime - startTime) / 1000).toFixed(2)); // Convert to seconds and fix to 2 decimal places
    }, Math.random() * 100); // Simulated delay of up to 100 milliseconds
  }, [outputData]);

  return (
    <div className="output-container">
      <p>
        {outputData.length} rows in Set ({executionTime}sec)
      </p>
      <Table data={outputData} />
    </div>
  );
};

export default Output;
