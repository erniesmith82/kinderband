<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Message Sent | kinderBAND™</title>
</svelte:head>

<div class="min-h-screen bg-white text-slate-800">
	<Navbar />

	<main class="pt-[145px]">
		<section
			class="relative overflow-hidden"
			style="
				background-image: url('/images/kinderband-bg.jpg');
				background-size: 100%;
				background-position: center top;
				background-repeat: no-repeat;
			"
		>
			<div class="mx-auto max-w-[1500px] px-4 py-10">
				<div class="overflow-hidden bg-white shadow-sm">
					<div
						class="h-[90px] w-full bg-repeat-x bg-top sm:h-[110px]"
						style="background-image: url('/images/header-bg.jpg'); background-size: auto;"
					></div>

					<div class="px-6 pb-14 sm:px-10 lg:px-16 xl:px-20">
						<div class="mx-auto max-w-[900px] text-center">
							<div class="rounded-[22px] bg-[#2d9d3a] px-8 py-12 text-white shadow-md">
								<h1 class="text-[44px] font-bold leading-tight">
									Message Sent
								</h1>

								<p class="mt-5 text-[18px] leading-8">
									Thank you for contacting KinderBAND™. Your message has been received,
									and a member of our team will respond as soon as possible.
								</p>

								<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
									<a
										href="/"
										class="inline-flex items-center gap-3 rounded-[8px] bg-white px-6 py-3 text-[15px] font-bold text-[#2d9d3a] transition hover:bg-[#f7efb0]"
									>
										Return Home
										<span>›</span>
									</a>

									<a
										href="/clinics"
										class="inline-flex items-center gap-3 rounded-[8px] border border-white px-6 py-3 text-[15px] font-bold text-white transition hover:bg-white/10"
									>
										Find a Clinic
										<span>›</span>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div
						class="h-[90px] w-full rotate-180 bg-repeat-x bg-top sm:h-[110px]"
						style="background-image: url('/images/header-bg.jpg'); background-size: auto;"
					></div>
				</div>
			</div>
		</section>
	</main>

	<div
		class="h-[90px] w-full bg-repeat-x"
		style="background-image: url('/images/footer-top-bg.jpg'); background-size: auto; background-position: bottom;"
	></div>

	<Footer />
</div>