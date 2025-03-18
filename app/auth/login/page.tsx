import { Outfit } from 'next/font/google';

import { Metadata } from 'next';
import LoginForm from '@/app/components/auth/LoginForm';

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
		</div>
	);
}
