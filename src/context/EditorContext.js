// import React, { createContext, useState } from "react";

// const EditorContext = createContext();

// const EditorProvider = ({ children }) => {
//   const [query, setQuery] = useState("SELECT * FROM flightdetails;");
//   const [queryHistory, setQueryHistory] = useState({
//     saved: [],
//     history: ["SELECT * FROM flightdetails;"],
//     outputData: [],
//   });
//   const [availableQueries] = useState([
//     "SELECT * FROM flightdetails;",
//     "SELECT airline_name, departure_airport, arrival_airport FROM flightdetails;",
//     "SELECT airline_name, flight_number FROM flightdetails;",
//   ]);

//   return (
//     <EditorContext.Provider
//       value={{
//         query,
//         setQuery,
//         queryHistory,
//         setQueryHistory,
//         availableQueries,
//       }}
//     >
//       {children}
//     </EditorContext.Provider>
//   );
// };

// export { EditorProvider, EditorContext };
import React, { createContext, useState } from "react";

const EditorContext = createContext();

const EditorProvider = ({ children }) => {
  const [query, setQuery] = useState("SELECT * FROM flightdetails;");
  const [queryHistory, setQueryHistory] = useState({
    saved: [
      "SELECT * FROM flightdetails;",
      "SELECT airline_name, departure_airport, arrival_airport FROM flightdetails;",
      "SELECT airline_name, flight_number FROM flightdetails;",
    ],
    history: ["SELECT * FROM flightdetails;"],
    outputData: [],
  });

  return (
    <EditorContext.Provider
      value={{
        query,
        setQuery,
        queryHistory,
        setQueryHistory,
        availableQueries: queryHistory.saved, // Add this line
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorProvider, EditorContext };
