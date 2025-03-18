import { DynaPuff } from 'next/font/google';

const emblema = DynaPuff({ weight: '400', subsets: ['latin'] });

export default function Logo() {
	return (
		<>
			<div className={`${emblema.className} flex gap-4 p-4`}>
				<span className='text-5xl'>💰</span>
				<p className='text-5xl text-white'>
					Budget<span className='text-orange-500'>Hero</span>
				</p>
			</div>
		</>
	);
}
