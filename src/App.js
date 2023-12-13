import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Trajectory from './components/Trajectory';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Trajectory />
      <Skills />
    </div>
  );
}

export default App;
