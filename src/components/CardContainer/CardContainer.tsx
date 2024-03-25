import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./CardContainer.scss";

const CardContainer = () => {
  return (
    <div className="card-container">
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
    </div>
  );
};

export default CardContainer;
