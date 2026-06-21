<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let name = '';
	let phone = '';
	let email = '';
	let message = '';

	let sending = false;
	let statusMessage = '';
	let statusType: 'success' | 'error' | '' = '';

	async function submitContact() {
		statusMessage = '';
		statusType = '';

		if (!name.trim() || !phone.trim() || !email.trim()) {
			statusMessage = 'Please enter your name, phone number, and email.';
			statusType = 'error';
			return;
		}

		sending = true;

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name,
					phone,
					email,
					message
				})
			});

			const result = await response.json();

			if (!response.ok || !result.success) {
				throw new Error(result.message ?? 'Unable to send message.');
			}

			window.location.href = '/contact/success';
		} catch {
			statusMessage = 'Unable to send message. Please try again.';
			statusType = 'error';
			sending = false;
		}
	}
</script>

<svelte:head>
	<title>Contact | kinderBAND™</title>
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
						<div class="mx-auto max-w-[1050px]">
							<div class="rounded-[22px] bg-[#2d9d3a] px-8 py-8 text-center shadow-md">
								<h1 class="text-[42px] font-bold leading-tight text-white">
									Contact Us Today
								</h1>

								<p class="mt-3 text-[17px] leading-7 text-white">
									Have a question about KinderBAND™? Send us a message and we’ll respond as soon as possible.
								</p>
							</div>

							<div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.35fr)_360px]">
								<form
									class="rounded-[16px] border border-slate-200 bg-white p-7 shadow-sm"
									onsubmit={(event) => {
										event.preventDefault();
										submitContact();
									}}
								>
									<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
										<div>
											<label for="name" class="mb-2 block text-[14px] font-semibold text-slate-800">
												Your name
											</label>
											<input
												id="name"
												bind:value={name}
												type="text"
												required
												class="w-full rounded-[8px] border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#2d9d3a] focus:ring-2 focus:ring-[#2d9d3a]/20"
											/>
										</div>

										<div>
											<label for="phone" class="mb-2 block text-[14px] font-semibold text-slate-800">
												Your phone number
											</label>
											<input
												id="phone"
												bind:value={phone}
												type="tel"
												required
												class="w-full rounded-[8px] border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#2d9d3a] focus:ring-2 focus:ring-[#2d9d3a]/20"
											/>
										</div>

										<div class="sm:col-span-2">
											<label for="email" class="mb-2 block text-[14px] font-semibold text-slate-800">
												Your email
											</label>
											<input
												id="email"
												bind:value={email}
												type="email"
												required
												class="w-full rounded-[8px] border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#2d9d3a] focus:ring-2 focus:ring-[#2d9d3a]/20"
											/>
										</div>
									</div>

									<div class="mt-5">
										<label for="message" class="mb-2 block text-[14px] font-semibold text-slate-800">
											Your message <span class="font-normal text-slate-500">(optional)</span>
										</label>
										<textarea
											id="message"
											bind:value={message}
											rows="8"
											class="w-full rounded-[8px] border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#2d9d3a] focus:ring-2 focus:ring-[#2d9d3a]/20"
										></textarea>
									</div>

									<div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
										<p class="text-[13px] text-slate-500">
											We’ll never share your information.
										</p>

										<button
											type="submit"
											disabled={sending}
											class="inline-flex items-center justify-center gap-3 rounded-[8px] bg-slate-950 px-6 py-3 text-[15px] font-bold text-white transition hover:bg-[#2d9d3a] disabled:cursor-not-allowed disabled:opacity-60"
										>
											{sending ? 'Sending...' : 'Send Message'}
											<span>›</span>
										</button>
									</div>

									{#if statusMessage}
										<p
											class={`mt-5 rounded-[8px] px-4 py-3 text-sm ${
												statusType === 'success'
													? 'bg-green-50 text-green-700'
													: 'bg-red-50 text-red-700'
											}`}
										>
											{statusMessage}
										</p>
									{/if}
								</form>

								<aside class="rounded-[16px] bg-[#2d8068] p-7 text-white shadow-sm">
									<h2 class="text-[24px] font-bold">
										Contact Information
									</h2>

									<div class="mt-6 space-y-4 text-[16px] leading-7">
										<p>
											<span class="font-bold">Email:</span>
											<a href="mailto:info@kinderband.net" class="underline">info@kinderband.net</a>
										</p>

										<p>
											<span class="font-bold">Phone:</span>
											<a href="tel:3058238300" class="underline">305.823.8300</a>
										</p>

										<p>
											<span class="font-bold">Toll Free:</span>
											<a href="tel:8772462884" class="underline">877.246.2884</a>
										</p>

										<p>
											<span class="font-bold">Fax:</span> 305.823.8304
										</p>
									</div>

									<div class="mt-8 rounded-[10px] bg-white/15 p-5">
										<h3 class="font-bold">Florida</h3>
										<p class="mt-2 leading-7">
											2480 West 82nd Street, #1<br />
											Hialeah, Florida 33016
										</p>
									</div>
								</aside>
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