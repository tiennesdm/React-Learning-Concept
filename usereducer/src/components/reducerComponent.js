import React , {useReducer, useState} from 'react';
import {initialState, reducer} from './../store/reducer';

export default function LearnReducer(){
    const [state, dispatch] = useReducer(reducer,initialState);
    const [formValue, setFormValue] = useState(null);
    const Increment = ()=>{
      dispatch({type: 'INCREMENT'});
    }
    const Decrement = () =>{
      dispatch({type: 'DECREMENT'});
    }
    const MULTIPLY = () =>{
      dispatch({type: 'MULTIPLY'});
    }
    const DIVIDE = () =>{
      dispatch({type: 'DIVIDE'});
    }
    const noAction = () =>{
      dispatch({type: 'NOACTION'});
    }
    const inputValue = (e) =>{
        console.log("....event.ta", e.target.value);
        setFormValue(e.target.value);

    }
    const dispatchValue = (e) =>{
        dispatch({type: 'INCREMENT', payload: formValue});
    }
    return (
        <div className="App">
          <h1>{state}</h1>
          <input type="number" onChange={inputValue}/>
         <button onClick= {Increment} >Increment  </button>
         <button onClick = {Decrement} >Decrement </button>
         <button onClick = {MULTIPLY}>MULTIPLY  </button>
         <button onClick = {DIVIDE} >DIVIDE </button>
         <button onClick = {noAction}>No Action  </button>
         <button onClick = {dispatchValue}>Dispatch Form Value</button>
         </div>
      );

}