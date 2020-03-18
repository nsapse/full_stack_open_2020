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
  setTimeout(
    () => 
      setCounter(counter + 1),
      1000
  )
  return(
    <div>{counter}</div>
  )
};

let counter = 1

ReactDOM.render(<App counter = {counter} />, document.getElementById("root"));
