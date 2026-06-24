import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';

export const technologyPageData: InfoPageData = {
	pageTitle: 'Technology | kinderBAND™',
	heroBg: '/images/kinderband-bg.jpg',
	topFrameBg: '/images/header-bg.jpg',
	bottomFrameBg: '/images/header-bg.jpg',
	footerTopBg: '/images/footer-top-bg.jpg',
	backgroundSize: '100%',
	backgroundPosition: 'center top',
	cta: {
		text: 'Interested in Kinderband™?',
		buttonLabel: 'Contact Us Today for More Information',
		buttonHref: '/contact'
	},
	tabs: [
		{
			id: 'technology',
			label: 'Technology',
			icon: 'ⓘ',
			title: 'Got Technology?',
			image: '/images/technology00.png',
			imageAlt: 'Baby wearing helmet',
			blocks: [
				{
					type: 'paragraph',
					text: 'Combining the most advanced technology with over 80 years of clinical expertise, we have the technology needed for you.'
				}
			]
		},
		{
			id: 'bioscanner',
			label: 'BioScanner™',
			icon: '⌸',
			title: 'BioScanner™',
			image: '/images/technology01.jpg',
			imageAlt: 'BioScanner in use',
			blocks: [
				{
					type: 'paragraph',
					text: 'The BioScanner™ was designed to ensure the most comfortable, fast and safe scanning environment for your baby. We feel it offers the most relaxing yet accurate scanning available.'
				},
				{
					type: 'paragraph',
					text: 'The BioScanner™ works by using two cameras. Two cameras work twice as effectively as one to capture the anatomical data of your baby’s cranium.'
				},
				{
					type: 'paragraph',
					text: 'The miniature transmitter acts as a beacon to tell the BioScanner™ where to focus. It compensates for movement without affecting scan quality.'
				},
				{
					type: 'paragraph',
					text: 'The BioScanner™ allows cranial specialists to obtain key data without casting. It is incredibly accurate, capturing shapes within .178mm.'
				},
				{
					type: 'paragraph',
					text: 'The BioScanner™ is approved by the FDA.'
				}
			]
		},
		{
			id: 'scanning',
			label: 'Scanning Process',
			icon: '⚙',
			title: 'Scanning Process',
			images: [
				{
					src: '/images/technology02.jpg',
					alt: 'Scanning hood'
				},
				{
					src: '/images/technology03.jpg',
					alt: 'Transmitter placement'
				},
				{
					src: '/images/scanning03.jpg',
					alt: 'Scanning process'
				}
			],
			blocks: [
				{
					type: 'paragraph',
					text: 'The BioScanner™ was designed to ensure the most comfortable, fast and safe environment for your baby. We feel it offers the most relaxing yet accurate scanning process available.'
				},
				{
					type: 'paragraph',
					text: 'Step 1: While you hold your baby, the cranial specialist will quickly pull on a scanning hood. Two small holes will be made for the ears. Your baby’s eyes, nose and mouth are always exposed and never covered by the hood.'
				},
				{
					type: 'paragraph',
					text: 'Step 2: The transmitter will be placed on the top of the head underneath the scanning hood. This allows the BioScanner™ to obtain the anatomy of your baby’s head.'
				},
				{
					type: 'paragraph',
					text: 'Step 3: While you hold your baby comfortably in your lap, the cranial specialist will quickly scan their head and neck. The eyes are shielded and the process takes about 30 seconds.'
				},
				{
					type: 'paragraph',
					text: 'The BioScanner™ uses dual cameras for accuracy.'
				},
				{
					type: 'paragraph',
					text: 'No casting required.'
				},
				{
					type: 'paragraph',
					text: 'FDA approved technology.'
				}
			]
		}
	]
};