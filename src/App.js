import "./App.css";
import NavBar from "./components/header/NavBar";
import SimpleModal from "./components/simpleModal/SimpleModal.jsx";

function App() {
  return (
    <div className="App">
      <SimpleModal />
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;
