import { useState, useEffect } from 'react'

import '../App.css'
function Calculator() {

  const [number, setNumber] = useState(null)
  const [currentNumber, setCurrentNumber] = useState("")
  const [operator, setOperator] = useState(null)

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

  function handleNumber(number) {
    setCurrentNumber(currentNumber + number)
  }

  function handleOperator(operator) {
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
  }

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

  function handleEquals() {
    if (operator && currentNumber !== "") {
      calcResult()
      setCurrentNumber("")
      setOperator(null)
    }
  }

  function handleClear() {
    setNumber(null)
    setCurrentNumber("")
    setOperator(null)
  }

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

  

//maybe add pictures for the button labels
//display is where the numbers are shown
  return (
    <div id="whole-calculator">
      <h1 id="title">Calculator App</h1>
     
      <div id="display">{currentNumber || number}</div>
      <div id="calculator-body">
        {calcData.map((item) => (
            <button className="calc-buttons" key={item.id} id={item.id} onClick={item.onClick}>{item.label}</button> 
        ))}
        
      </div>
    </div>
  )

}

export default Calculator