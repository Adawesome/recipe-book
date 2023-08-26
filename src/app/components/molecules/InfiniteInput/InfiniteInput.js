"use client"

import { useState } from "react";
import Input from "../../atoms/Input/Input";

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
              <Input id={index} type={inp.type} value="" onChange={() => {alert("dingle berry")}} size="40"/>
            </li>)
          })}
        </ul>
        <button onClick={addInput}>add</button>
    </div>
	);
}