import "./Counter.scss";

const Counter = () => {
  return (
    <div className="counter">
      <p className="counter__items counter__items--heading">Counter</p>
      <p className="counter__items counter__items--value">0</p>
      <div className="counter__button-container">
        <button className="counter__button counter__button--increment">
          +
        </button>
        <button className="counter__button counter__button--decrement">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
