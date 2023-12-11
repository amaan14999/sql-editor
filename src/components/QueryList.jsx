import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const QueryList = ({
  title,
  queries,
  searchQuery,
  setSearchQuery,
  onQuerySelect,
}) => {
  const filteredQueries = queries.filter((query) =>
    query.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4 flex-grow-0 flex-shrink-0 max-h-[40vh] h-[40vh]">
      <h3 className="font-bold text-2xl flex gap-2 items-center">
        {title === "Available Queries" && <FontAwesomeIcon icon={faDatabase} />}
        {title === "History" && <FontAwesomeIcon icon={faClockRotateLeft} />}
        {title}
      </h3>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredQueries.length > 0 ? (
        <ul className="flex flex-col gap-2 overflow-y-scroll">
          {filteredQueries.map((query, index) => (
            <li
              key={index}
              className="bg-neutral-950 rounded-md p-2 cursor-pointer hover:bg-neutral-800 duration-200 transition-colors"
              onClick={() => onQuerySelect(query)}
            >
              <code className="font-mono text-neutral-300">{query}</code>
            </li>
          ))}
        </ul>
      ) : (
        <p>No queries found.</p>
      )}
    </div>
  );
};

export default QueryList;
