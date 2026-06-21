<script lang="ts">
	import InfoPageLayout from '$lib/components/InfoPageLayout.svelte';
	import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';

	const questionsPageData: InfoPageData = {
		pageTitle: 'Questions | kinderBAND™',
		heroBg: '/images/kinderband-bg.jpg',
		topFrameBg: '/images/header-bg.jpg',
		bottomFrameBg: '/images/header-bg.jpg',
		footerTopBg: '/images/footer-top-bg.jpg',
		backgroundSize: '100%',
		backgroundPosition: 'center top',

		tabs: [
			{
				id: 'general',
				label: 'General Questions',
				icon: 'ⓘ',
				title: 'General Questions',
				blocks: [
					{
						type: 'faq',
						items: [
							{
								question: 'What is a kinderBAND™?',
								answer: 'The kinderBAND™ is a custom molded cranial remolding orthosis. It is also referred to as a cranial helmet, cranial band and/or orthosis. It is cleared by the FDA, as required by all cranial orthoses. The kinderBAND™ is manufactured by BioSculptor.'
							},
							{
								question: 'What is the Back to Sleep campaign?',
								answer: 'In 1994, the National Institute of Child Health and Development and its partners launched the Back to Sleep campaign to raise awareness that placing infants on their backs to sleep reduced the risk of Sudden Infant Death Syndrome.'
							},
							{
								question: 'What is the Safe to Sleep campaign?',
								answer: 'The Safe to Sleep campaign is an expansion of the original Back to Sleep campaign, educating caregivers and health care providers about ways to reduce the risk for SIDS and other sleep-related causes of infant death.'
							}
						]
					}
				]
			},
			{
				id: 'medical',
				label: 'Medical Questions',
				icon: '⚕',
				title: 'Medical Questions',
				blocks: [
					{
						type: 'faq',
						items: [
							{
								question: 'What is plagiocephaly?',
								answer: 'Plagiocephaly is a condition where an infant’s head is asymmetrical, having an uneven or irregular shape.'
							},
							{
								question: 'Is plagiocephaly occurring more frequently?',
								answer: 'Yes. Reported cases increased significantly between 1999 and 2007, possibly related to back sleeping and increased preterm births.'
							},
							{
								question: 'What is the difference between plagiocephaly, brachycephaly and scaphocephaly?',
								answer: 'Plagiocephaly is an asymmetrical head shape. Brachycephaly presents as a wider head shape. Scaphocephaly presents as a thinner, elongated head shape.'
							},
							{
								question: 'What is torticollis?',
								answer: 'Torticollis refers to a twisted or wry neck caused by shortening or imbalance of neck muscles.'
							},
							{
								question: 'What is cranial synostosis and how does it relate to plagiocephaly?',
								answer: 'Cranial synostosis is premature closure of cranial sutures and is not treatable with the kinderBAND™.'
							}
						]
					}
				]
			},
			{
				id: 'treatment',
				label: 'Treatment Questions',
				icon: '▦',
				title: 'Treatment Questions',
				blocks: [
					{
						type: 'faq',
						items: [
							{
								question: 'How do cranial helmets/orthoses treat plagiocephaly?',
								answer: 'The kinderBAND™ contacts prominent areas and creates space where growth is needed, guiding the head toward a more symmetrical shape.'
							},
							{
								question: 'Will the kinderBAND™ affect my baby neurologically?',
								answer: 'No. The kinderBAND™ will not affect neurological development.'
							},
							{
								question: 'Will the kinderBAND™ hurt?',
								answer: 'No. The kinderBAND™ is made of flexible plastic and lined with soft foam. It should never be tight.'
							},
							{
								question: 'What age are babies treated for plagiocephaly?',
								answer: 'Infants may be treated from 3 to 18 months of age, with treatment most effective between 3 and 9 months.'
							}
						]
					}
				]
			}
		],

		cta: {
			text: 'If we haven’t covered your question, comment, or concern here, please contact us.',
			buttonLabel: 'Contact Us Today for More Information',
			buttonHref: '/contact'
		}
	};
</script>

<InfoPageLayout data={questionsPageData} />