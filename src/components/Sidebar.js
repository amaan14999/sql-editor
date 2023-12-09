import React, { useContext, useState } from "react";
import { EditorContext } from "../context/EditorContext";
import QueryList from "./QueryList";

const Sidebar = () => {
  const { availableQueries, setQuery, queryHistory } =
    useContext(EditorContext);
  const [searchQueryAvailable, setSearchQueryAvailable] = useState("");
  const [searchQueryHistory, setSearchQueryHistory] = useState("");

  return (
    <div className="sidebar">
      <QueryList
        title="Available Queries"
        queries={availableQueries}
        searchQuery={searchQueryAvailable}
        setSearchQuery={setSearchQueryAvailable}
        onQuerySelect={setQuery}
      />
      <QueryList
        title="History"
        queries={queryHistory.history}
        searchQuery={searchQueryHistory}
        setSearchQuery={setSearchQueryHistory}
        onQuerySelect={setQuery}
      />
    </div>
  );
};

export default Sidebar;
