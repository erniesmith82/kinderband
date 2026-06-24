import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';

export const scaphocephalyPageData: InfoPageData = {
	pageTitle: 'Scaphocephaly | kinderBAND™',
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
			id: 'scaphocephaly',
			label: 'Scaphocephaly',
			icon: 'ⓘ',
			title: 'Scaphocephaly',
			image: '/images/scaphocephaly01.jpg',
			imageAlt: 'Infant with scaphocephaly illustration',
			blocks: [
				{
					type: 'paragraph',
					text: 'Scaphocephaly, also known as dolichocephaly, is a condition where the skull is disproportionately narrow and appears rather elongated.'
				},
				{
					type: 'paragraph',
					text: 'It is characterized by flattening along the sides of the skull. In addition to irregular pressures on the skull in utero, it can also arise from premature closure or fusion of the cranial bones, also known as the sutures.'
				}
			]
		},
		{
			id: 'symptoms',
			label: 'Symptoms',
			icon: '◔',
			title: 'Scaphocephaly Symptoms',
			image: '/images/scaphocephaly01.jpg',
			imageAlt: 'Scaphocephaly head shape comparison',
			blocks: [
				{
					type: 'paragraph',
					text: 'Scaphocephaly is typically a head shape that is elongated and quite narrow. From the side and top view, the head will appear longer and thinner.'
				},
				{
					type: 'paragraph',
					text: 'From the front view, the forehead may appear bulbous while the rear aspect of the head is more narrow. If you run your hand along the top of the head, a ridge may sometimes be felt.'
				},
				{
					type: 'paragraph',
					text: 'This ridge may be due to premature fusion of the sagittal suture, the suture that runs along the top of the skull. In more severe cases, facial asymmetry may also be present.'
				}
			]
		},
		{
			id: 'causes',
			label: 'Causes',
			icon: '⚕',
			title: 'Scaphocephaly Causes',
			image: '/images/scaphocephaly01.jpg',
			imageAlt: 'Infant in NICU positioning support',
			blocks: [
				{
					type: 'paragraph',
					text: 'Scaphocephaly, also called dolichocephaly, is a congenital birth defect characterized by an asymmetrical distortion or shape of the head. It occurs frequently in premature infants.'
				},
				{
					type: 'list',
					title: 'Cases that begin in utero may be related to:',
					items: [
						'The position of the baby’s head during pregnancy',
						'Multiple births where there is less space for each baby to grow',
						'A small or misshapen uterus',
						'Complications during delivery'
					]
				},
				{
					type: 'paragraph',
					text: 'When scaphocephaly is caused by external forces, it is usually due to pressure on the sides of the skull in the first months after birth. It is commonly seen in infants who spend extended time in the NICU, where side-lying positioning may be used for medical access and monitoring.'
				},
				{
					type: 'paragraph',
					text: 'When the main cause is internal, it is called sagittal synostosis. This results from premature fusion of the sagittal suture, which limits the normal side-to-side growth of the skull and causes the head to grow longer from front to back while remaining narrow.'
				},
				{
					type: 'note',
					text: 'The live Kinderband page notes that sagittal synostosis is the most common form of craniosynostosis, with reported rates ranging from 1 in 2,000 to 1 in 5,000 births.'
				}
			]
		},
		{
			id: 'treatment',
			label: 'Treatment',
			icon: '⌕',
			title: 'Scaphocephaly Treatment',
			image: '/images/scaphocephaly01.jpg',
			imageAlt: 'Infant receiving head-shape treatment',
			blocks: [
				{
					type: 'paragraph',
					text: 'For complete details of treatment, please visit our Treatment section.'
				},
				{
					type: 'paragraph',
					text: 'Because scaphocephaly can sometimes be related to sagittal synostosis, a proper clinical evaluation is important before treatment begins.'
				}
			]
		}
	]
};