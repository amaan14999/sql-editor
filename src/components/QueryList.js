import React from "react";

const QueryList = ({ title, queries, onQuerySelect }) => {
  return (
    <div className="query-list">
      <h3>{title}</h3>
      {queries.map((query, index) => (
        <div
          key={index}
          className="query-item"
          onClick={() => onQuerySelect(query)}
        >
          {query}
        </div>
      ))}
    </div>
  );
};

export default QueryList;
