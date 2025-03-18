import { Outfit } from 'next/font/google';

import { Metadata } from 'next';
import ForgotPasswordForm from '@/app/components/auth/ForgotPasswordForm';
import Link from 'next/link';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BudgetHero - Forgot password',
	description: 'BudgetHero - Forgot password',
};

export default function ResetPasswordPage() {
	return (
		<div className={outfit.className}>
			<h1 className='font-black text-6xl text-purple-950'>
				Forgot your Credentials?
			</h1>
			<p className='text-3xl font-bold'>
				Here you can reset your <span className='text-amber-500'>Password</span>
			</p>
			<ForgotPasswordForm />
			<nav className='mt-10 flex flex-col '>
				<Link href='/auth/login' className='text-center text-gray-500'>
					Have and account? click here to
					<span className='text-amber-500'> Login </span>
				</Link>
				<Link href='/auth/register' className='text-center text-gray-500'>
					Don&apos;t have and account? click here to
					<span className='text-amber-500'> Register </span>
				</Link>
			</nav>
		</div>
	);
}
