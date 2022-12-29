import { FormControlLabel, Radio } from "@mui/material";
import PropTypes from "prop-types";

const RadioButton = ({ label, value }) => {
	return (
		<FormControlLabel
			sx={{
				"& .MuiFormControlLabel-label": {
					fontWeight: 600,
					fontSize: "18px",
				},
			}}
			value={value}
			control={
				<Radio
					sx={{
						"& .MuiSvgIcon-root": {
							fontSize: 28,
						},
					}}
				/>
			}
			label={label}
		/>
	);
};

RadioButton.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default RadioButton;
