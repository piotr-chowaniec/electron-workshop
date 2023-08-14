import { useForm } from "react-hook-form";

import { ILoginFormData } from "@electron-workshop/common";

import { Form, LoginButton } from "./styles";

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
			await window.electronClient.invokeSubmitLogin(userToLogin);
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
