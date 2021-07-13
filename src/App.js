import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Aurora from './components/Aurora';
import Beach from './components/Beach';
import Forest from './components/Forest';
import Jungle from './components/Jungle';
import Lake from './components/Lake';
import Milky from './components/Milky';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-3 mb-3 text-white">Gallery</h1>
      </div>
      <Route path="/Aurora" component={Aurora} />
      <Route path="/Beach" component={Beach} />
      <Route path="/Forest" component={Forest} />
      <Route path="/Jungle" component={Jungle} />
      <Route path="/Lake" component={Lake} />
      <Route path="/Milky" component={Milky} />

      <Navigation />
    </Router>
  );
}

export default App;
