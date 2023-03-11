import React, { useReducer } from 'react';
import { reducer, initialState } from "../reducers/index.js"
import './App.css';
import { applyNumber, changeOperation, clearDisplay } from "../actions/index"

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log("this is state:", state, "this is the dispatch;", dispatch);

  const clickAdd = (e) => {
    dispatch(applyNumber(Number(e.target.value)))
  }

  const clickOperator = e => {
    dispatch(changeOperation(e.target.value))
  }

  const clearTotal = () => {
    dispatch(clearDisplay())
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => clickAdd(e)}/>
              <CalcButton value={2} onClick={(e) => clickAdd(e)}/>
              <CalcButton value={3} onClick={(e) => clickAdd(e)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e) => clickAdd(e)}/>
              <CalcButton value={5} onClick={(e) => clickAdd(e)}/>
              <CalcButton value={6} onClick={(e) => clickAdd(e)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e) => clickAdd(e)}/>
              <CalcButton value={8} onClick={(e) => clickAdd(e)}/>
              <CalcButton value={9} onClick={(e) => clickAdd(e)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={e => clickOperator(e)}/>
              <CalcButton value={"*"} onClick={e => clickOperator(e)}/>
              <CalcButton value={"-"} onClick={e => clickOperator(e)}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearTotal()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
