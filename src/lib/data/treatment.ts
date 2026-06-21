import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';

export const treatmentPageData: InfoPageData = {
	pageTitle: 'Treatment | kinderBAND™',
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
			id: 'treatment',
			label: 'Treatment',
			icon: 'ⓘ',
			title: 'Treatment',
			image: '/images/treatment01.jpg',
			imageAlt: 'Parent holding baby during kinderBAND treatment',
			blocks: [
				{
					type: 'paragraph',
					text: 'Once your pediatrician, craniofacial surgeon, pediatric plastic surgeon or pediatric neurosurgeon refers you to a certified kinderBAND™ clinic, your baby will receive a complete analysis of their condition. It is our goal to provide the best product possible to insure your baby’s head corrects properly.'
				},
				{
					type: 'paragraph',
					text: 'During the course of treatment your baby will receive: patient history evaluation, physical evaluation, scanning/measuring/photographing of the head, fitting and follow up kinderBAND™ modification.'
				},
				{
					type: 'paragraph',
					text: 'Please click on the left hand menu to get a step by step look at the kinderBAND™ treatment process. We cover: Before Your Visit, Evaluation & Scan, Fitting, Follow up, Care & Usage, Tummy Time and Insurance.'
				}
			]
		},
		{
			id: 'follow-up',
			label: 'Follow Up',
			icon: '◔',
			title: 'Treatment Follow Up',
			blocks: [
				{
					type: 'paragraph',
					text: 'After your initial fitting, you will return for a follow-up appointment in 2 weeks. The cranial specialist will ask you if you have seen a change in the shape of your baby’s head. They will also inquire about the amount of time your baby spends per day wearing the kinderBAND™. In order to achieve proper correction, it is critical that your baby wears the kinderBAND™ at least 20–23 hours each day. If you are having an issue achieving this, the cranial specialist will work through any difficulties you are having.'
				},
				{
					type: 'paragraph',
					text: 'While wearing the kinderBAND™ requires some getting used to, we find that most babies become comfortable with it within the first four days. Caregivers love the additional safety it provides their baby while they are playing.'
				},
				{
					type: 'paragraph',
					text: 'The cranial specialist will modify the inside of your kinderBAND™ accordingly, as your baby’s head has grown in the past 2 weeks. Some cranial specialists will choose to drill a few holes in the front and back of the kinderBAND™ during this appointment. This serves as a guide for fitting as well as adding airflow.'
				},
				{
					type: 'paragraph',
					text: 'You will continue to have follow up appointments every 2–3 weeks until correction is achieved.'
				}
			]
		},
		{
			id: 'before-visit',
			label: 'Before Your Visit',
			icon: '⚕',
			title: 'Before Your Visit',
			blocks: [
				{
					type: 'paragraph',
					text: 'We want your appointment to be a very positive experience for you and your baby. Therefore, we kindly ask that the caregiver follow these recommendations for their first Evaluation & Scan visit and subsequent visits:'
				},
				{
					type: 'list',
					ordered: true,
					items: [
						'Make sure your infant is adequately rested.',
						'Make sure your infant has a fresh diaper.',
						'Make sure your infant does not have braids or clips in the hair.',
						'Make sure to bring your infant’s weight, length and number of weeks at birth. This is very important to achieve the proper analysis of your infant’s condition for effective treatment.',
						'Call your local kinderBAND™ clinic to determine if preauthorization is needed with your insurance.'
					]
				},
				{
					type: 'paragraph',
					text: 'As caregivers, your role in the kinderBAND™ treatment program is essential to achieving the best outcome for your baby. Your cranial specialist will guide you through the treatment program, giving you a sense of what to expect and also providing you with a written Caregiver Guide to the kinderBAND™.'
				}
			]
		},
		{
			id: 'evaluation',
			label: 'Evaluation',
			icon: '⌕',
			title: 'Treatment Evaluation',
			image: '/images/evaluation02.jpg',
			imageAlt: 'Treatment evaluation visit',
			blocks: [
				{
					type: 'paragraph',
					text: 'You will meet your cranial specialist and together will complete the Patient Information Sheet. This information is essential to the design of the kinderBAND™, as this provides key indicators on how your baby’s head will develop. We design the kinderBAND™ utilizing the published government CDC growth charts.'
				},
				{
					type: 'paragraph',
					text: 'The cranial specialist will review your prescription and diagnosis with you. Next, they will take key anthropomorphic measurements of your baby’s head. The measurements will be taken using kinderKALIPERS™, calipers that were exclusively designed by the kinderBAND™ team to obtain the most accurate measurements possible. These measurements are integral to achieving optimal symmetry for your baby’s head.'
				},
				{
					type: 'paragraph',
					text: 'Then they will explain the scanning process using the BioScanner™. We understand that sometimes caregivers may be nervous about scanning. Scanning is quick, simple and most importantly non-traumatic for the infant. Acquiring the cranial shape data with the BioScanner™ is 510k cleared by the FDA.'
				}
			]
		},
		{
			id: 'scanning',
			label: 'Scanning',
			icon: '▤',
			title: 'Treatment Scanning',
			images: [
				{
					src: '/images/scanning01.jpg',
					alt: 'Scanning image 1'
				},
				{
					src: '/images/scanning03.jpg',
					alt: 'Scanning image 2'
				},
				{
					src: '/images/scanning02.jpg',
					alt: 'Scanning image 3'
				}
			],
			blocks: [
				{
					type: 'paragraph',
					text: 'For scanning, you will be asked to remove any shirt or onesie with a collar that your baby is wearing. Your baby will be placed on your lap facing you. We want to ensure that your baby is in the most soothing environment possible which means you will be holding them, and they will see your face the entire time. Some caregivers choose to hold a small toy on their lap and/or use a pacifier.'
				},
				{
					type: 'paragraph',
					text: 'The cranial specialist will then quickly don a knitted cap on your baby’s head and begin scanning using the BioScanner™. The scanning process takes seconds. After scanning, the cranial specialist will confirm your choice of Transfer Pattern. Transfer Patterns are an array of patterns we use to color the kinderBAND™, providing an attractive look to your baby’s helmet.'
				},
				{
					type: 'paragraph',
					text: 'Once the scan is complete, photos will be taken from various angles. Both the photos and measurements are critical for documenting the pre-treatment baseline for the referring physician, cranial specialist, caregiver and insurance company.'
				}
			]
		},
		{
			id: 'fitting',
			label: 'Fitting',
			icon: '◓',
			title: 'Treatment Fitting',
			images: [
				{
					src: '/images/fitting01.jpg',
					alt: 'Fitting image 1'
				},
				{
					src: '/images/fitting02.jpg',
					alt: 'Fitting image 2'
				},
				{
					src: '/images/fitting03.jpg',
					alt: 'Fitting image 3'
				},
				{
					src: '/images/fitting04.jpg',
					alt: 'Fitting image 4'
				}
			],
			blocks: [
				{
					type: 'paragraph',
					text: 'On your second visit, your baby will receive their custom kinderBAND™. Like the scanning process, you will hold your baby on your lap. Your baby will face outward so the cranial specialist can easily slip the kinderBAND™ on to your baby’s head.'
				},
				{
					type: 'paragraph',
					text: 'The cranial specialist will then turn your baby towards you to show you the proper fit of the kinderBAND™. As you will be removing and applying the kinderBAND™, it is important that you understand how to align it properly. The cranial specialist will assist by providing markings on the interior foam which will serve as guides for proper fitting.'
				},
				{
					type: 'paragraph',
					text: 'If any modifications need to be made to relieve the interior foam of the kinderBAND™, the cranial specialist will make them at this time.'
				},
				{
					type: 'paragraph',
					text: 'Then, the cranial specialist will review the Usage & Care instructions of the kinderBAND™ with you. As well, they will explain Tummy Time and give you a guide to helping your baby improve their neck and trunk muscles. Finally, you will be asked to send a photo or text on Day 4 to confirm all is going well with your baby wearing the kinderBAND™.'
				}
			]
		},
		{
			id: 'tummy-time',
			label: 'Tummy Time',
			icon: '☼',
			title: 'Tummy Time',
			image: '/images/treatment-tummy-time.png',
			imageAlt: 'Baby during tummy time',
			blocks: [
				{
					type: 'paragraph',
					text: 'Tummy time is an important activity for all infants to help them develop strong muscles. Since infants are now put on their backs to sleep, playtime is recommended on their tummies. Tummy time helps develop the muscles that are needed for lifting their heads, turning over, sitting up and crawling. All of these can be delayed without proper exercise which is essentially what tummy time is.'
				},
				{
					type: 'buttons',
					title: 'Learn More:',
					items: [
						{
							label: 'Tummy Time Tips',
							href: '/files/tummy-time-tips.pdf',
							variant: 'outline',
							target: '_blank'
						},
						{
							label: 'Online Tummy Time Guide',
							href: 'https://pathways.org/topics-of-development/tummy-time/',
							variant: 'filled',
							target: '_blank'
						}
					]
				}
			]
		},
		{
			id: 'usage-care',
			label: 'Usage / Care',
			icon: '◯',
			title: 'Usage / Care',
			blocks: [
				{
					type: 'paragraph',
					text: 'After your baby is fit with the kinderBAND™, you will be given instructions on how to start using the cranial remolding helmet.'
				},
				{
					type: 'paragraph',
					text: 'The first week is critical. We recommend adhering to the below usage schedule to allow your baby to become accustomed to the kinderBAND™. Ultimately, your baby will be wearing the kinderBAND™ most of the time so it is important that he or she becomes used to it. The recommended schedule for the first four days is:'
				},
				{
					type: 'table',
					title: 'Usage Time for the First Week',
					headers: ['Helmet is:', 'On', 'Off', 'On for Nap', 'On for the Night'],
					rows: [
						['Day 1', '1 hour', '1 hour', 'no', 'no'],
						['Day 2', '2 hours', '1 hour', 'no', 'no'],
						['Day 3', '4 hours', '1 hour', 'yes', 'no'],
						['Day 4', '8 hours', '1 hour', 'yes', 'yes'],
						['Day 5 & beyond', '23 hours', '1 hour', 'yes', 'yes']
					]
				},
				{
					type: 'paragraph',
					text: 'Repeat the on/off cycle throughout the day. You may give slight breaks in wearing the kinderBAND™ for hot weather or when your baby is eating messy foods. Foods may discolor the foam.'
				},
				{
					type: 'paragraph',
					text: 'The fifth day is considered full time wear. The kinderBAND™ should not be worn for baths or in the pool.'
				},
				{
					type: 'paragraph',
					text: 'Note: If your baby has red marks on their head, contact your cranial specialist for skincare recommendations. Red marks may also indicate your kinderBAND™ is due for minor adjustment.'
				},
				{
					type: 'paragraph',
					text: 'CARE/CLEANING'
				},
				{
					type: 'paragraph',
					text: 'Once a day, wipe the inside and outside of the kinderBAND™ thoroughly with reagent grade isopropyl alcohol (wintergreen scent is preferable due to its non chemical odor) to destroy bacteria and remove residues that may cause irritations. Use only reagent grade isopropyl alcohol. Allow the kinderBAND™ to dry well. When it is completely dry, put the kinderBAND™ back on your baby for the remainder of the wearing time that day.'
				},
				{
					type: 'paragraph',
					text: 'Do not use talcum powder on the inside of the kinderBAND™, as this will dry in the liner and may become abrasive to the skin.'
				},
				{
					type: 'paragraph',
					text: 'Continuous wearing time throughout the treatment is important to achieve optimal results. If you are having an issue with your baby wearing the kinderBAND™, contact your cranial specialist immediately.'
				}
			]
		},
		{
			id: 'insurance',
			label: 'Insurance',
			icon: '▤',
			title: 'Treatment Insurance',
			blocks: [
				{
					type: 'paragraph',
					text: 'We understand that it can be overwhelming to learn your baby needs a cranial remolding helmet. The concern then becomes how to pay for it.'
				},
				{
					type: 'paragraph',
					text: 'We are pleased to advise that insurance will pay for the kinderBAND™, if their authorization requirements are met.'
				},
				{
					type: 'paragraph',
					text: 'When your infant is first diagnosed with a cranial deformity such as plagiocephaly, brachycephaly, scaphocephaly or asymmetrical brachycephaly, they will be sent to a certified kinderBAND™ clinic for further evaluation. Your baby will be scanned and anthropomorphic measurements will be taken to determine the severity of their asymmetry. If the asymmetry is moderate to severe, it is usually covered by insurance. In many states, Medicaid will also cover the kinderBAND™ for this diagnosis.'
				},
				{
					type: 'paragraph',
					text: 'Each certified kinderBAND™ clinic has an Insurance Specialist on staff. Their job is to thoroughly research every case and provide clients with expert assistance regarding their insurance plan. Their goal is to ensure clients are able to take advantage of the maximum benefit for their kinderBAND™ needs.'
				},
				{
					type: 'paragraph',
					text: 'The cost of treatment varies with each certified kinderBAND™ clinic, as we are not a franchise. All adjustment appointments during treatment are included with the price of the kinderBAND™. For specific information, please contact the certified kinderBAND™ clinic in your area.'
				}
			]
		}
	]
};