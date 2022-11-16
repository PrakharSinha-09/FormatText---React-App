// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const [mode, setMode] = useState('light');
  const enableDark = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled!", "Success!");
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled!", "Success!");
    }
  }

  const enableBlue = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#150050';
      showAlert("Deep Ocen Enabled!", "Success!");
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled!", "Success!");
    }
  }
  return (
    <>
          <BrowserRouter>
        <Navbar title="FormatText" aboutText="About" mode={mode} toggleMode={enableDark} toggleMode2={enableBlue} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}  />
          
            <Route exact path="/" element={<TextForm showalert={showAlert} heading="Wanna Modify The Text ? Welcome To FormatText!" mode={mode} />} /  >
    
          </Routes>
          {/* <TextForm showAlert={showAlert} heading="Wanna Modify The Text ? Welcome To FormatText!" mode={mode}/> */}
        </div>
          </BrowserRouter>
     

    </>
  );
}

export default App;
