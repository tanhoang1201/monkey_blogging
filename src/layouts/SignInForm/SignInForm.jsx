import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import Button from "../../components/Button";
import InputGroup from "../../components/InputGroup/InputGroup";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import { auth } from "../../configs/firebase.config";

const schema = yup.object({
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

const SignInForm = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});
	const handleSubmitSignIn = async (values) => {
		try {
			const res = await signInWithEmailAndPassword(auth, values.email, values.password);
			navigate("/");
			console.log(res);
			toast.success("Login successful!!!", { icon: "🧐" });
		} catch (error) {
			toast.warn(error.core, { icon: "😢" });
		}
	};
	return (
		<form action="" className="flex flex-col gap-8" onSubmit={handleSubmit(handleSubmitSignIn)}>
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
				Don't have an account yet ?{" "}
				<Link className="text-red-500 font-semibold underline hover:no-underline" to="/signup">
					Sign Up
				</Link>
			</p>
			<Button
				className="w-max m-auto flex items-center gap-3 h-[64px] mt-8 text-2xl py-4"
				disabled={isSubmitting}
			>
				{isSubmitting && <Loading className={"border-white w-8 h-8"} />}
				Sign In
			</Button>
		</form>
	);
};

export default SignInForm;
