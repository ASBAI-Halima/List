const Input = ({ ...props }) => {
	return (
		<input
			className="p-2 rounded bg-[#eee] w-full"
			{...props}
		/>
	);
};

export default Input;
