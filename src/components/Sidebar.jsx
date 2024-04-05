import React, { useContext, useState } from "react";
import { EditorContext } from "../context/EditorContext";
import QueryList from "./QueryList";

const Sidebar = () => {
  const { availableQueries, setQuery, queryHistory } =
    useContext(EditorContext);
  const [searchQueryAvailable, setSearchQueryAvailable] = useState("");
  const [searchQueryHistory, setSearchQueryHistory] = useState("");

  return (
    <div className="hidden flex-[3] lg:flex flex-col justify-between gap-8 bg-neutral-900 p-4 rounded-lg">
      <QueryList
        title="Available Queries"
        queries={availableQueries}
        searchQuery={searchQueryAvailable}
        setSearchQuery={setSearchQueryAvailable}
        onQuerySelect={setQuery}
      />
      <hr className="border-neutral-800" />
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
