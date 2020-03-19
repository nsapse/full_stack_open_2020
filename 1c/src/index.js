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

const App = (props) => {
  const [counter, setCounter] = useState(0) 
  // const handleClick = () => {
  //   console.log("clicked")
  // }
  
  return(
    <div>{counter}
    <button onClick = {() => setCounter(counter+1)}>Plus</button>
    <button onClick = {() => setCounter(0)}>Zero</button>
    </div>
  )
};

let counter = 1

ReactDOM.render(<App counter = {counter} />, document.getElementById("root"));
