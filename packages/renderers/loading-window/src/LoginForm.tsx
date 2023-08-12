import { useForm } from "react-hook-form";

import { Form, LoginButton } from "./styles";

interface ILoginFormData {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const {
		handleSubmit,
		register,
		watch,
		formState: { isSubmitting },
	} = useForm<ILoginFormData>();

	const onSubmit = async (userToLogin: ILoginFormData) => {
		if (isSubmitting) {
			return;
		}

		try {
			console.log("Login user", userToLogin);
		} catch (error) {
			console.error("Failed to login", error);
		}
	};

	const shouldDisableSubmit = () => {
		const { email, password } = watch();
		return !email || !password;
	};

	return (
		<Form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
			<input type="text" placeholder="Email" {...register("email")} />
			<input
				type="password"
				placeholder="Password"
				{...register("password")}
			/>

			<LoginButton type="submit" disabled={shouldDisableSubmit()}>
				{isSubmitting ? "loading..." : "Submit"}
			</LoginButton>
		</Form>
	);
};
