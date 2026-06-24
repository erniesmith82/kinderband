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
					label: 'APTA Pediatric Torticollis Resources',
					href: 'https://pediatricapta.org/clinical-practice-guidelines/Congenital-Muscular-Torticollis.cfm'
				},
				{
					type: 'link',
					label: 'ChoosePT: Physical Therapy Guide to Torticollis',
					href: 'https://www.choosept.com/guide/physical-therapy-guide-torticollis'
				}
			]
		},

		{
			id: 'plagiocephaly',
			label: 'Plagiocephaly',
			icon: '📄',
			title: 'Resources for Parents of Children with Plagiocephaly',
			blocks: [
				{
					type: 'paragraph',
					text: 'Helpful resources for parents of children with plagiocephaly.'
				},
				{
					type: 'link',
					label: 'Johns Hopkins: Helmet Therapy for Your Baby',
					href: 'https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/helmet-therapy-for-your-baby'
				},
				{
					type: 'link',
					label: 'Hanger Clinic: Cranial Helmet Questions',
					href: 'https://hangerclinic.com/blog/for-patients/10-common-questions-before-starting-the-cranial-helmet-journey/'
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
					label: 'Safe to Sleep® Campaign',
					href: 'https://safetosleep.nichd.nih.gov/'
				},
				{
					type: 'link',
					label: 'American Academy of Pediatrics Safe Sleep Toolkit',
					href: 'https://www.aap.org/en/news-room/campaigns-and-toolkits/safe-sleep/'
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
					label: 'Nationwide Children’s: Tummy Time',
					href: 'https://www.nationwidechildrens.org/family-resources-education/health-wellness-and-safety-resources/helping-hands/tummy-time'
				},
				{
					type: 'link',
					label: 'Nemours KidsHealth: Tummy Time',
					href: 'https://kidshealth.org/en/parents/tummy-time.html'
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