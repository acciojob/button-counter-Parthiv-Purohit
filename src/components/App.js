
import React from "react";
import './../styles/App.css';

var count = 0;
let btn = document.querySelector('#btn1');
btn.addEventListener("click", function(){
   count = count +1;
})
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p><br/>
        <button id="btn1">Click me</button> 

    </div>
  )
}

export default App
