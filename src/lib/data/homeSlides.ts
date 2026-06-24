export type HomeSlide = {
	title: string;
	text: string;
	button: string;
	href: string;
	image: string;
	position: 'left' | 'right';
};

export type ServiceCard = {
	title: string;
	description: string;
	image: string;
	href: string;
	color: 'pink' | 'blue' | 'green' | 'purple';
};

export const homeSlides: HomeSlide[] = [
	{
		title: 'kinderBAND™',
		text: 'Custom-made cranial remolding helmet prescribed for plagiocephaly. It is also referred to as a cranial helmet, cranial band or helmet therapy.',
		button: 'Learn More',
		href: '/about',
		image: '/images/kinderband-slide-1.jpg',
		position: 'right'
	},
	{
		title: 'Available in 9 States',
		text: 'kinderBAND™ is available in 9 states including Puerto Rico.',
		button: 'Learn More',
		href: '/clinics',
		image: '/images/kinderband-slide-2.jpg',
		position: 'left'
	}
];

export const serviceCards: ServiceCard[] = [
	{
		title: 'Plagiocephaly',
		description:
			'A condition where an infant’s head is asymmetrical, having an uneven or irregular shape.',
		image: '/images/services1.jpg',
		href: '/plagiocephaly',
		color: 'pink'
	},
	{
		title: 'Brachycephaly',
		description:
			'A condition where an infant’s head is disproportionately wide.',
		image: '/images/services2.jpg',
		href: '/brachycephaly',
		color: 'blue'
	},
	{
		title: 'Scaphocephaly',
		description:
			'Also known as dolichocephaly, it is a condition where the skull is disproportionately narrow and appears elongated.',
		image: '/images/services3.jpg',
		href: '/scaphocephaly',
		color: 'green'
	},
	{
		title: 'Torticollis',
		description:
			'A condition where an infant has an imbalance in the neck muscles, causing the head to tilt to one side.',
		image: '/images/services4.jpg',
		href: '/torticollis',
		color: 'purple'
	}
];