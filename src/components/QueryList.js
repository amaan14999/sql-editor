import React from "react";

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
    <div className="query-list">
      <h3>{title}</h3>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredQueries.length > 0 ? (
        filteredQueries.map((query, index) => (
          <div
            key={index}
            className="query-item"
            onClick={() => onQuerySelect(query)}
          >
            {query}
          </div>
        ))
      ) : (
        <p>No queries found.</p>
      )}
    </div>
  );
};

export default QueryList;
