import React, { useState } from "react";
import ReactDOM from "react-dom";

// const Hello = ({name, age}) => {
//   const bornYear = () =>  new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

const History = props => {
  if (props.allClicks.length === 0) {
    return <div> the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = props => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };
  // const Display = ({counter}) => <div>{counter}</div>
  // const Button = (props) => {
  //   return(
  //     <button onClick={props.handleClick}>
  //       {props.text}
  //     </button>
  //   )

  // const [counter, setCounter] = useState(0);
  // const increaseByOne = () => setCounter(counter + 1);
  // const decreaseByOne = () => setCounter(counter - 1);
  // const setToZero = () =>  setCounter(0);

  // const handleClick = () => {
  //   console.log("clicked")
  // }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text="left"></Button>
        <Button onClick={handleRightClick} text="right"></Button>
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
    // <div>
    //   <Display counter = {counter}/>
    //   <Button
    //     handleClick = {increaseByOne}
    //     text = 'plus'
    //   />
    //   <Button
    //     handleClick = {setToZero}
    //     text = 'zero'
    //   />
    //   <Button
    //     handleClick = {decreaseByOne}
    //     text = 'minus'
    //   />
    // </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
