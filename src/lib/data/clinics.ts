import type { InfoPageData } from '$lib/components/InfoPageLayout.svelte';
import { clinicsDirectory } from '$lib/data/clinics-directory';

export const clinicsPageData: InfoPageData = {
	pageTitle: 'Clinics | kinderBAND™',
	heroBg: '/images/kinderband-bg.jpg',
	topFrameBg: '/images/header-bg.jpg',
	bottomFrameBg: '/images/header-bg.jpg',
	footerTopBg: '/images/footer-top-bg.jpg',
	backgroundSize: '100%',
	backgroundPosition: 'center top',
	tabs: [
		{
			id: 'clinics',
			label: 'Clinics',
			icon: '📍',
			title: 'Clinics',
			blocks: [
				{
					type: 'paragraph',
					text: 'All certified kinderBAND™ clinics have extensive experience and expertise fitting cranial remolding orthoses.'
				},
				{
					type: 'paragraph',
					text: 'Browse by state, territory, or country to find a certified kinderBAND™ clinic near you.'
				},
				{
					type: 'clinic_search',
					placeholder: 'Search by state, country, city, or clinic name...',
					initialMessage: 'Type a state or country to find clinics.',
					emptyMessage: 'No clinics matched your search.',
					regions: clinicsDirectory.regions
				}
			]
		}
	]
};