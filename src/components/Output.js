import React, { useContext, useState, useEffect } from "react";
import { EditorContext } from "../context/EditorContext";
import Table from "./Table"; // Adjust the import path as per your project structure

const Output = () => {
  const { queryHistory } = useContext(EditorContext);
  const { outputData } = queryHistory;

  // State for execution time and active tab
  const [executionTime, setExecutionTime] = useState(0);
  const [activeTab, setActiveTab] = useState("output");

  useEffect(() => {
    if (outputData.length > 0) {
      const startTime = performance.now();
      // Simulate a delay to calculate execution time
      setTimeout(() => {
        const endTime = performance.now();
        setExecutionTime(((endTime - startTime) / 1000).toFixed(2)); // Convert to seconds and fix to 2 decimal places
      }, Math.random() * 100); // Simulated delay of up to 100 milliseconds
    }
  }, [outputData]);

  const renderTableSchema = () => {
    return (
      <div>
        <div>airline_name: string,</div>
        <div>flight_number: number,</div>
        <div>departure_airport: string,</div>
        <div>arrival_airport: string,</div>
        <div>departure_date: date,</div>
        <div>arrival_date: date</div>
      </div>
    );
  };

  return (
    <div className="output-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "output" ? "active" : ""}`}
          onClick={() => setActiveTab("output")}
        >
          Output
        </button>
        <button
          className={`tab ${activeTab === "schema" ? "active" : ""}`}
          onClick={() => setActiveTab("schema")}
        >
          Table Schema
        </button>
      </div>

      {outputData.length > 0 && (
        <p>
          {outputData.length} rows in Set ({executionTime}sec)
        </p>
      )}

      {activeTab === "output" && <Table data={outputData} />}
      {activeTab === "schema" && renderTableSchema()}
    </div>
  );
};

export default Output;
