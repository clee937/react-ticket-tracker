import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import SearchBar from "./components/SearchBar/SearchBar";
import { FormEvent, useState } from "react";
import team from "./data/team";
import Employee from "./types/employee";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const filteredEmployees: Employee[] = team.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="app">
      <h1 className="app__title">Ticket Tracker</h1>
      <SearchBar
        label="search"
        searchTerm={searchTerm}
        placeHolderText="Search by employee..."
        handleInput={handleInput}
      />
      <div className="app__container">
        {filteredEmployees.map((employee: Employee) => (
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
