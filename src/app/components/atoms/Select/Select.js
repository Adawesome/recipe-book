"use client"

/**
 * 
 * @param {string} id The html id to use
 * @param {string} name The name to pair options and label
 * @param {string} labelName the text for the label
 * @param {function} onChange event handler to bind choice to a variable
 * @returns 
 */
export default function Input(props) {
	const { id, name, labelName, onChange } = props; // destruct props
	return (
    <>
      <label>{labelName}</label>
      <select id={id} name={name} onChange={() => {onChange()}}>
        <option value="cup">Cup</option>
        <option value="tbsp">Tbsp</option>
        <option value="tsp">Tsp</option>
        <option value="gram">Gram</option>
      </select>
    </>

	);
}