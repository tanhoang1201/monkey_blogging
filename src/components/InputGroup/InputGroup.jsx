import { useState } from "react";
import PropTypes from "prop-types";

import { EyeIcon, EyeClosedIcon } from "../icons";

const InputGroup = ({ label, type = "text", register, error, ...props }) => {
	const [isShowPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => {
		setShowPassword(!isShowPassword);
	};
	const finalType = type === "password" && isShowPassword ? "text" : type;
	return (
		<div>
			<label htmlFor={props.id} className="text-xl font-semibold mb-4 text-dark block">
				{label}
			</label>
			<div className="relative">
				<input
					{...props}
					type={finalType}
					className="p-5 outline-none bg-light border border-transparent rounded-md w-full focus:border-border focus:bg-transparent transition-all"
					{...register}
				/>
				{error && <p className="text-red-500">{error}</p>}
				{type === "password" && (
					<div
						className=" absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-white rounded-full p-1 transition-all"
						onClick={handleShowPassword}
					>
						{!isShowPassword ? <EyeClosedIcon /> : <EyeIcon />}
					</div>
				)}
			</div>
		</div>
	);
};

InputGroup.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	error: PropTypes.string,
};

export default InputGroup;
