import React from "react";

const Button = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className="bg-green-500 text-white border border-green-700 p-2 rounded mt-auto"
		>
			{children}
		</button>
	);
};

export default Button;
