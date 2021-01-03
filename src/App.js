import './App.css';
import './Components/Nav.component';
import Nav from './Components/Nav.component';
import Home from './Components/Home.component';
import HomeImage from './Components/HomeImage.component';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
      <Nav />
    <div className="row" style={{borderBottom:"1px solid #E8E8E8"}}>
    <Home />
     <HomeImage />
    </div>
      </div>
    </div>
  );
}

export default App;
