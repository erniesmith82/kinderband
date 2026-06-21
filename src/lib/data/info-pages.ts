import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';
import { designOptions } from '$lib/data/designs';

export const aboutPageData: InfoPageData = {
	pageTitle: 'About | kinderBAND™',
	heroBg: '/images/kinderband-bg.jpg',
	topFrameBg: '/images/header-bg.jpg',
	bottomFrameBg: '/images/header-bg.jpg',
	footerTopBg: '/images/footer-top-bg.jpg',
	sideImage: '/images/kinderband01.png',
	sideImageAlt: 'Baby wearing kinderBAND',
	backgroundSize: '100%',
	backgroundPosition: 'center top',
	cta: {
		text: 'Interested in Kinderband™?',
		buttonLabel: 'Contact Us Today for More Information',
		buttonHref: '/contact'
	},
	tabs: [
		{
			id: 'overview',
			label: 'kinderBAND™',
			icon: 'ⓘ',
			title: 'kinderBAND™',
			blocks: [
				{
					type: 'paragraph',
					text: 'The kinderBAND™ cranial remolding helmet is a custom made orthosis available by prescription only. It is used to treat infants between 3 and 18 months of age for asymmetrical head shapes such as positional plagiocephaly, brachycephaly and scaphocephaly.'
				},
				{
					type: 'paragraph',
					text: 'It is made out of hypoallergenic foam and plastic that are all manufactured in accordance with GMP regulations as defined by Part 21 of the Code of Federal Regulations. The kinderBAND™ is 510k cleared by the FDA.'
				}
			]
		},
		{
			id: 'why',
			label: 'Why kinderBAND™',
			icon: '⚕',
			title: 'Why kinderBAND™?',
			blocks: [
				{
					type: 'paragraph',
					text: 'We designed the kinderBAND™ by combining the most advanced technology with over 80 years of clinical expertise. We developed a scanning system that is very comfortable, fast, safe and accurate. As a result, the kinderBAND™ is the most symmetrical design available today.'
				},
				{
					type: 'list',
					title: 'What We Do',
					items: [
						'We use the BioScanner™ so your baby sits comfortably on your lap.',
						'We use a special scanning hood that does not cover your baby’s eyes, nose or mouth.',
						'We shield your baby’s eyes during scanning.',
						'We let you hold your baby during scanning.',
						'We take 15–30 seconds to scan your baby.',
						'We use the BioScanner™ system, the most advanced technology in the field of Orthotics.'
					]
				}
			]
		},
		{
			id: 'how',
			label: 'How it Works',
			icon: '⌕',
			title: 'How it Works',
			blocks: [
				{
					type: 'paragraph',
					text: 'Because infants experience rapid growth of the skull between 3 and 18 months, it is possible to remold an asymmetrical head into a more symmetrical shape. We achieve this symmetrical remodeling by having the kinderBAND™ contact the head on the prominent areas, and creating space in the helmet for growth where the head is asymmetric.'
				},
				{
					type: 'paragraph',
					text: 'As the infant grows, the kinderBAND™ is customized to the developing skull on a 2–3 week interval by removing the interior foam lining. This encourages growth into the cavity formed in the helmet, thus achieving the desired skull and facial symmetry over time.'
				},
				{
					type: 'steps',
					title: 'Process',
					items: [
						'Scan the asymmetrical head',
						'Provide key measurements',
						'Provide key patient history',
						'Fit symmetrical designed kinderBAND™',
						'Modify kinderBAND™ every 2–3 weeks during treatment'
					]
				},
				{
					type: 'note',
					text: '*Ideal symmetry is achieved between ages 3–9 months.'
				}
			]
		},
		{
			id: 'history',
			label: 'History',
			icon: '📄',
			title: 'History',
			blocks: [
				{
					type: 'paragraph',
					text: 'The kinderBAND™ system was developed through years of clinical experience in pediatric cranial remolding. It combines orthotic expertise with modern digital scanning and manufacturing processes.'
				},
				{
					type: 'paragraph',
					text: 'Over time, treatment methods have evolved to become more precise, more comfortable and more parent-friendly while maintaining excellent clinical outcomes.'
				}
			]
		},
		{
			id: 'designs',
			label: 'kinderBAND™ Designs & Colors',
			icon: '◔',
			title: 'kinderBAND™ Designs & Colors',
			blocks: [
				{
					type: 'paragraph',
					text: 'Families can choose from a variety of kid-friendly colors and design options to personalize the orthosis while maintaining the same clinical function and fit.'
				},
				{
					type: 'gallery',
					items: designOptions
				}
			]
		}
	]
};