import React, { createContext, useState } from "react";

const EditorContext = createContext();

const EditorProvider = ({ children }) => {
  const [query, setQuery] = useState("SELECT * FROM flightdetails;");
  const [queryHistory, setQueryHistory] = useState({
    saved: [],
    history: [],
    outputData: [],
  });

  return (
    <EditorContext.Provider
      value={{
        query,
        setQuery,
        queryHistory,
        setQueryHistory,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorProvider, EditorContext };
