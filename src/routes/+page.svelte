<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { homeSlides, serviceCards } from '$lib/data/homeSlides';

	let currentSlide = $state(0);
	let intervalId: ReturnType<typeof setInterval> | undefined;
	let servicesVisible = $state(false);
	let servicesSection = $state<HTMLElement | null>(null);
	let language = $state('');

	const activeSlide = $derived(homeSlides[currentSlide]);

	const footerTopLinks = [
		{ label: 'Clinical Studies', href: '/clinical-studies' },
		{ label: 'Resources', href: '/resources' },
		{ label: 'Contact', href: '/contact' }
	];

	const languageOptions = [
		{ label: 'Translate', value: '' },
		{ label: 'Español', value: 'es' },
		{ label: 'Português', value: 'pt' },
		{ label: 'العربية', value: 'ar' },
		{ label: 'Kreyòl', value: 'ht' }
	];

	function stopSlider() {
		if (intervalId) clearInterval(intervalId);
	}

	function startSlider() {
		stopSlider();
		intervalId = setInterval(() => {
			currentSlide = (currentSlide + 1) % homeSlides.length;
		}, 6000);
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % homeSlides.length;
		startSlider();
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + homeSlides.length) % homeSlides.length;
		startSlider();
	}

	function goToSlide(index: number) {
		currentSlide = index;
		startSlider();
	}

	function handleLanguageChange(event: Event) {
		const target = event.currentTarget as HTMLSelectElement;
		const selectedLanguage = target.value;

		if (!selectedLanguage || typeof window === 'undefined') return;

		const currentUrl = window.location.href;
		const translatedUrl = `https://translate.google.com/translate?sl=auto&tl=${selectedLanguage}&u=${encodeURIComponent(currentUrl)}`;

		window.open(translatedUrl, '_blank', 'noopener,noreferrer');

		language = '';
	}

	onMount(() => {
		startSlider();

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						servicesVisible = true;
						observer.disconnect();
						break;
					}
				}
			},
			{ threshold: 0.15 }
		);

		if (servicesSection) observer.observe(servicesSection);

		return () => {
			stopSlider();
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<title>kinderBAND™</title>
</svelte:head>

<div class="min-h-screen bg-white pt-[90px] text-slate-800 md:pt-[100px]">
	<Navbar />

	<main>
		<!-- HERO -->
<section
	class="relative overflow-hidden"
	style="
		background-image: url('/images/kinderband-bg.jpg');
		background-size: 100%;
		background-position: center 35%;
		background-repeat: no-repeat;
	"
>
	<div class="mx-auto max-w-[1500px] px-4 py-8 sm:px-2 sm:py-12 lg:py-20">
		<div class="mx-auto max-w-[1185px]">
			<!-- MOBILE HERO -->
			<div class="rounded-[4px] bg-white px-8 py-10 shadow-lg sm:hidden">
				{#key currentSlide}
					<div>
						<h1 class="text-[40px] font-light leading-tight text-slate-900">
							{activeSlide.title}
						</h1>

						<p class="mt-5 text-[15px] leading-7 text-slate-800">
							{activeSlide.text}
						</p>

						<a
							href={activeSlide.href}
							class="mt-6 inline-block bg-[#446d2e] px-6 py-3 text-sm font-bold uppercase text-white"
						>
							{activeSlide.button}
						</a>
					</div>
				{/key}
			</div>

			<!-- DESKTOP HERO -->
			<div class="hidden overflow-hidden rounded-[4px] bg-white shadow-lg sm:block">
				<div
					class="relative min-h-[500px] bg-cover bg-center"
					style={`background-image: url('${activeSlide.image}');`}
				>
					<div class="absolute inset-0 bg-black/[0.03]"></div>

					<div
						class="absolute top-1/2 w-1/2 -translate-y-1/2 px-10"
						class:right-0={activeSlide.position === 'right'}
						class:left-0={activeSlide.position === 'left'}
					>
						{#key currentSlide}
							<div>
								<h1 class="text-[54px] font-light text-slate-900">
									{activeSlide.title}
								</h1>

								<p class="mt-6 max-w-[480px] text-[16px] leading-7 text-slate-800">
									{activeSlide.text}
								</p>

								<a
									href={activeSlide.href}
									class="mt-6 inline-block bg-[#446d2e] px-6 py-3 text-sm font-bold uppercase text-white"
								>
									{activeSlide.button}
								</a>
							</div>
						{/key}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

		<!-- HEADING -->
		<section class="bg-white px-4 py-10 text-center sm:py-12">
			<h2 class="mx-auto max-w-4xl text-[30px] leading-tight text-[#4a4f57] sm:text-[36px] lg:text-[42px]">
				Combining the most advanced technology with over 80 years of clinical expertise.
			</h2>
		</section>

		<!-- CARDS -->
		<section bind:this={servicesSection} class="bg-[#f3f6fb] py-12 sm:py-16">
			<div class="mx-auto grid max-w-[1210px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each serviceCards as card, index (card.title)}
					<a href={card.href} class="group relative h-[300px] overflow-hidden rounded sm:h-[320px]">
						{#if servicesVisible}
							<div
								class="absolute inset-0"
								in:fly={{
									y: 60,
									duration: 700,
									delay: index * 140
								}}
							>
								<img src={card.image} alt={card.title} class="h-full w-full object-cover" />

								<div class="absolute inset-0 bg-black/25"></div>

								<div
									class={`absolute inset-0 opacity-0 transition group-hover:opacity-100 ${
										card.color === 'pink'
											? 'bg-pink-400/40'
											: card.color === 'blue'
												? 'bg-sky-400/40'
												: card.color === 'green'
													? 'bg-lime-400/40'
													: 'bg-purple-400/40'
									}`}
								></div>

								<div class="absolute bottom-6 left-6 right-6 text-white">
									<h3 class="text-xl font-semibold">{card.title}</h3>

									<div class="max-h-0 opacity-0 transition-all group-hover:max-h-40 group-hover:opacity-100">
										<p class="mt-2 text-sm leading-6">
											{card.description}
										</p>
									</div>
								</div>
							</div>
						{/if}
					</a>
				{/each}
			</div>
		</section>

		<!-- PERFECT NOGGINS -->
		<section class="bg-[#f3f6fb] pb-0">
			<div class="mx-auto grid max-w-[1210px] grid-cols-1 items-end gap-8 px-4 py-10 sm:py-12 md:grid-cols-2">
				<div>
					<h3 class="text-[30px] font-light text-[#2b9444] sm:text-[32px]">
						Perfect Lil’ Noggins
					</h3>

					<p class="mt-4 leading-7 text-slate-700">
						Kinderband combines the most advanced technology with over 80 years of clinical expertise.
					</p>

					<a href="/" class="mt-6 inline-flex items-center gap-3 text-blue-600">
						<span class="h-[1px] w-8 bg-blue-600"></span>
						Learn More About Kinderband
					</a>
				</div>

				<div class="flex justify-center md:justify-end">
					<img
						src="/images/baby-header-1.png"
						alt="KinderBAND children"
						class="w-full max-w-[280px] sm:max-w-[320px]"
					/>
				</div>
			</div>

			<!-- YELLOW BAR + TOP MENU + TURTLE -->
			<div
				class="relative border-t py-4 sm:h-[84px] sm:py-0"
				style="
					background-image: url('/images/footer-top-bg.jpg');
					background-repeat: repeat-x;
					background-size: auto 100%;
				"
			>
				<div class="relative mx-auto flex max-w-[1210px] items-center justify-center px-4 sm:h-full sm:justify-end">
					<div class="relative w-full overflow-visible sm:h-full">
						<img
							src="/images/kinderband-turtle.png"
							class="absolute -top-6 left-0 z-10 hidden w-[130px] animate-turtle sm:block"
							alt="turtle"
						/>

						<div class="relative z-20 flex flex-col items-center justify-center gap-2 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:flex-row sm:gap-3">
							<select
								bind:value={language}
								onchange={handleLanguageChange}
								aria-label="Language translator"
								class="h-[34px] w-full max-w-[220px] rounded-[8px] border border-[#d4c16b] bg-[#f7efb0] px-3 text-[13px] font-medium text-[#4d8b38] shadow-sm outline-none transition hover:bg-[#fbf4c2] sm:h-[38px] sm:w-auto sm:max-w-none sm:px-4"
							>
								{#each languageOptions as option (option.label)}
									<option value={option.value}>{option.label}</option>
								{/each}
							</select>

							<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
								{#each footerTopLinks as item (item.label)}
									<a
										href={item.href}
										class="inline-flex h-[34px] items-center rounded-[8px] border border-[#d4c16b] bg-[#f7efb0] px-3 text-[13px] font-medium text-[#4d8b38] shadow-sm transition hover:bg-[#fbf4c2] sm:h-[38px] sm:rounded-[10px] sm:px-4 sm:text-[14px]"
									>
										{item.label}
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>

<style>
	@keyframes turtle-walk-stop {
		0% {
			transform: translateX(-120%) translateY(0);
		}
		80% {
			transform: translateX(220px) translateY(-3px);
		}
		100% {
			transform: translateX(220px) translateY(0);
		}
	}

	.animate-turtle {
		animation: turtle-walk-stop 15s ease-out forwards;
	}
</style>