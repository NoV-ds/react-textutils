import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import Textform from './componants/Textform';

function App() {
  return (
    <>
    <Navbar title="Textutils" about="About" />
    <div className="container my-3" >
    {/* <Textform heading="Lets analyze the context" /> */}
    <About/>
    </div>
    </>
  );
}

export default App;
