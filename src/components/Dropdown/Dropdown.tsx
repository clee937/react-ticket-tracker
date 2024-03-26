import "./Dropdown.scss";
import team from "../../data/team";
import Employee from "../../types/employee";

type DropdownProps = {
  label: string;
};

const Dropdown = ({ label }: DropdownProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);
  const uniqueRoles = team.filter((employee, index) => {
    console.log(index);
    return (
      team.findIndex((element) => element.role === employee.role) === index
    );
  });

  return (
    <div className="dropdown">
      <label htmlFor={label} className="dropdown__label">
        {capitalizedLabel}
      </label>
      <select id={label} name={label} className="dropdown__select">
        <option value="">Search by role…</option>
        {uniqueRoles.map((employee: Employee) => (
          <option key={employee.id} value={employee.role}>
            {employee.role}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
