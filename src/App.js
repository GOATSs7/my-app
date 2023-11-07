import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  //function for alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //func for dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* navbar  */}
      <Router>
        <Navbar
          title="textUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        {/* <div className={`container my-3 ${mode === 'dark' ? '#042743 text-light' : ''}`}> */}

        {/* alert  */}
        <Alert alert={alert} showAlert={showAlert} />

        {/* textform  */}
        <div
          className={`container my-3 ${
            mode === "dark" ? "#042743" : "bg-light"
          } ${mode === "dark" ? "#042743 text-light" : ""}`}
          style={{ backgroundColor: mode === "dark" ? "#042743" : "white" }}
        >
          <Routes>
            <Route path="/about" element={<About />}></Route>

            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>

          {/* <About/> */}
        </div>
      </Router>

      {/* <TextForm heading="Enter the text to analyze"/> */}

      {/* </div> */}
    </>
  );
}

export default App;
