import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';

export const brachycephalyPageData: InfoPageData = {
	pageTitle: 'Brachycephaly | kinderBAND™',
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
			id: 'brachycephaly',
			label: 'Brachycephaly',
			icon: 'ⓘ',
			title: 'Brachycephaly',
			image: '/images/brachycephaly01.jpg',
			imageAlt: 'Infant with brachycephaly illustration',
			blocks: [
				{
					type: 'paragraph',
					text: 'Brachycephaly is a condition where an infant’s head is disproportionately wide. Unlike plagiocephaly, which refers to an oblique shape, brachycephaly refers to a symmetrical flattening of the back of the head.'
				},
				{
					type: 'paragraph',
					text: 'Brachycephaly may also present with facial asymmetry such as frontal bossing in the temporal area. In more severe cases, this may also affect the alignment of the jaw.'
				},
				{
					type: 'list',
					title: 'Types of brachycephaly',
					items: [
						'Symmetrical brachycephaly',
						'Asymmetrical brachycephaly'
					]
				},
				{
					type: 'paragraph',
					text: 'Asymmetrical brachycephaly is the most common of the four types of cranial deformations: plagiocephaly, brachycephaly, scaphocephaly, and asymmetrical brachycephaly. It is actually a combination of plagiocephaly with brachycephaly.'
				}
			]
		},
		{
			id: 'symptoms',
			label: 'Symptoms',
			icon: '◔',
			title: 'Brachycephaly Symptoms',
			image: '/images/brachycephaly-symptoms.jpg',
			imageAlt: 'Brachycephaly head shape comparison',
			blocks: [
				{
					type: 'paragraph',
					text: 'Brachycephaly can be symmetrical or asymmetrical. Signs and symptoms may include the following:'
				},
				{
					type: 'list',
					items: [
						'Disproportionately wide head',
						'Flattening across the back of the head',
						'The height of the head is longer than normal',
						'The width of the head is shorter than normal',
						'Face appears smaller in proportion to the head',
						'Forehead can be bulbous'
					]
				}
			]
		},
		{
			id: 'causes',
			label: 'Causes',
			icon: '⚕',
			title: 'Brachycephaly Causes',
			image: '/images/brachycephaly-causes.jpg',
			imageAlt: 'Infant resting on back',
			blocks: [
				{
					type: 'paragraph',
					text: 'Positional brachycephaly is due to the baby spending most of their time on their back in the same position. Due to the soft moldable nature of an infant’s skull, resting the head on a flat surface for extended periods without sufficient tummy time can lead to flattening.'
				},
				{
					type: 'paragraph',
					text: 'As an infant with a flat spot is continuously put in the same position, the flat spot increases. In some cases, this may lead to facial asymmetry such as frontal bossing.'
				},
				{
					type: 'paragraph',
					text: 'In addition to back sleeping, many infants spend long periods in baby car seat carriers, swings, and other devices that keep the head in one position. This constant pressure can contribute to brachycephaly and reduce neck muscle use.'
				},
				{
					type: 'paragraph',
					text: 'Premature babies are often more prone because their skulls are softer than those of full-term infants. Infants from multiple births may also have a higher incidence because of shared risk factors such as low birth weight, intrauterine constraint, intrauterine position, premature birth, and congenital muscular torticollis.'
				},
				{
					type: 'note',
					text: 'The Kinderband page notes that while back sleeping reduced SIDS risk substantially, positional head-shape deformities increased significantly afterward. :contentReference[oaicite:1]{index=1}'
				},
				{
					type: 'paragraph',
					text: 'Fortunately, brachycephaly is quite easy to treat with helmet therapy, also known as cranial remolding helmet treatment.'
				}
			]
		},
		{
			id: 'treatment',
			label: 'Treatment',
			icon: '⌕',
			title: 'Brachycephaly Treatment',
			image: '/images/brachycephaly-treatment.jpg',
			imageAlt: 'Infant receiving brachycephaly treatment',
			blocks: [
				{
					type: 'paragraph',
					text: 'The severity of the brachycephaly determines the type of treatment. Moderate to severe forms are usually treated with a combination of cranial remolding orthoses (CRO) and tummy time. In certain cases, physical therapy is also needed.'
				},
				{
					type: 'paragraph',
					text: 'Non-synostotic brachycephaly does not require surgery. Surgical intervention is only required when a child has craniosynostosis, a premature fusion of a suture.'
				},
				{
					type: 'paragraph',
					text: 'Since brachycephaly can result from premature fusion of the coronal sutures, it is important that a specialist determines the exact nature of the deformity before treatment begins.'
				},
				{
					type: 'paragraph',
					text: 'For complete details of cranial remolding helmet treatment, please visit the Treatment section.'
				}
			]
		}
	]
};