import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';

export const clinicalStudiesPageData: InfoPageData = {
	pageTitle: 'Clinical Studies | kinderBAND™',

	heroBg: '/images/kinderband-bg.jpg',
	topFrameBg: '/images/header-bg.jpg',
	bottomFrameBg: '/images/header-bg.jpg',
	footerTopBg: '/images/footer-top-bg.jpg',

	backgroundSize: '100%',
	backgroundPosition: 'center top',

	tabs: [
		{
			id: 'overview',
			label: 'Clinical Studies',
			icon: 'ⓘ',
			title: 'KinderBAND™ Clinical Studies',
			blocks: [
				{
					type: 'paragraph',
					text: 'The following clinical studies and published research provide information related to positional skull deformities, plagiocephaly, brachycephaly, and cranial remolding treatment.'
				}
			]
		},

		{
			id: 'aap-report',
			label: 'AAP Clinical Report',
			icon: '📄',
			title: 'Prevention and Management of Positional Skull Deformities in Infants',
			blocks: [
				{
					type: 'paragraph',
					text: 'The American Academy of Pediatrics published a clinical report entitled “Prevention and Management of Positional Skull Deformities in Infants” in their July 2003 issue of Pediatrics, the peer-reviewed scientific journal of the American Academy of Pediatrics (AAP).'
				},
				{
					type: 'link',
					label: 'Read the clinical report.',
					href: 'https://publications.aap.org/pediatrics/article-abstract/112/1/199/63410/Prevention-and-Management-of-Positional-Skull?redirectedFrom=fulltext'
				}
			]
		},

		{
			id: 'static-orthotic-cranioplasty',
			label: 'Static Orthotic Cranioplasty',
			icon: '📄',
			title: 'Static Orthotic Cranioplasty as a Nonsurgical Alternative for the Treatment of Deformational Plagiocephaly',
			blocks: [
				{
					type: 'paragraph',
					text: 'Static Orthotic Cranioplasty as a Nonsurgical Alternative for the Treatment of Deformational Plagiocephaly Terpenning, JF. Static Orthotic Cranioplasty as a Nonsurgical Alternative for the Treatment of Deformational Plagiocephaly. J. Prosthetics Orthotics. 2001; 13:45-49.'
				},
				{
					type: 'link',
					label: 'Read the clinical report.',
					href: 'https://journals.lww.com/jpojournal/abstract/2001/06000/static_orthotic_cranioplasty_as_a_nonsurgical.13.aspx'
				}
			]
		},

		{
			id: 'helmet-versus-repositioning',
			label: 'Helmet Therapy',
			icon: '📄',
			title: 'Helmet Versus Active Repositioning for Plagiocephaly: A Three-Dimensional Analysis',
			blocks: [
				{
					type: 'paragraph',
					text: 'A three-dimensional analysis comparing helmet therapy and active repositioning for plagiocephaly.'
				},
				{
					type: 'link',
					label: 'Read the clinical report.',
					href: 'https://publications.aap.org/pediatrics/article-abstract/126/4/e936/65686/Helmet-Versus-Active-Repositioning-for?redirectedFrom=fulltext'
				}
			]
		},

		{
			id: 'plagiocephaly-brachycephaly',
			label: 'Plagiocephaly & Brachycephaly',
			icon: '📄',
			title: 'Plagiocephaly and Brachycephaly in the First Two Years of Life: A Prospective Cohort Study',
			blocks: [
				{
					type: 'paragraph',
					text: 'A prospective cohort study focused on plagiocephaly and brachycephaly during the first two years of life.'
				},
				{
					type: 'link',
					label: 'Read the clinical report.',
					href: 'https://publications.aap.org/pediatrics/article-abstract/114/4/970/73271/Plagiocephaly-and-Brachycephaly-in-the-First-Two?redirectedFrom=fulltext'
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