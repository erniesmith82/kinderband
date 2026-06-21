<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { designOptions } from '$lib/data/designs';

	type ClinicEntry = {
		name: string;
		city: string;
		addressLines: string[];
		phones?: string[];
		email?: string;
		website?: string;
		contact?: string;
		fax?: string;
		country?: string;
	};

	type ClinicRegion = {
		region: string;
		slug: string;
		clinics: ClinicEntry[];
	};

	export type ContentBlock =
		| {
				type: 'paragraph';
				text: string;
		  }
		| {
				type: 'link';
				label: string;
				href: string;
		  }
		| {
				type: 'faq';
				items: {
					question: string;
					answer: string;
				}[];
		  }
		| {
				type: 'list';
				title?: string;
				items: string[];
		  }
		| {
				type: 'steps';
				title?: string;
				items: string[];
		  }
		| {
				type: 'note';
				text: string;
		  }
		| {
				type: 'gallery';
				items: {
					name: string;
					code: string;
					images: string[];
				}[];
		  }
		| {
				type: 'clinic_search';
				placeholder?: string;
				initialMessage?: string;
				emptyMessage?: string;
				regions: ClinicRegion[];
		  };

	export type InfoTab = {
		id: string;
		label: string;
		icon?: string;
		title: string;
		blocks: ContentBlock[];
		image?: string;
		imageAlt?: string;
		images?: {
			src: string;
			alt?: string;
		}[];
	};

	export type InfoPageData = {
		pageTitle: string;
		heroBg?: string;
		topFrameBg?: string;
		bottomFrameBg?: string;
		footerTopBg?: string;
		sideImage?: string;
		sideImageAlt?: string;
		backgroundSize?: string;
		backgroundPosition?: string;
		tabs: InfoTab[];
		cta?: {
			text: string;
			buttonLabel: string;
			buttonHref: string;
		};
	};

	let { data }: { data: InfoPageData } = $props();

	let activeTab = $state(data.tabs[0]?.id ?? '');
	let selectedDesignImage = $state<string | null>(null);
	let designsModalOpen = $state(false);
	let clinicSearch = $state('');
	let openFaq = $state<string | null>(null);

	const activeContent = $derived(
		data.tabs.find((tab) => tab.id === activeTab) ?? data.tabs[0]
	);

	const activeClinicSearchBlock = $derived(
		activeContent.blocks.find((block) => block.type === 'clinic_search')
	);

	const filteredClinicRegions = $derived.by(() => {
		if (!activeClinicSearchBlock || activeClinicSearchBlock.type !== 'clinic_search') return [];
		if (!clinicSearch.trim()) return [];

		const query = clinicSearch.trim().toLowerCase();

		return activeClinicSearchBlock.regions.filter((region) => {
			const regionMatch = region.region.toLowerCase().includes(query);

			const clinicMatch = region.clinics.some((clinic) => {
				const haystack = [
					region.region,
					clinic.name,
					clinic.city,
					...(clinic.addressLines ?? []),
					...(clinic.phones ?? []),
					clinic.email ?? '',
					clinic.website ?? '',
					clinic.contact ?? '',
					clinic.country ?? ''
				]
					.join(' ')
					.toLowerCase();

				return haystack.includes(query);
			});

			return regionMatch || clinicMatch;
		});
	});

	function selectTab(tabId: string) {
		activeTab = tabId;
		clinicSearch = '';
		openFaq = null;
	}

	function toggleFaq(id: string) {
		openFaq = openFaq === id ? null : id;
	}

	function openDesignImage(image: string) {
		selectedDesignImage = image;
	}

	function closeDesignImage() {
		selectedDesignImage = null;
	}

	function openDesignsModal() {
		designsModalOpen = true;
	}

	function closeDesignsModal() {
		designsModalOpen = false;
	}
</script>

<svelte:head>
	<title>{data.pageTitle}</title>
</svelte:head>

<div class="min-h-screen bg-white pt-[90px] text-slate-800 md:pt-[100px]">
	<Navbar />

	<main>
		<section
			class="relative overflow-hidden"
			style={`background-image: url('${data.heroBg ?? '/images/kinderband-bg.jpg'}'); background-size: ${data.backgroundSize ?? '100%'}; background-position: ${data.backgroundPosition ?? 'center top'}; background-repeat: no-repeat;`}
		>
			<div class="mx-auto max-w-[1500px] px-4 py-8 sm:py-10 lg:px-6 lg:py-14">
				<div class="overflow-hidden bg-white shadow-sm">
					<div
						class="h-[120px] w-full bg-repeat-x bg-top sm:h-[150px] lg:h-[190px]"
						style={`background-image: url('${data.topFrameBg ?? '/images/header-bg.jpg'}'); background-size: auto;`}
					></div>

					<div class="px-4 pb-6 sm:px-6 lg:px-10 xl:px-12">
						<div class="grid grid-cols-1 gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[250px_minmax(0,1fr)]">
							<div class="space-y-3">
								{#each data.tabs as tab (tab.id)}
									<button
										type="button"
										onclick={() => selectTab(tab.id)}
										class={`flex w-full items-center gap-4 rounded-[4px] border px-4 py-5 text-left transition sm:px-5 sm:py-6 ${
											activeTab === tab.id
												? 'border-[#2d9d3a] bg-[#2d9d3a] text-white shadow-sm'
												: 'border-[#e8e8e8] bg-[#f3f3f3] text-slate-500 hover:border-[#cfd8cf] hover:bg-[#ededed]'
										}`}
										aria-pressed={activeTab === tab.id}
									>
										{#if tab.icon}
											<span class="text-[22px] leading-none sm:text-[24px]">{tab.icon}</span>
										{/if}
										<span class="text-[15px] font-medium leading-6 sm:text-[16px]">
											{tab.label}
										</span>
									</button>
								{/each}
							</div>

							<div class={`grid grid-cols-1 gap-8 ${activeContent.image || activeContent.images ? 'lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-10' : ''}`}>
								<div class="pb-2">
									<h1 class="text-[40px] font-light leading-[1.02] tracking-[-0.02em] text-slate-900 sm:text-[48px] lg:text-[60px] xl:text-[66px]">
										{activeContent.title}
									</h1>

									<div class="mt-6 space-y-6 text-[15px] leading-8 text-slate-700 sm:text-[16px] lg:mt-8 lg:space-y-8 lg:text-[17px]">
										{#each activeContent.blocks as block, i (`${activeContent.id}-block-${i}`)}
											{#if block.type === 'paragraph'}
												<p>{block.text}</p>

											{:else if block.type === 'link'}
												<a
													href={block.href}
													target="_blank"
													rel="noopener noreferrer"
													class="inline-flex items-center gap-3 text-[16px] font-medium text-[#496db2] transition hover:text-[#2f5597]"
												>
													<span class="h-[1px] w-8 bg-[#496db2]"></span>
													{block.label}
												</a>

											{:else if block.type === 'faq'}
												<div class="space-y-3">
													{#each block.items as item, j (`${activeContent.id}-faq-${j}`)}
														{@const faqId = `${activeContent.id}-faq-${j}`}

														<div class="overflow-hidden rounded-[6px] border border-slate-200 bg-white shadow-sm">
															<button
																type="button"
																onclick={() => toggleFaq(faqId)}
																class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[#f8fbf8]"
															>
																<span class="text-[17px] font-semibold leading-7 text-slate-900">
																	{item.question}
																</span>

																<span class="text-[28px] leading-none text-[#2d9d3a]">
																	{openFaq === faqId ? '−' : '+'}
																</span>
															</button>

															{#if openFaq === faqId}
																<div class="border-t border-slate-100 px-5 py-5">
																	<p class="text-[16px] leading-8 text-slate-700">
																		{item.answer}
																	</p>
																</div>
															{/if}
														</div>
													{/each}
												</div>

											{:else if block.type === 'list'}
												<div class="space-y-4">
													{#if block.title}
														<h2 class="text-[15px] font-semibold uppercase tracking-[0.06em] text-slate-700 sm:text-[16px]">
															{block.title}
														</h2>
													{/if}

													<ul class="space-y-2 pl-5 sm:space-y-3 sm:pl-6">
														{#each block.items as item, j (`${activeContent.id}-list-${i}-${j}`)}
															<li class="list-disc">{item}</li>
														{/each}
													</ul>
												</div>

											{:else if block.type === 'steps'}
												<div class="space-y-4">
													{#if block.title}
														<h2 class="text-[15px] font-semibold uppercase tracking-[0.06em] text-slate-700 sm:text-[16px]">
															{block.title}
														</h2>
													{/if}

													<div class="space-y-3">
														{#each block.items as step, j (`${activeContent.id}-step-${i}-${j}`)}
															<p>
																<span class="font-semibold">Step {j + 1}</span>
																<span class="ml-2">{step}</span>
															</p>
														{/each}
													</div>
												</div>

											{:else if block.type === 'note'}
												<p class="text-sm italic leading-7 text-slate-600 sm:text-[15px]">
													{block.text}
												</p>

											{:else if block.type === 'gallery'}
												<div class="pt-2">
													<button
														type="button"
														onclick={openDesignsModal}
														class="inline-flex items-center gap-3 rounded-[4px] border border-[#4aaf47] bg-[#f6d25d] px-5 py-3 text-[15px] font-medium text-slate-800 transition hover:bg-[#f2ca49] sm:px-6 sm:text-[16px]"
													>
														<span>Click Here to View Designs & Colors</span>
														<span class="flex h-7 w-7 items-center justify-center rounded-full border border-[#bd9b2b] text-[16px] leading-none">
															›
														</span>
													</button>
												</div>

											{:else if block.type === 'clinic_search'}
												<div class="space-y-6">
													<div class="rounded-[6px] border border-[#dfe7df] bg-[#f8fbf8] p-4 shadow-sm sm:p-5">
														<label
															for="clinic-search"
															class="mb-3 block text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4e8b41]"
														>
															Find a Clinic
														</label>

														<div class="relative">
															<input
																id="clinic-search"
																bind:value={clinicSearch}
																type="text"
																placeholder={block.placeholder ?? 'Search by state or country...'}
																class="w-full rounded-[4px] border border-slate-300 bg-white px-4 py-3 pr-12 text-[15px] text-slate-800 outline-none transition focus:border-[#2d9d3a] focus:ring-2 focus:ring-[#2d9d3a]/20 sm:text-[16px]"
															/>

															{#if clinicSearch}
																<button
																	type="button"
																	onclick={() => (clinicSearch = '')}
																	class="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-sm text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
																	aria-label="Clear search"
																>
																	✕
																</button>
															{/if}
														</div>

														<p class="mt-3 text-[13px] leading-6 text-slate-500 sm:text-[14px]">
															Start typing a U.S. state, territory, country, city, or clinic name.
														</p>
													</div>

													<div class="rounded-[6px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
														{#if !clinicSearch.trim()}
															<p class="text-center text-[16px] text-slate-500">
																{block.initialMessage ?? 'Type a state or country to find clinics.'}
															</p>
														{:else if filteredClinicRegions.length > 0}
															<div class="space-y-8">
																{#each filteredClinicRegions as region (region.slug)}
																	<section class="overflow-hidden rounded-[6px] border border-[#dfe7df] bg-white shadow-sm">
																		<div class="border-b border-[#e7efe7] bg-[#f7fbf7] px-5 py-4 sm:px-6">
																			<h2 class="text-[22px] font-light text-[#2d9d3a] sm:text-[28px]">
																				{region.region}
																			</h2>

																			<p class="mt-1 text-[14px] text-slate-500">
																				{region.clinics.length}
																				{region.clinics.length === 1 ? ' clinic found' : ' clinics found'}
																			</p>
																		</div>

																		<div class="grid grid-cols-1 gap-5 p-5 sm:p-6 md:grid-cols-2">
																			{#each region.clinics as clinic, j (`${region.slug}-${clinic.name}-${clinic.city}-${j}`)}
																				<article class="rounded-[6px] border border-slate-200 bg-[#fcfcfc] p-5 transition hover:border-[#cddccd] hover:shadow-md">
																					<div class="space-y-4">
																						<div>
																							<h3 class="text-[18px] font-semibold leading-6 text-slate-900">
																								{clinic.name}
																							</h3>

																							<div class="mt-2 inline-flex rounded-full bg-[#edf7eb] px-3 py-1 text-[13px] font-medium text-[#2d9d3a]">
																								{clinic.city}
																							</div>
																						</div>

																						{#if clinic.contact}
																							<div class="text-[14px] leading-6 text-slate-700">
																								<p class="font-semibold text-slate-800">Contact</p>
																								<p>{clinic.contact}</p>
																							</div>
																						{/if}

																						{#if clinic.addressLines?.length}
																							<div class="text-[14px] leading-6 text-slate-700">
																								<p class="font-semibold text-slate-800">Address</p>
																								{#each clinic.addressLines as line, k (`addr-${k}`)}
																									<p>{line}</p>
																								{/each}
																							</div>
																						{/if}

																						{#if clinic.phones?.length}
																							<div class="text-[14px] leading-6 text-slate-700">
																								<p class="font-semibold text-slate-800">Phone</p>

																								<div class="space-y-1">
																									{#each clinic.phones as phone, k (`phone-${k}`)}
																										<p>
																											<a
																												href={`tel:${phone.replace(/[^+\d]/g, '')}`}
																												class="text-[#496db2] transition hover:text-[#2f5597]"
																											>
																												{phone}
																											</a>
																										</p>
																									{/each}
																								</div>
																							</div>
																						{/if}

																						{#if clinic.fax}
																							<p class="text-[14px] leading-6 text-slate-700">
																								<span class="font-semibold text-slate-800">Fax:</span>
																								{clinic.fax}
																							</p>
																						{/if}

																						{#if clinic.email}
																							<p class="break-all text-[14px] leading-6 text-slate-700">
																								<span class="font-semibold text-slate-800">Email:</span>
																								<a
																									href={`mailto:${clinic.email}`}
																									class="ml-1 text-[#496db2] transition hover:text-[#2f5597]"
																								>
																									{clinic.email}
																								</a>
																							</p>
																						{/if}

																						{#if clinic.website}
																							<p class="break-all text-[14px] leading-6 text-slate-700">
																								<span class="font-semibold text-slate-800">Website:</span>
																								<a
																									href={clinic.website}
																									target="_blank"
																									rel="noreferrer"
																									class="ml-1 text-[#496db2] transition hover:text-[#2f5597]"
																								>
																									{clinic.website}
																								</a>
																							</p>
																						{/if}

																						{#if clinic.country}
																							<p class="text-[14px] leading-6 text-slate-700">
																								<span class="font-semibold text-slate-800">Country:</span>
																								{clinic.country}
																							</p>
																						{/if}
																					</div>
																				</article>
																			{/each}
																		</div>
																	</section>
																{/each}
															</div>
														{:else}
															<p class="text-center text-[16px] text-slate-500">
																{block.emptyMessage ?? 'No clinics matched your search.'}
															</p>
														{/if}
													</div>
												</div>
											{/if}
										{/each}
									</div>
								</div>

								{#if activeContent.id !== 'designs' && (activeContent.image || activeContent.images)}
									<div class="flex flex-col items-center gap-4 lg:items-end">
										{#if activeContent.images}
											{#each activeContent.images as img, i (`${activeContent.id}-image-${i}`)}
												<img
													src={img.src}
													alt={img.alt ?? activeContent.title}
													class="w-full max-w-[220px] object-contain sm:max-w-[250px] lg:max-w-[260px] xl:max-w-[300px]"
												/>
											{/each}
										{:else}
											<img
												src={activeContent.image ?? data.sideImage ?? '/images/services2.jpg'}
												alt={activeContent.imageAlt ?? data.sideImageAlt ?? activeContent.title}
												class="w-full max-w-[220px] object-contain sm:max-w-[250px] lg:max-w-[260px] xl:max-w-[300px]"
											/>
										{/if}
									</div>
								{/if}
							</div>
						</div>
					</div>

					{#if data.cta && activeContent.id !== 'designs'}
						<div class="px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-10">
							<div class="flex flex-col items-center justify-center gap-4 text-center lg:flex-row lg:gap-6">
								<p class="text-[17px] leading-7 text-slate-700 sm:text-[18px]">
									{data.cta.text}
								</p>

								<a
									href={data.cta.buttonHref}
									class="inline-flex items-center gap-3 rounded-[4px] border border-[#4aaf47] bg-[#f6d25d] px-5 py-3 text-[15px] font-medium text-slate-800 transition hover:bg-[#f2ca49] sm:px-6 sm:text-[16px]"
								>
									<span>{data.cta.buttonLabel}</span>
									<span class="flex h-7 w-7 items-center justify-center rounded-full border border-[#bd9b2b] text-[16px] leading-none">
										›
									</span>
								</a>
							</div>
						</div>
					{/if}

					<div
						class="h-[120px] w-full rotate-180 bg-repeat-x bg-top sm:h-[150px] lg:h-[190px]"
						style={`background-image: url('${data.bottomFrameBg ?? '/images/header-bg.jpg'}'); background-size: auto;`}
					></div>
				</div>
			</div>
		</section>
	</main>

	<div
		class="h-[84px] w-full bg-repeat-x sm:h-[90px] lg:h-[96px]"
		style={`background-image: url('${data.footerTopBg ?? '/images/footer-top-bg.jpg'}'); background-size: auto; background-position: bottom;`}
	></div>

	<Footer />
</div>

{#if designsModalOpen}
	<div
		class="fixed inset-0 z-[998] flex items-center justify-center bg-black/70 p-4"
		onclick={closeDesignsModal}
		onkeydown={(e) => e.key === 'Escape' && closeDesignsModal()}
		role="button"
		tabindex="0"
		aria-label="Close designs popup"
	>
		<div
			class="relative h-[90vh] w-full max-w-7xl overflow-hidden rounded bg-white shadow-2xl"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="flex items-center justify-between border-b border-slate-200 px-5 py-4">
				<h2 class="text-xl font-semibold text-slate-900">
					kinderBAND™ Available Patterns
				</h2>

				<button
					type="button"
					class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-2xl leading-none text-slate-700 transition hover:bg-slate-200"
					onclick={closeDesignsModal}
					aria-label="Close designs popup"
				>
					×
				</button>
			</div>

			<div class="h-[calc(90vh-73px)] overflow-y-auto px-5 py-5">
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each designOptions.slice(0, 24) as item, j (`design-modal-${j}`)}
						<button
							type="button"
							class="group text-left"
							onclick={() => openDesignImage(item.images[0])}
							aria-label={`Open ${item.name}`}
						>
							<div class="aspect-square overflow-hidden rounded bg-white shadow-sm ring-1 ring-slate-200 transition group-hover:scale-[1.02] group-hover:shadow-md">
								<img
									src={item.images[0]}
									alt={item.name}
									class="h-full w-full object-cover"
								/>
							</div>

							<div class="mt-3">
								<p class="text-[15px] font-semibold text-slate-800">
									{item.name}
								</p>
								<p class="text-[14px] text-slate-700">
									{item.code}
								</p>
							</div>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

{#if selectedDesignImage}
	<div
		class="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 p-4"
		onclick={closeDesignImage}
		onkeydown={(e) => e.key === 'Escape' && closeDesignImage()}
		role="button"
		tabindex="0"
		aria-label="Close image popup"
	>
		<div
			class="relative max-h-[90vh] max-w-[90vw] rounded bg-white p-3 shadow-2xl"
			onclick={(e) => e.stopPropagation()}
		>
			<button
				type="button"
				class="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl leading-none text-slate-700 shadow hover:bg-white"
				onclick={closeDesignImage}
				aria-label="Close image popup"
			>
				×
			</button>

			<img
				src={selectedDesignImage}
				alt="Selected kinderBAND design"
				class="max-h-[85vh] max-w-full object-contain"
			/>
		</div>
	</div>
{/if}