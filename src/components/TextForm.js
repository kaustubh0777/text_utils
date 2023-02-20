import React from "react";
import { useState } from "react";


export default function TextForm(props) {
    const handleUp=()=>{
        
        setText(text.toUpperCase());
    }
    const handleLower=()=>{
    
        setText(text.toLowerCase());
    }
    const handleReset=()=>
    {
        setText('Enter Your Text Here')
    }
    const handleOnChange=(event)=>
    {
        setText(event.target.value)
    }
    const[text,setText]=useState('Enter Your Text Here')
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}>

        </textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUp}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLower}>
        Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleReset}>
        Reset to Default
      </button>
    </div>
    <div className="container my-3">
        <h1>
            Your Text Summary
        </h1>
        <p>{text.split(" ").length} words,{text.length} characters</p>
        <p>Time taken to read {0.008*text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
