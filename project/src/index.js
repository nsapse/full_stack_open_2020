import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) =>{
    return (
        <div>
            <p>Hello, {props.name} you are {props.age} years old. </p>
        </div>
    )
} 

const Footer = () => {
    return(
        <div>
        Greetings App Created By
        <a href="https://github.com/nsapse"> loafers</a>
        </div>
    )
}



const App = () => {
    const name = "Peter"
    const age = 10
  return (
    <div>
        <h1>Greeting</h1>
        <Hello name = "George" age ={26 + 10}/>
        <Hello name = "Daisy" age = {22}/>
        <Hello name = {name} age = {age} />
        <Footer/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
