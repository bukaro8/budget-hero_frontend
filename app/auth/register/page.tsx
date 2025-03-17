'use client';

import { useEffect, useState } from 'react';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export default function RegisterPage() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<div className={isMounted ? outfit.className : ''}>
			<h1 className='font-black text-6xl text-purple-950'>Create Account</h1>
			<p className='text-3xl font-bold'>
				Control your <span className='text-amber-500'>budgets</span>
			</p>

			<form className='mt-14 space-y-5' noValidate>
				<div className='flex flex-col gap-2'>
					<input
						id='email'
						type='email'
						placeholder='Email'
						className='w-full border border-gray-300 p-3 rounded-lg'
						name='email'
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<input
						type='text'
						placeholder='Name'
						className='w-full border border-gray-300 p-3 rounded-lg'
						name='name'
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<input
						type='password'
						placeholder='Password'
						className='w-full border border-gray-300 p-3 rounded-lg'
						name='password'
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<input
						id='password_confirmation'
						type='password'
						placeholder='Confirm Password'
						className='w-full border border-gray-300 p-3 rounded-lg'
						name='password_confirmation'
					/>
				</div>

				<input
					type='submit'
					value='Create Account'
					className='bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer block'
				/>
			</form>
		</div>
	);
}
