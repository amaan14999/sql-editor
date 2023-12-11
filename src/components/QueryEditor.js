import React, { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
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
    <div className="query-editor">
      <CodeMirror
        value={query}
        extensions={[sql()]}
        onChange={(value) => handleQueryChange(value)}
        height="200px"
        theme="light"
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
      <div className="editor-buttons">
        <button onClick={executeQuery}>Run Query</button>
        <button onClick={clearQuery}>Clear</button>
        <button onClick={saveQuery}>Save</button>
      </div>
    </div>
  );
};

export default QueryEditor;
