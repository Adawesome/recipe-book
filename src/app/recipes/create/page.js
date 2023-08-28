'use client'

// reference https://stackoverflow.com/questions/66469913/how-to-add-input-field-dynamically-when-user-click-on-button-in-react-js
import { useState } from "react";
import Input from "@/app/components/atoms/Input/Input";
import InfiniteInput from "@/app/components/molecules/InfiniteInput/InfiniteInput";

export default function CreateRecipe() {
  const [titleVal, setTitleVal] = useState("");
  const onTitleChangeHandler = e => {
    e.preventDefault();
    setTitleVal(e.target.value);
  }

  return (
    <main>
      <div>
        <Input id="recipe-title" value={titleVal} onChange={onTitleChangeHandler} />
      </div>
      <div>
        <InfiniteInput />
      </div>
    </main>
  );
}