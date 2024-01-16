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

  return (
    <div className="container">
      <div className="box">
        <div className="counter-div">
          <button className="btn" onClick={() => setInterval((i) => i - 1)}>
            ➖
          </button>
          <div className="counter-total">Step: {interval}</div>
          <button className="btn" onClick={() => setInterval((i) => i + 1)}>
            ➕
          </button>
        </div>
        <div className="counter-div">
          <button className="btn" onClick={() => setCount((c) => c - interval)}>
            ➖
          </button>
          <div className="counter-total">Count: {count}</div>
          <button className="btn" onClick={() => setCount((c) => c + interval)}>
            ➕
          </button>
        </div>
        <div>
          {count === 0
            ? `Today's date is ${date.toDateString()}`
            : count === 1
            ? `Tomorrow is ${date.toDateString()}`
            : count === -1
            ? `Yesterday was ${date.toDateString()}`
            : count < -1
            ? `${Math.abs(count)} days ago was ${date.toDateString()}`
            : `${count} days from today is ${date.toDateString()}`}
        </div>
      </div>
    </div>
  );
}
