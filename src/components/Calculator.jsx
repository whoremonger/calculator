import { useState, useRef, useEffect } from 'react'

import '../App.css'
function Calculator() {

  const [number, setNumber] = useState(null)

  const calcData = [
    { id: "equals", label: "=" },
    { id: "zero", label: "0" },
    { id: "one", label: "1" },
    { id: "two", label: "2" },
    { id: "three", label: "3" },
    { id: "four", label: "4" },
    { id: "five", label: "5" },
    { id: "six", label: "6" },
    { id: "seven", label: "7" },
    { id: "eight", label: "8" },
    { id: "nine", label: "9" },
    //maybe put this in a different object
    { id: "add", label: "+" },
    { id: "subtract", label: "-" },
    { id: "multiply", label: "x" },
    { id: "divide", label: "/" },
    { id: "decimal", label: "." },
    { id: "clear", label: "clear" }
  ]


//maybe add pictures for the button labels
//display is where the numbers are shown
  return (
    <div id="whole-calculator">
      <h1 id="title">Calculator App</h1>
     
      <div id="display">{number}</div>
      <div id="calculator-body">
        {calcData.map((item) => (
          <button className="calc-buttons" key={item.id} id={item.id}>{item.label}</button>
        ))}
      </div>
    </div>
  )

}

export default Calculator