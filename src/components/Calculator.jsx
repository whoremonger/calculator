import { useState, useEffect } from 'react'

import '../App.css'
function Calculator() {

  const [display, setDisplay] = useState("0")

  /*
  const [number, setNumber] = useState(null)
  const [currentNumber, setCurrentNumber] = useState("")
  const [operator, setOperator] = useState(null)
*/
/*
  const calcData = [
    { id: "equals", label: "=", onClick: handleEquals },
    { id: "zero", label: "0", onClick: () => handleNumber("0") },
    { id: "one", label: "1",  onClick: () => handleNumber("1") },
    { id: "two", label: "2",  onClick: () => handleNumber("2") },
    { id: "three", label: "3",  onClick: () => handleNumber("3") },
    { id: "four", label: "4",  onClick: () => handleNumber("4") },
    { id: "five", label: "5",  onClick: () => handleNumber("5") },
    { id: "six", label: "6",  onClick: () => handleNumber("6") },
    { id: "seven", label: "7",  onClick: () => handleNumber("7") },
    { id: "eight", label: "8",  onClick: () => handleNumber("8") },
    { id: "nine", label: "9",  onClick: () => handleNumber("9") },
    //maybe put this in a different object
    { id: "add", label: "+",  onClick: () => handleOperator("+") },
    { id: "subtract", label: "-", onClick: () => handleOperator("-") },
    { id: "multiply", label: "x", onClick: () => handleOperator("x") },
    { id: "divide", label: "/", onClick: () => handleOperator("/") },
    { id: "decimal", label: ".", onClick: handleDecimal },
    { id: "clear", label: "clear", onClick: handleClear }
  ]
*/
  function handleNumber(e) {
    const number = e.target.textContent
    setDisplay(number)
    if (display === "0") {

    } else {
      setDisplay(display + number)
    }
    //setCurrentNumber(currentNumber + number)

  }



  function handleOperator(e) {
    const operator = e.target.textContent
   
    setDisplay(display + " " + operator + " ")

    /*
    if (currentNumber !== "") {
      if (operator !== null) {
        calcResult()
      } else {
        setNumber(parseFloat(currentNumber))
      }
      setCurrentNumber("")
      setOperator(operator)
    }
  }
  function handleDecimal() {
    if (!currentNumber.includes(".")) {
      setCurrentNumber(currentNumber + ".")
    }
    */
  }

  /*
  function calcResult() {
    const current = parseFloat(currentNumber)
    let result = number
    switch (operator) {
      case "+":
        result += current
        break
      case "-":
        result -= current
        break
      case "x":
        result *= current
        break
      case "/":
        if (current !== 0) {
          result /= current
        } else {
          alert("Error. Division by zero is not allowed!")
          handleClear()
          return
        }
        break
      default:
        break
    }
    setNumber(result)
  }
  */

  function handleEquals() {
    setDisplay(eval(display)) //security issue 
    /*
    if (operator && currentNumber !== "") {
      calcResult()
      setCurrentNumber("")
      setOperator(null)
    }
    */
  }

  function handleDecimal() {
    const numberArray = display.split(" ")
    const lastElement = numberArray[numberArray.length - 1]
    if (!lastElement.includes(".") && typeof parseInt(lastElement) === "number") {
      setDisplay(display + ".") 
    }
  }

  function handleClear() {
    setDisplay("0")
    /*
    setNumber(null)
    setCurrentNumber("")
    setOperator(null)
    */
  }
/*
  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key
      if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "x" || key === "/" || key === "=") {
        e.preventDefault()
        switch(key) {
          case "+":
          case "-":
          case "x":
          case "/":
            handleOperator(key)
            break
          case "=":
            handleEquals()
            break
          default:
            handleNumber(key)
            break  
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleNumber, handleOperator, handleEquals])

  */

//Do more design work and fix handleDecimal
  return (
    <div id="whole-calculator">
      <h1 id="title">Calculator App</h1>
     
      <div id="display" className="row" style={{ textAlign: "right" }}>{display}</div>
      <div id="calculator-body">
        <button id="clear" className="row" onClick={handleClear}>Clear</button>
        <button id="seven" onClick={handleNumber}>7</button>
        <button id="eight" onClick={handleNumber}>8</button>
        <button id="nine" onClick={handleNumber}>9</button>
        <button id="multiply" onClick={handleOperator}>*</button>
        <button id="four" onClick={handleNumber}>4</button>
        <button id="five" onClick={handleNumber}>5</button>
        <button id="six" onClick={handleNumber}>6</button>
        <button id="divide" onClick={handleOperator}>/</button>
        <button id="one" onClick={handleNumber}>1</button>
        <button id="two" onClick={handleNumber}>2</button>
        <button id="three" onClick={handleNumber}>3</button>
        <button id="add" onClick={handleOperator}>+</button>
        <button id="zero" onClick={handleNumber}>0</button>
        <button id="decimal" onClick={handleDecimal}>.</button>
        <button id="equals" onClick={handleEquals}>=</button>
        <button id="subtract" onClick={handleOperator}>-</button>     
      </div>
    </div>
  )

}
/*
<div id="calculator-body">
{calcData.map((item) => (
    <button className="calc-buttons" key={item.id} id={item.id} onClick={item.onClick}>{item.label}</button> 
))}
</div>
*/

export default Calculator