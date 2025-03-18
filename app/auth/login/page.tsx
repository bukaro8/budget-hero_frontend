import { Outfit } from 'next/font/google';

import { Metadata } from 'next';
import LoginForm from '@/app/components/auth/LoginForm';
import Link from 'next/link';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BudgetHero - Login',
	description: 'BudgetHero - Login',
};

export default function LoginPage() {
	return (
		<div className={outfit.className}>
			<h1 className='font-black text-6xl text-purple-950'>Login</h1>
			<p className='text-3xl font-bold'>
				Control your <span className='text-amber-500'>budgets</span>
			</p>
			<LoginForm />
			<nav className='mt-10 flex flex-col '>
				<Link href='/auth/register' className='text-center text-gray-500'>
					Don&apos;t have and account? click here to
					<span className='text-amber-500'> Register </span>
				</Link>
				<Link
					href='/auth/forgot-password'
					className='text-center text-gray-500'
				>
					Can&apos;t access your account? Reset your
					<span className='text-amber-500'> Password </span>
				</Link>
			</nav>
		</div>
	);
}
