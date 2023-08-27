"use client"

/**
 * 
 * @param {string} id 
 * @param {string} type 
 * @param {string} value 
 * @param {string} size 
 * @param {string} labelName
 * @param {function} onChange  
 * @returns 
 */
export default function Input(props) {
	const { id, type, value, size, labelName, onChange } = props; // destruct props
	return (
		<>
			<label>{labelName}</label>
			<input id={id} type={type} value={value} size={size} onChange={() => {onChange()}}/>
		</>

	);
}