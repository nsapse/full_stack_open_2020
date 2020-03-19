import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({good, bad, neutral}) => {
    return(
        <div>
        <h2>Statistics</h2>
        <h1>Good: {good}</h1>
        <h1>Neutral: {neutral}</h1>
        <h1>Bad: {bad}</h1>
        <h1>All: {good + bad + neutral}</h1>
        <h1>
          Average Rating:{" "}
          {(good * 1 + bad * -1 + neutral * 0) / (good + bad + neutral)}
        </h1>
        <h1>Positive: {good / (good + bad + neutral)} </h1>
      </div>
    )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Defines a button which takes a return function and text as properties
  const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
  };
  // Click-handler to increment good when clicked
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  // Click-handler to increment neutral when clicked
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  // Click-handler to increment bad when clicked
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={handleBadClick} text="bad"></Button>
      <Button onClick={handleNeutralClick} text="neutral"></Button>
      <Button onClick={handleGoodClick} text="good"></Button>
    <Statistics good={good} bad={bad} neutral = {neutral}></Statistics> 
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
