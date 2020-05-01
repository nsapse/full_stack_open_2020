import React, { useState } from "react";
import ReactDOM from "react-dom";

// Just a button component 
const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};
// A component to display the anecdote with the most votes
const Topdisplay = (props) => {
  console.log(props)
  // if (props.voteArray != undefined) {
  // return <p>Hello, World</p>   
  // }
  // else{
  //   return <p>No votes yet cast</p>
  // }
  const quoteArray = props.quoteArray
  let voteArray = props.voteArray
  let topVotes = Math.max(...voteArray)
  console.log("topVotes is", topVotes)
  let topQuote = voteArray.indexOf(topVotes)
  return(
    <div>    
    <h1>Anecdote with the Most Votes</h1>
    <p>{quoteArray[topQuote]}</p> 
    <p>has {topVotes} votes</p>
    </div>
  ) 
}

const App = props => {
  // Sets the selected quote using the useState hook. Initialized at 0
  const [selected, setSelected] = useState(0);
  // Sets the points array to track votes, initialized as empty
  const [points, setPoints] = useState(Array(props.anecdotes.length).fill(0));
  // A function to set the quote state to a given value
  const setToValue = value => {
    setSelected(value);
  };
  // Prototype of the function to generate a random quote - not working, not sure why
  // currently not used

  // const newQuote = (max) => {
  //   return Math.floor(Math.random()* max)
  // }

  // Function to set the quote state to a new random value
  const randQuote = max => {
    return setToValue(Math.floor(Math.random() * max));
  };

  // Function to increment the value of a given quote's votes
  const incrementPoints  = () => {
    let tempArray = [...points]
    tempArray[selected] += 1
    setPoints(tempArray)
  }
  

  return (
    <div>
      <p>
      {props.anecdotes[selected]}
      </p>
      <p>
        Has {points[selected]} votes
      </p>
      <p>
        <Button
          text="New Anecdote"
          handleClick={() => randQuote(props.anecdotes.length)}
        ></Button>
        <Button
          text="Vote"
          handleClick={() => incrementPoints()}
        ></Button>
      </p>
      <Topdisplay quoteArray = {props.anecdotes} voteArray = {points}></Topdisplay>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
