import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Ticket Tracker</h1>
      <div className="app__container">
        {team.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
