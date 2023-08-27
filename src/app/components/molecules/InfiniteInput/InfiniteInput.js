"use client"

import { useState } from "react";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/Select/Select";

export default function InfiniteInput(props) {
	const [inputArray, setInputArray] = useState(() => {
    return [
      {
        type: "text",
        value: ""
      }
    ]
  })

  const addInput = () => {    
    setInputArray((curr) => {
      return [...curr, {
        type: "text",
        value: ""
      }]
    })
  }
  
	return (
    <div>
        <ul>
          {inputArray.map((inp, index) => {
            return (
            <li key={index}>
              <Input id={`name-${index}`} type="text" value="" onChange={() => {alert("dingle berry")}} size="40" labelName="Ingredient"/>
              <Input id={`count-${index}`} type="number" value="" onChange={() => {alert("dingle berry")}} size="40" labelName="Quantity"/>
              <Select id={`unit-${index}`} name="sel" onChange={() => {alert("choice")}} labelName="Unit"/>
            </li>)
          })}
        </ul>
        <button onClick={addInput}>add</button>
    </div>
	);
}