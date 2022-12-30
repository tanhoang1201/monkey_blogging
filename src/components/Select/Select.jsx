import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({ data, onChange }) {
	return (
		<Autocomplete
			disablePortal
			options={data}
			isOptionEqualToValue={(option, value) => option.id === value.id}
			onChange={onChange}
			sx={{
				width: "100%",
				backgroundColor: "#E7ECF3",
				borderRadius: "4px",
				"& 	.MuiAutocomplete-input": { fontWeight: 600, color: "#292D32" },
			}}
			renderInput={(params) => (
				<TextField
					sx={{ "& .MuiFormLabel-root": { fontWeight: 600 } }}
					{...params}
					label="Select an category..."
				/>
			)}
		/>
	);
}
