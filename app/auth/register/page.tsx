import { Outfit } from 'next/font/google';
import RegisterForm from '@/app/components/auth/RegisterForm';
import { Metadata } from 'next';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BudgetHero - Register',
	description: 'BudgetHero - Register',
};

export default function RegisterPage() {
	return (
		<div className={outfit.className}>
			<h1 className='font-black text-6xl text-purple-950'>Create Account</h1>
			<p className='text-3xl font-bold'>
				Control your <span className='text-amber-500'>budgets</span>
			</p>

			<RegisterForm />
		</div>
	);
}
