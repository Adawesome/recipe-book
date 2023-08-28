"use client"

/**
 * 
 * @param {string} id (required) The html identifier string
 * @param {string} type (optional) The input type to use. Defaults to "text"
 * @param {string} value (optional) An initial value. Defaults to an empty string "".
 * @param {string} size (optional) 
 * @param {string} labelName (optional) The innerText of a label, does not render if undefined.
 * @param {function} onChange (required) Event handler to mutate input value.
 * @returns 
 */
export default function Input(props) {
	const { id, type = "text", value = "", size, labelName = undefined, onChange } = props; // destruct props
	return (
		<>
			{labelName && <label>{labelName}</label>}
			<input id={id} type={type} value={value} size={size} onChange={onChange}/>
		</>

	);
}