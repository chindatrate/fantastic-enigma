import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
