import { useState, useEffect } from 'react'

import '../App.css'
function Calculator() {


  const [result, setResult] = useState("")
  const [expression, setExpression] = useState("")
  const et = expression.trim()

 
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

  
  function isOperator(symbol) {
    return /[*/+-]/.test(symbol)
  }


  function calculate() {
    // if last char is an operator, do nothing
    if (isOperator(et.charAt(et.length - 1))) return
    // clean the expression so that two operators in a row uses the last operator
    // 5 * - + 5 = 10
    const parts = et.split(" ")
    const newParts = []

    // go through parts backwards
    for (let i = parts.length - 1; i >= 0; i--) {
      if (["*", "/", "+"].includes(parts[i]) && isOperator(parts[i - 1])) {
        newParts.unshift(parts[i])
        let j = 0;
        let k = i - 1
        while (isOperator(parts[k])) {
          k--
          j++
        }
        i -= j
      } else {
        newParts.unshift(parts[i])
      }
    }
    const newExpression = newParts.join(" ")
    if (isOperator(newExpression.charAt(0))) {
      setResult(eval(result + newExpression))
    } else {
      setResult(eval(newExpression))
    }
    setExpression("")
  }

  function buttonPress(symbol) {
    if (symbol === "clear") {
      setResult("")
      setExpression("0")
      
    } else if (isOperator(symbol)) {
      setExpression(et + " " + symbol + " ")
    } else if (symbol === "=") {
      calculate()
    } else if (symbol === "0") {
      if (expression.charAt(0) !== "0") {
        setExpression(expression + symbol)
      }
    } else if (symbol === ".") {
      // split by operators and get last number
      const lastNumber = expression.split(/[-+/*]/g).pop()
      if (!lastNumber) return
      console.log("lastNumber :>> ", lastNumber)
      // if last number already has a decimal, don't add another
      if (lastNumber?.includes(".")) return
      setExpression(expression + symbol)
    } else {
      if (expression.charAt(0) === "0") {
        setExpression(expression.slice(1) + symbol)
      } else {
        setExpression(expression + symbol)
      }
    }
  }
  
  
  return (
    <div id="whole-calculator">
      <h1 id="title">Calculator App</h1>
     
      <div id="display" className="row" style={{ textAlign: "right" }}>
        <div id="result">{result}</div>
        <div id="expression">{expression}</div>
      </div>

      <div id="calculator-body">
        <button id="clear" className="row" onClick={() => buttonPress("clear")}>Clear</button>
        <button id="seven" onClick={() => buttonPress("7")}>7</button>
        <button id="eight" onClick={() => buttonPress("8")}>8</button>
        <button id="nine" onClick={() => buttonPress("9")}>9</button>
        <button id="multiply" onClick={() => buttonPress("*")}>*</button>
        <button id="four" onClick={() => buttonPress("4")}>4</button>
        <button id="five" onClick={() => buttonPress("5")}>5</button>
        <button id="six" onClick={() => buttonPress("6")}>6</button>
        <button id="divide" onClick={() => buttonPress("/")}>/</button>
        <button id="one" onClick={() => buttonPress("1")}>1</button>
        <button id="two" onClick={() => buttonPress("2")}>2</button>
        <button id="three" onClick={() => buttonPress("3")}>3</button>
        <button id="add" onClick={() => buttonPress("+")}>+</button>
        <button id="zero" onClick={() => buttonPress("0")}>0</button>
        <button id="decimal" onClick={() => buttonPress(".")}>.</button>
        <button id="equals" onClick={() => buttonPress("=")}>=</button>
        <button id="subtract" onClick={() => buttonPress("-")}>-</button>     
      </div>
    </div>
  )

}


export default Calculator