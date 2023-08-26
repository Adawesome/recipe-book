"use client"

export default function Input(props) {
	const { id, type, value, size, onChange } = props; // destruct props
	return (
		<input id={id} type={type} value={value} size={size} onChange={() => {onChange()}}/>
	);
}