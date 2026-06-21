import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';

export const resourcesPageData: InfoPageData = {
	pageTitle: 'Resources | kinderBAND™',

	heroBg: '/images/kinderband-bg.jpg',
	topFrameBg: '/images/header-bg.jpg',
	bottomFrameBg: '/images/header-bg.jpg',
	footerTopBg: '/images/footer-top-bg.jpg',

	backgroundSize: '100%',
	backgroundPosition: 'center top',

	tabs: [
		{
			id: 'overview',
			label: 'Resources',
			icon: 'ⓘ',
			title: 'Resources',
			blocks: [
				{
					type: 'paragraph',
					text: 'KinderBAND™ resources for parents and caregivers.'
				}
			]
		},

		{
			id: 'torticollis',
			label: 'Torticollis',
			icon: '📄',
			title: 'Resources for Parents of Children with Torticollis',
			blocks: [
				{
					type: 'paragraph',
					text: 'Helpful resources for parents of children with torticollis.'
				},
				{
					type: 'link',
					label: 'Torticollis Kids',
					href: '#'
				},
				{
					type: 'link',
					label: 'National Infant Torticollis Association',
					href: '#'
				}
			]
		},

		{
			id: 'plagiocephaly',
			label: 'Plagiocephaly',
			icon: '📄',
			title: 'Resource for Parents of Children with Plagiocephaly',
			blocks: [
				{
					type: 'paragraph',
					text: 'Helpful resources for parents of children with plagiocephaly.'
				},
				{
					type: 'link',
					label: 'Plagiocephaly.org',
					href: '#'
				},
				{
					type: 'link',
					label: 'Plagiocephaly.info',
					href: '#'
				}
			]
		},

		{
			id: 'safe-to-sleep',
			label: 'Safe to Sleep',
			icon: '📄',
			title: 'Safe to Sleep Campaign',
			blocks: [
				{
					type: 'paragraph',
					text: 'Safe sleep information and guidance for infants.'
				},
				{
					type: 'link',
					label: 'Read More',
					href: '#'
				}
			]
		},

		{
			id: 'tummy-time',
			label: 'Tummy Time',
			icon: '📄',
			title: 'Tummy Time',
			blocks: [
				{
					type: 'paragraph',
					text: 'Tummy time resources for parents and caregivers.'
				},
				{
					type: 'link',
					label: 'Read More',
					href: '#'
				}
			]
		}
	],

	cta: {
		text: 'Interested in KinderBAND™?',
		buttonLabel: 'Contact Us Today for More Information',
		buttonHref: '/contact'
	}
};