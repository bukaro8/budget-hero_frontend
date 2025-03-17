import React from 'react';

const RegisterForm = () => {
	return (
		<>
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
		</>
	);
};

export default RegisterForm;
