import Image from 'next/image';
// import logo from '/logo.png';
export default function Logo() {
	return (
		<Image
			src='/logo.png'
			alt='logo budget hero'
			width={500} // Adjust these values to match your image dimensions
			height={500} // Adjust these values to match your image dimensions
			layout='intrinsic' // You can try different layouts like 'fixed', 'responsive', etc.
		/>
	);
}
