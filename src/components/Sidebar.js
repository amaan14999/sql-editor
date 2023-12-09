// import React, { useContext } from "react";
// import { EditorContext } from "../context/EditorContext";

// const Sidebar = () => {
//   const { availableQueries, setQuery, queryHistory, setQueryHistory } =
//     useContext(EditorContext);

//   const handleQueryClick = (query) => {
//     setQuery(query);
//   };

//   return (
//     <div className="sidebar">
//       <div className="available-queries">
//         <h3>Available Queries</h3>
//         {availableQueries.map((q, index) => (
//           <div key={index} onClick={() => handleQueryClick(q)}>
//             {q}
//           </div>
//         ))}
//       </div>
//       <div className="query-history">
//         <h3>History</h3>
//         {queryHistory.history.map((h, index) => (
//           <div key={index}>{h}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useContext } from "react";
import { EditorContext } from "../context/EditorContext";
import QueryList from "./QueryList"; // This is the reusable component for both available queries and history

const Sidebar = () => {
  const { availableQueries, setQuery, queryHistory } =
    useContext(EditorContext);

  const handleQuerySelect = (query) => {
    setQuery(query);
  };

  return (
    <div className="sidebar">
      <QueryList
        title="Available Queries"
        queries={availableQueries}
        onQuerySelect={handleQuerySelect}
      />
      <QueryList
        title="History"
        queries={queryHistory.history}
        onQuerySelect={handleQuerySelect}
      />
    </div>
  );
};

export default Sidebar;
