import "./App.scss";
import Employee from "./components/Employee/Employee";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Ticket Tracker</h1>
      <Employee />
    </div>
  );
}

export default App;
