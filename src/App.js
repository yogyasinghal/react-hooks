import logo from './logo.svg';
import './App.css';
import SimpleState from './StateFunctional/SimpleState';
function App() {
  console.log("app.js");
  return (
    <div className="App bg-black text-light">
     <h1>hello function</h1>
     <SimpleState/>
    </div>
  );
}

export default App;
