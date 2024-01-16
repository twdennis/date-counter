import { useState } from "react";
import "./styles.css";

export default function App() {
  return <DateCounter />;
}

function DateCounter() {
  const [interval, setInterval] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setInterval(1);
    setCount(0);
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setCount(Number(inputValue));
    }
  };

  return (
    <div className="container">
      <div className="box">
        <div className="counter-div">
          <input
            type="range"
            min="1"
            max="10"
            value={interval}
            onChange={(e) => setInterval(Number(e.target.value))}
          />
          <div className="counter-total">Step: {interval}</div>
        </div>
        <div className="counter-div">
          <button className="btn" onClick={() => setCount((c) => c - interval)}>
            ➖
          </button>
          <input
            className="counter-total"
            value={count}
            onChange={handleInputChange}
          />
          <button className="btn" onClick={() => setCount((c) => c + interval)}>
            ➕
          </button>
        </div>
        <div className="bottom-container">
          <p>
            <span>
              {count === 0
                ? `Today's date is `
                : count === 1
                ? `Tomorrow is`
                : count === -1
                ? `Yesterday was `
                : count < -1
                ? `${Math.abs(count)} days ago was `
                : `${count} days from today is `}
            </span>
            <span>{date.toDateString()}</span>
          </p>
          <div className="button-container">
            <button onClick={handleReset}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}
