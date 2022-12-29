import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { UploadIcon } from "../components/icons";
import InputGroup from "../components/InputGroup/InputGroup";
import RadioButton from "../components/Radio";

const DashboardAddPost = () => {
	const [avatar, setAvatar] = useState();
	const handlePreview = (e) => {
		const file = URL.createObjectURL(e.target.files[0]);
		setAvatar(file);
	};
	return (
		<div>
			<h2>Add new post</h2>
			<form>
				<InputGroup label={"Title"} placeholder="Enter your title..." />
				<InputGroup label={"Slug"} placeholder="Enter your slug..." />
				<div>
					<label htmlFor="" className="text-xl font-semibold mb-4 text-dark block">
						Status
					</label>
					<RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="status">
						<RadioButton label="Pending" value="pending" />
						<RadioButton label="Pending" value="reject" />
						<RadioButton label="Pending" value="approved" />
					</RadioGroup>
				</div>
				<div>
					<label htmlFor="" className="text-xl font-semibold mb-4 text-dark block">
						Image
					</label>
					<label
						htmlFor="img"
						className="border-dashed border-2 border-primary w-[200px] h-[200px] rounded-md overflow-hidden flex items-center justify-center relative"
					>
						<input hidden id="img" type="file" onChange={handlePreview} />
						{avatar && <img src={avatar} className="absolute w-full h-full object-contain" />}
						<UploadIcon />
					</label>
				</div>
			</form>
		</div>
	);
};

export default DashboardAddPost;
