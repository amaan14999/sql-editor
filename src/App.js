import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EditorProvider } from "./context/EditorContext"; // Update the path as necessary
import EditorPage from "./pages/EditorPage"; // Update the path as necessary
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <EditorProvider>
        <Navbar />
        <div className="App">
          <Routes>
            {/* Define your routes here */}
            <Route path="/editor" element={<EditorPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </EditorProvider>
    </Router>
  );
}

export default App;
