import { z } from 'zod';

export const RegisterSchema = z
	.object({
		name: z.string().min(1, 'Please add your name'),
		email: z.string().min(1, 'Please add your email').email(),
		password: z.string().min(6, 'Password must be at least 6 Characters long'),
		password_confirmation: z.string(),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: 'Passwords must be the same',
		path: ['password_confirmation'],
	});
