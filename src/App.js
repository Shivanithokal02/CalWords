// App.js
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // state to track dark/light mode
  const [alert, setAlert] = useState(null); // state to manage alerts

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="Calwords" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About  mode={mode} />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
