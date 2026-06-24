import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';

export const plagiocephalyPageData: InfoPageData = {
	pageTitle: 'Plagiocephaly | kinderBAND™',
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
			id: 'plagiocephaly',
			label: 'Plagiocephaly',
			icon: 'ⓘ',
			title: 'Plagiocephaly',
			image: '/images/plagiocephaly00.png',
			imageAlt: 'Infant with plagiocephaly illustration',
			blocks: [
				{
					type: 'paragraph',
					text: 'Plagiocephaly is a condition where an infant’s head is asymmetrical, having an uneven or irregular shape. Clinically, it is often referred to as deformational or positional plagiocephaly.'
				},
				{
					type: 'paragraph',
					text: 'This flattening can occur prior to birth, during birth, or after birth. In many infants, the asymmetry develops gradually because of repeated pressure on the same area of the skull while the skull is still soft and moldable.'
				},
				{
					type: 'paragraph',
					text: 'Fortunately, plagiocephaly is generally easy to recognize and, in many cases, highly treatable with conservative care or cranial remolding treatment depending on severity.'
				}
			]
		},
		{
			id: 'symptoms',
			label: 'Symptoms',
			icon: '◔',
			title: 'Plagiocephaly Symptoms',
			image: '/images/plagiocephaly00.png',
			imageAlt: 'Infant head-shape comparison',
			blocks: [
				{
					type: 'paragraph',
					text: 'For many parents, positional plagiocephaly is fairly easy to spot. The back of the head is usually flat, and that flattening may occur on one or both sides, creating an asymmetrical appearance.'
				},
				{
					type: 'paragraph',
					text: 'Another feature in more severe cases can be the appearance of a bulbous or prominent forehead. When torticollis is also present, asymmetry may also be seen in the face, neck, and jaw.'
				},
				{
					type: 'list',
					title: 'Common signs may include:',
					items: [
						'Flattening on one side or across the back of the head',
						'An uneven or asymmetrical head shape',
						'Forehead prominence or bossing',
						'Possible facial asymmetry',
						'Head tilt or neck tightness when torticollis is also present'
					]
				},
				{
					type: 'paragraph',
					text: 'A doctor can often diagnose positional plagiocephaly by examining the infant’s head. In some cases, an evaluation scan may be requested to measure the severity.'
				}
			]
		},
		{
			id: 'causes',
			label: 'Causes',
			icon: '⚕',
			title: 'Plagiocephaly Causes',
			image: '/images/plagiocephaly00.png',
			imageAlt: 'Infant resting on back',
			blocks: [
				{
					type: 'paragraph',
					text: 'Positional plagiocephaly is commonly related to an infant spending extended time on their back in the same position. Because an infant’s skull is soft and moldable, continuous pressure on one area can lead to flattening over time.'
				},
				{
					type: 'paragraph',
					text: 'The widespread recommendation for infants to sleep on their backs greatly reduced the risk of SIDS, but it also contributed to an increase in positional head-shape deformities.'
				},
				{
					type: 'paragraph',
					text: 'Modern baby carriers and car seats can also contribute when infants spend long periods resting in one position. Premature babies and infants from multiple births may also be at higher risk.'
				},
				{
					type: 'list',
					title: 'Common risk factors include:',
					items: [
						'Frequent back-sleeping in the same position',
						'Limited tummy time',
						'Extended time in car seats, swings, or carriers',
						'Prematurity',
						'Multiple births',
						'Congenital muscular torticollis'
					]
				},
				{
					type: 'paragraph',
					text: 'Torticollis is very commonly associated with plagiocephaly. Infants with tight neck muscles may keep their head in one position, which increases the chance of flattening.'
				}
			]
		},
		{
			id: 'treatment',
			label: 'Treatment',
			icon: '⌕',
			title: 'Plagiocephaly Treatment',
			image: '/images/plagiocephaly00.png',
			imageAlt: 'Infant receiving cranial remolding treatment',
			blocks: [
				{
					type: 'paragraph',
					text: 'Treatment depends on the severity of the plagiocephaly. Mild cases may be treated with repositioning strategies and tummy time exercises, while moderate to severe cases are often treated with cranial remolding orthoses together with tummy time.'
				},
				{
					type: 'paragraph',
					text: 'In some situations, physical therapy is also needed, especially when torticollis is present and the infant has difficulty turning or lifting the head evenly.'
				},
				{
					type: 'steps',
					title: 'Typical treatment approach',
					items: [
						'Mild cases: repositioning and tummy time',
						'Moderate to severe cases: cranial remolding orthosis (helmet therapy)',
						'Physical therapy when neck tightness or torticollis is involved'
					]
				},
				{
					type: 'note',
					text: 'Non-synostotic positional plagiocephaly does not require surgery. Surgical intervention is generally only needed when craniosynostosis, a premature fusion of a suture, is present.'
				},
				{
					type: 'paragraph',
					text: 'For complete details of cranial remolding helmet treatment, parents can continue into the Treatment section of the site.'
				}
			]
		}
	]
};