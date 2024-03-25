import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

type EmployeeCardProps = {
  name: string;
  role: string;
};

const EmployeeCard = ({ name, role }: EmployeeCardProps) => {
  return (
    <div className="employee-card">
      <p className="employee-card__details">{name}</p>
      <p className="employee-card__details">{role}</p>
      <Counter />
    </div>
  );
};

export default EmployeeCard;
