export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className='lg:grid lg:grid-cols-2 lg:min-h-screen'>
				<section className='bg-purple-950'></section>
				<section className='p-10 lg:py-28'>
					<div className='max-w-3xl mx-auto'>{children}</div>
				</section>
			</div>
		</>
	);
}
