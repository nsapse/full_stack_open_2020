import React, { useState } from "react";
import ReactDOM from "react-dom";

// Creates a "statistic" component to display individual statistics
const Statistic = prop => {
    return (
      <div>
        <h1>
          {prop.text} Feedback:   {prop.value}
        </h1>
      </div>
    );
};

// A component to display all statistics for the page in a single div if and only if there has been user input
// const Statistics = ({ good, bad, neutral }) => {
//   let all = good + bad + neutral;
//   if (all > 0) {
//     return (
//       <div>
//         <h2>Statistics</h2>
//         <h1>Good: {good}</h1>
//         <h1>Neutral: {neutral}</h1>
//         <h1>Bad: {bad}</h1>
//         <h1>All: {all}</h1>
//         <h1>
//           Average Rating:{" "}
//           {(good * 1 + bad * -1 + neutral * 0) / (good + bad + neutral)}
//         </h1>
//         <h1>Positive: {good / (good + bad + neutral)} </h1>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h2>No Feedback Given</h2>
//       </div>
//     );
//   }
// };

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
      {/* <Statistics good={good} bad={bad} neutral={neutral}></Statistics> */}
      <Statistic text = "Good" value = {good}> </Statistic>
      <Statistic text = 'Bad' value = {bad}> </Statistic>
      <Statistic text = 'Neutral' value = {neutral}> </Statistic>
      <Statistic text = 'Average' value = {(good * 1 + bad * -1 + neutral * 0) / (good + bad + neutral)}></Statistic>
      <Statistic text = 'Positive' value = {(good) / (good + bad + neutral)*100}></Statistic>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
