'use client';

import { useEffect, useState } from 'react';
import { Outfit } from 'next/font/google';
import RegisterForm from '@/app/components/RegisterForm';

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

			<RegisterForm />
		</div>
	);
}
