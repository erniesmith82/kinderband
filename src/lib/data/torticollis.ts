import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';

export const torticollisPageData: InfoPageData = {
	pageTitle: 'Torticollis | kinderBAND™',
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
			id: 'torticollis',
			label: 'Torticollis',
			icon: 'ⓘ',
			title: 'Torticollis',
			image: '/images/torticollis00.jpg',
			imageAlt: 'Infant with torticollis illustration',
			blocks: [
				{
					type: 'paragraph',
					text: 'Torticollis is a condition where an infant has an imbalance with their cervical muscles which leads to a head tilt to one side, referred to as wry neck.'
				},
				{
					type: 'paragraph',
					text: 'Torticollis literally means “twisted neck.” It is a shortening of the sternocleidomastoid muscle, which runs up the side and back of the neck.'
				},
				{
					type: 'paragraph',
					text: 'In newborns, torticollis can occur due to positioning in the womb or as a result of a difficult childbirth. This is commonly referred to as congenital muscular torticollis (CMT).'
				},
				{
					type: 'paragraph',
					text: 'Congenital Muscular Torticollis is associated with deformational plagiocephaly, brachycephaly, and scaphocephaly, and the Kinderband page notes it is present in 70–95% of deformational plagiocephaly cases. :contentReference[oaicite:1]{index=1}'
				}
			]
		},
		{
			id: 'symptoms',
			label: 'Symptoms',
			icon: '◔',
			title: 'Torticollis Symptoms',
			image: '/images/torticollis00.jpg',
			imageAlt: 'Infant with head tilt',
			blocks: [
				{
					type: 'paragraph',
					text: 'Infants with torticollis will generally tilt their head to one side. Physically, this presents with the chin pointed to one shoulder and the head pointing toward the opposite shoulder. :contentReference[oaicite:2]{index=2}'
				},
				{
					type: 'paragraph',
					text: 'For example, if the right side of the neck muscles are affected, the head will tilt to the right and the chin will tilt to the left. :contentReference[oaicite:3]{index=3}'
				},
				{
					type: 'list',
					title: 'Common signs may include:',
					items: [
						'Head tilt to one side',
						'Chin rotated toward the opposite shoulder',
						'Difficulty turning the head one direction',
						'Fussiness when trying to turn the head',
						'Preference for breastfeeding on one side only',
						'A small lump in the neck in some cases',
						'Development of a flat spot on the head from favoring one side'
					]
				},
				{
					type: 'paragraph',
					text: 'While torticollis can be frustrating for babies and caregivers, most babies do not feel pain from it. Positioning and stretching exercises can help, and more severe cases may need therapy. :contentReference[oaicite:4]{index=4}'
				}
			]
		},
		{
			id: 'causes',
			label: 'Causes',
			icon: '⚕',
			title: 'Torticollis Causes',
			image: '/images/torticollis00.jpg',
			imageAlt: 'Infant neck muscle illustration',
			blocks: [
				{
					type: 'paragraph',
					text: 'There are two types of torticollis most commonly associated with infants: congenital muscular torticollis and idiopathic torticollis. Congenital occurs at birth and is the most common form. :contentReference[oaicite:5]{index=5}'
				},
				{
					type: 'paragraph',
					text: 'The exact reason infants develop Congenital Muscular Torticollis is not fully known, but it is largely viewed as a result of intrauterine constraint and/or fetal position. Multiples such as twins may have less intrauterine space and may be cramped or positioned abnormally. :contentReference[oaicite:6]{index=6}'
				},
				{
					type: 'paragraph',
					text: 'The sternocleidomastoid (SCM) muscle, which runs along the side of the neck, becomes shortened and contracted. This can happen from a difficult birth causing damage to the SCM muscle, incomplete development of the SCM muscle, or simply the baby’s position in utero. :contentReference[oaicite:7]{index=7}'
				},
				{
					type: 'paragraph',
					text: 'Idiopathic torticollis refers to torticollis that arises spontaneously and for which the cause is unknown. :contentReference[oaicite:8]{index=8}'
				}
			]
		},
		{
			id: 'treatment',
			label: 'Treatment',
			icon: '⌕',
			title: 'Torticollis Treatment',
			image: '/images/torticollis00.jpg',
			imageAlt: 'Infant receiving therapy',
			blocks: [
				{
					type: 'paragraph',
					text: 'For complete details of treatment, please visit our Treatment section. :contentReference[oaicite:9]{index=9}'
				},
				{
					type: 'paragraph',
					text: 'Positioning, stretching exercises, and therapy are commonly used depending on severity and whether associated head-shape asymmetry is present. This is an inference based on the site’s symptom and treatment descriptions. :contentReference[oaicite:10]{index=10}'
				}
			]
		}
	]
};