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

  return (
    <div className="h-full">
      <div className="flex gap-2 pb-2">
        <button
          className={`bg-neutral-800 px-2 py-1 text-lg rounded-md hover:bg-neutral-600 duration-200 transition-colors ${
            activeTab === "output" ? "!bg-cyan-950" : ""
          }`}
          onClick={() => setActiveTab("output")}
        >
          Output
        </button>
        <button
          className={`bg-neutral-800 px-2 py-1 text-lg rounded-md hover:bg-neutral-600 duration-200 transition-colors ${
            activeTab === "schema" ? "!bg-cyan-950" : ""
          }`}
          onClick={() => setActiveTab("schema")}
        >
          Table Schema
        </button>
      </div>

      {outputData.length > 0 && (
        <p className="pb-2 italic">
          {outputData.length} rows in Set ({executionTime}sec)
        </p>
      )}

      {activeTab === "output" &&
        (outputData.length > 0 ? (
          <Table data={outputData} />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <h3 className="text-2xl font-bold text-neutral-500">
              Please run a query to view its results
            </h3>
          </div>
        ))}
      {activeTab === "schema" && (
        <Table
          data={[
            {
              name: "airline_name",
              type: "string",
            },
            {
              name: "flight_number",
              type: "number",
            },
            {
              name: "departure_airport",
              type: "string",
            },
            {
              name: "arrival_airport",
              type: "string",
            },
            {
              name: "departure_date",
              type: "date",
            },
            {
              name: "arrival_date",
              type: "date",
            },
          ]}
        />
      )}
    </div>
  );
};

export default Output;
