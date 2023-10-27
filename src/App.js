import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Passed by a prop" />
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/home" element={<TextForm heading="Enter text below" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

