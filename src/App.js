import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import About from './componants/About';
import Alert from './componants/Alert';
import Navbar from './componants/Navbar';
import Textform from './componants/Textform';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState("primary", "None")

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
  }
  const [mode, setMode] = useState("light")
  document.body.style.backgroundColor = "blue";

  const alertTimeOut = () => {
    setTimeout(() => {
      setAlert((alert) => null)
    }, 100000);

  }
  const toggleMode = () => {
    console.log(mode)
    if (mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor = "blue";
      showAlert("primary", "Light mode enable")
      alertTimeOut()
    }
    else 
    {
      setMode("dark")
      document.body.style.backgroundColor = "black"
      showAlert("primary", "Dark mode enable")
      alertTimeOut()
    }
  }

  return (
    <>
    <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} mode={mode} />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Textform heading="Lets analyze the context" mode={mode} showAlert={showAlert} alertTimeOut={alertTimeOut} />} />
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/text-form" element={
          <Textform heading="Lets analyze the context" mode={mode} showAlert={showAlert} alertTimeOut={alertTimeOut} />
          } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
