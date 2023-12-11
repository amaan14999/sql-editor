import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EditorProvider } from "./context/EditorContext"; // Update the path as necessary
import EditorPage from "./pages/EditorPage"; // Update the path as necessary
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <EditorProvider>
        <Navbar />
        <div className="h-full">
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/editor" element={<EditorPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </EditorProvider>
    </Router>
  );
}

export default App;
