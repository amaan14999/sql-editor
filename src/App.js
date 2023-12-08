import React from "react";
import "./App.css";
import { EditorProvider } from "./context/EditorContext"; // Update the path as necessary
import EditorPage from "./pages/EditorPage"; // Update the path as necessary

function App() {
  return (
    <EditorProvider>
      <div className="App">
        <EditorPage />
      </div>
    </EditorProvider>
  );
}

export default App;
