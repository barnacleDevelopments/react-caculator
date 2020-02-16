import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function CalcButtons(props) {
  return (
    <div>
      <div className="calc-buttons">
        <div onClick={props.calcClear}>C</div>
      </div>
      <div className="calc-buttons">
        <div onClick={props.numFunc}>1</div>
        <div onClick={props.numFunc}>2</div>
        <div onClick={props.numFunc}>3</div>
        <div onClick={props.numFunc}>4</div>
        <div onClick={props.numFunc}>5</div>
        <div onClick={props.numFunc}>6</div>
        <div onClick={props.numFunc}>7</div>
        <div onClick={props.numFunc}>8</div>
        <div onClick={props.numFunc}>9</div>
      </div>
      <div className="calc-buttons">
        <div onClick={props.calcInputs}>=</div>
        <div onClick={props.opFunc}>+</div>
        <div onClick={props.opFunc}>-</div>
      </div>
      
    </div>
  )
}

function CalcNumDisplay(props) {
  return (
    <div className="calc-display">
      <div>{props.displayNums}</div>
    </div>
  )
}

function CalculationDisplay(props) {
  return (
    <div>
      <div>{props.currentCalc}</div>
    </div>
  )
}

const App = () => {

const [displayNum, setDisplayNum] = useState([])
const [operator, setOperator]     = useState()
const [currentCalc, setCurrentCalc] = useState([])


function getCalcNumInput(e) {
  const numPressed = e.target.textContent
  setDisplayNum([displayNum, numPressed])
  setCurrentCalc([...currentCalc, numPressed])
}

function getOperatorInput(e) {
  console.log(e.target)
  const opPressed = e.target.textContent
  setOperator(opPressed)
  setCurrentCalc([...currentCalc, opPressed])
  setDisplayNum([])
}

function calculateInputs() {
  let calcString = ""
  currentCalc.forEach(item => {
    calcString += item
  })

  const result = eval(calcString)

  setDisplayNum(result)
  setCurrentCalc([""])
}

function clearCalculation() {
  setCurrentCalc([""])
  setDisplayNum([])
}

  return (
    <div className="App">
      <CalcNumDisplay displayNums={displayNum} />
      <CalculationDisplay  currentCalc={currentCalc} />
      <CalcButtons calcClear={clearCalculation} calcInputs={calculateInputs} opFunc={getOperatorInput} numFunc={getCalcNumInput} />
      
    </div>
  );
}

export default App;
