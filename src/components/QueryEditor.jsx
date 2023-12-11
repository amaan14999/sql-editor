import React, { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { xcodeDarkInit } from "@uiw/codemirror-theme-xcode";

import { EditorContext } from "../context/EditorContext";
import {
  getAllFlightDetails,
  getAirlineAndAirports,
  getAirlineNamesAndNumbers,
} from "../assets/Queries";

const QueryEditor = () => {
  const { query, setQuery, queryHistory, setQueryHistory } =
    useContext(EditorContext);

  const handleQueryChange = (value) => {
    setQuery(value);
  };

  const executeQuery = () => {
    let result;
    const lowerCaseQuery = query.trim().toLowerCase();

    switch (lowerCaseQuery) {
      case "select * from flightdetails;":
        result = getAllFlightDetails();
        break;
      case "select airline_name, departure_airport, arrival_airport from flightdetails;":
        result = getAirlineAndAirports();
        break;
      case "select airline_name, flight_number from flightdetails;":
        result = getAirlineNamesAndNumbers();
        break;
      default:
        alert("Please try one of the test queries.");
        return;
    }

    setQueryHistory({
      ...queryHistory,
      outputData: result,
      history: [...queryHistory.history, query],
    });
  };

  const clearQuery = () => {
    setQuery("");
  };

  const saveQuery = () => {
    if (query && !queryHistory.saved.includes(query)) {
      setQueryHistory({
        ...queryHistory,
        saved: [...queryHistory.saved, query],
        history: queryHistory.history,
        outputData: queryHistory.outputData,
      });
    } else {
      alert("Cannot save empty or duplicate query.");
    }
  };

  return (
    <div className="flex gap-4 bg-neutral-900 rounded-lg p-4">
      <CodeMirror
        className="flex-1 text-base"
        value={query}
        extensions={[sql()]}
        onChange={(value) => handleQueryChange(value)}
        height="250px"
        theme={xcodeDarkInit()}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          showHint: true,
          lint: true,
        }}
      />
      <div className="flex flex-col gap-2">
        <button
          className="bg-green-700 px-2 py-1 rounded-md"
          onClick={executeQuery}
        >
          Run Query
        </button>
        <button
          className="bg-red-800 px-2 py-1 rounded-md"
          onClick={clearQuery}
        >
          Clear
        </button>
        <button
          className="bg-neutral-700 px-2 py-1 rounded-md"
          onClick={saveQuery}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default QueryEditor;
