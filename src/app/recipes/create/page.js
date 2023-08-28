'use client'

// reference https://stackoverflow.com/questions/66469913/how-to-add-input-field-dynamically-when-user-click-on-button-in-react-js
import { useState } from "react";
import Input from "@/app/components/atoms/Input/Input";
import InfiniteInput from "@/app/components/molecules/InfiniteInput/InfiniteInput";

export default function CreateRecipe() {
  const [titleVal, setTitleVal] = useState("");
  const [inputArray, setInputArray] = useState(() => {
    return [{
      id: 0,
      name: {
        value: ""
      },
      count: {
        value: ""
      },
      unit: {
        value: "none"
      }
    }]
  })
  // event handlers
  const onTitleChangeHandler = e => {
    e.preventDefault();
    setTitleVal(e.target.value);
  }
  const onIngNameChangeHandler = (e, inpName, index) => {
    e.preventDefault();
    console.log("changing val to", e.target.value)
    setInputArray((curr) => {
      let currArray = curr;
      currArray[index][inpName].value = e.target.value;
      return [...currArray];
    });
  }
    const onCountChangeHandler = (e, inpName, index) => {
    e.preventDefault();
    setInputArray((curr) => {
      let currArray = curr;
      currArray[index][inpName].value = e.target.value;
      return [...currArray];
    });
  }
  const onUnitChangeHandler = (e, index) => {
    // selected is not changing, but inputArray is appropriately updating.
    e.preventDefault();
    setInputArray((curr) => {
      let currArray = curr;
      currArray[index].unit.value = e.target.value;
      return [...currArray];
    });
    console.log(inputArray)
  }

  const addInput = () => {    
    setInputArray((curr) => {
      const index = curr.length; // array lenght will be one greater than index used, thus can safely set it
      return [...curr, {
        id: index,
        name: {
          value: ""
        },
        count: {
          value: ""
        },
        unit: {
          value: ""
        }
      }]
    })
  }

  return (
    <main>
      <div>
        <label htmlFor="recipe-title">Recipe Title</label>
        <innpt id="recipe-title" name="recipe-title" value={titleVal} onChange={onTitleChangeHandler} />
      </div>
      <div>
        <ul>
          {inputArray.map((inp, index) => {
            return (
            <li key={index}>
              <label htmlFor="ing">Ingredient</label>
              <input id={`name-${index}`} name={`ing-${index}`} type="text" value={inputArray[index].name.value} onChange={(e) => onIngNameChangeHandler(e, "name", index)} size="40" />
              <label htmlFor={`count-${index}`}>Quantity</label>
              <input id={`count-${index}`} name={`count-${index}`} type="number" value={inputArray[index].count.value} onChange={(e) => {onCountChangeHandler(e, "count", index)}} size="40" />
              <label htmlFor={`unit-select-${index}`}>Unit</label>
              <select id={`unit-${index}`} name={`unit-select-${index}`} onChange={(e) => {onUnitChangeHandler(e, index)}}>
                <option selected={inputArray[index].unit.value === "none"} value="none">--none--</option>
                <option selected={inputArray[index].unit.value === "cup"} value="cup">Cup</option>
                <option selected={inputArray[index].unit.value === "tbsp"} value="tbsp">Tbsp</option>
                <option selected={inputArray[index].unit.value === "tsp"} value="tsp">Tsp</option>
                <option selected={inputArray[index].unit.value === "gram"} value="gram">Gram</option>
              </select>
            </li>)
          })}
        </ul>
        <button onClick={addInput}>add</button>
      </div>
    </main>
  );
}