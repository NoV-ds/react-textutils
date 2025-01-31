import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import Textform from './componants/Textform';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    console.log(mode)
    if (mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor = "blue";
    }
    else 
    {
      setMode("dark")
      document.body.style.backgroundColor = "black"
    }
  }

  return (
    <>
    <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3" >
    <Textform heading="Lets analyze the context" mode={mode} />
    <About mode={mode} />
    </div>
    </>
  );
}

export default App;
