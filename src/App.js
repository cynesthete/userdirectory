import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usertable from "./components/Usertable"
import Mynavbar from "./components/Mynavbar"

function App() {
  return (
    <div className="App">
      <Mynavbar />
      <Usertable />
    </div>
  );
}

export default App;
