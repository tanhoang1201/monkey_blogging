import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { auth, userInstance } from "../configs/firebase.config";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup/InputGroup";
import { CircularProgress } from "@mui/material";
import images from "../assets/images";

const schema = yup.object({
	name: yup.string().required().min(6),
	email: yup.string().required().email(),
	password: yup
		.string()
		.required()
		.min(8)
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
			"At least one uppercase letter, one lowercase letter and one number"
		),
});

const SignUpForm = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	const handleSubmitSignUp = async (values) => {
		try {
			const res = await createUserWithEmailAndPassword(auth, values.email, values.password);
			await updateProfile(auth.currentUser, {
				displayName: values.name,
			});

			await addDoc(userInstance, { id: res.user.uid, ...values });
			reset({
				name: "",
				email: "",
				password: "",
			});
			toast.success("Registers successfully!!!", {
				icon: "😍",
			});
			navigate("/");
		} catch (error) {
			toast.warn(error.code, { icon: "❌" });
		}
	};
	return (
		<div className="w-[832px] mx-auto py-6 px-4">
			<Link to={"/"} className="text-center mb-6 block">
				<img src={images.logo} alt="" className="inline-block" />
			</Link>
			<h1 className="font-semibold text-primary text-4xl mb-24 text-center">Monkey Blogging</h1>
			<form action="" className="flex flex-col gap-8" onSubmit={handleSubmit(handleSubmitSignUp)}>
				<InputGroup
					placeholder="Please enter your full name..."
					label="Full Name"
					id="name"
					register={register("name")}
					error={errors.name?.message}
				/>
				<InputGroup
					placeholder="Please enter your email address..."
					label="Email Address"
					type="email"
					id="email"
					register={register("email")}
					error={errors.email?.message}
				/>
				<InputGroup
					placeholder="Please enter your password..."
					label="Password"
					type="password"
					id="password"
					register={register("password")}
					error={errors.password?.message}
				/>
				<p className="text-primary">
					You already have an account ?{" "}
					<Link className="text-red-500 font-semibold underline" to="/signin">
						Sign In
					</Link>
				</p>

				<Button
					className="w-max m-auto flex items-center gap-3"
					size="h-[64px]"
					disabled={isSubmitting}
				>
					{isSubmitting && <CircularProgress />}
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
