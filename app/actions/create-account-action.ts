'use server';

import { RegisterSchema } from '@/src';

export const register = async (formData: FormData) => {
	const registerData = {
		name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password'),
		password_confirmation: formData.get('password_confirmation'),
	};

	//?Validating
	const register = RegisterSchema.safeParse(registerData);
	const errors = register.error?.errors.map((error) => error.message);
	console.log(errors);
	console.log(register);
	//?create user
};
