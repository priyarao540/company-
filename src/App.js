import './App.css';
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import Navbar from './components/Navbar';
// import Home from './components/Home'
// import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
function App() {  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Link>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/navbar" component={Navbar}></Route>
        </Link>
    </div>
    </Router>
     
  );
}

export default App;
