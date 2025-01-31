import './App.css';
import About from './componants/About';
import Alert from './componants/Alert';
import Navbar from './componants/Navbar';
import Textform from './componants/Textform';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
  }
  const [mode, setMode] = useState("light")
  const alertTimeOut = () => {
    setTimeout(() => {
      setAlert((alert) => null)
    }, 1000);

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
    <div className="container my-3" >
    <Textform heading="Lets analyze the context" mode={mode} showAlert={showAlert} alertTimeOut={alertTimeOut} />
    <About mode={mode} />
    </div>
    </>
  );
}

export default App;
