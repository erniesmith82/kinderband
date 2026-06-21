<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		currentLocale,
		localeNames,
		setLocale,
		t,
		type Locale
	} from '$lib/i18n';

	let mobileOpen = $state(false);
	let mobileConditionsOpen = $state(false);

	const locales: Locale[] = ['en', 'es', 'pt', 'ar', 'ht'];

	const conditionItems = [
		{ key: 'plagiocephaly', href: '/plagiocephaly' },
		{ key: 'brachycephaly', href: '/brachycephaly' },
		{ key: 'scaphocephaly', href: '/scaphocephaly' },
		{ key: 'torticollis', href: '/torticollis' }
	] as const;

	const navItems = [
		{ key: 'about', href: '/about' },
		{ key: 'treatment', href: '/treatment' },
		{ key: 'technology', href: '/technology' },
		{ key: 'clinics', href: '/clinics' },
		{ key: 'questions', href: '/questions' }
	] as const;

	const text = $derived(t($currentLocale));

	function handleLocaleChange(event: Event) {
		const value = (event.currentTarget as HTMLSelectElement).value as Locale;
		setLocale(value);
	}

	function closeMobileMenus() {
		mobileOpen = false;
		mobileConditionsOpen = false;
	}
</script>

<header class="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
	<div class="mx-auto flex w-full max-w-[1400px] items-center px-3 py-4 sm:px-4 lg:px-5 lg:py-5">
		<a href={resolve('/')} class="flex shrink-0 items-center">
			<img
				src="/images/kinderband-logo.png"
				alt="KinderBAND Logo"
				class="h-10 w-auto sm:h-12 lg:h-14"
			/>
		</a>

		<nav
			class="ml-auto hidden items-center gap-7 text-base font-medium text-slate-700 md:flex lg:gap-9 lg:text-[18px]"
		>
			<a href={resolve('/about')} class="whitespace-nowrap transition hover:text-sky-700">
				{text.nav.about}
			</a>

			<div class="group relative">
				<button
					type="button"
					class="flex items-center gap-2 whitespace-nowrap transition hover:text-sky-700"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<span>{text.nav.conditions}</span>

					<svg
						class="h-4 w-4 transition duration-200 group-hover:rotate-180"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>

				<div
					class="invisible absolute left-0 top-full z-50 mt-3 w-[240px] rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100"
				>
					{#each conditionItems as item (item.key)}
						<a
							href={resolve(item.href)}
							class="block rounded-lg px-4 py-3 text-[15px] text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
						>
							{text.conditions[item.key]}
						</a>
					{/each}
				</div>
			</div>

			<a href={resolve('/treatment')} class="whitespace-nowrap transition hover:text-sky-700">
				{text.nav.treatment}
			</a>

			<a href={resolve('/technology')} class="whitespace-nowrap transition hover:text-sky-700">
				{text.nav.technology}
			</a>

			<a href={resolve('/clinics')} class="whitespace-nowrap transition hover:text-sky-700">
				{text.nav.clinics}
			</a>

			<a href={resolve('/questions')} class="whitespace-nowrap transition hover:text-sky-700">
				{text.nav.questions}
			</a>

			<select
				class="rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-sky-500"
				bind:value={$currentLocale}
				onchange={handleLocaleChange}
				aria-label={text.common.language}
			>
				{#each locales as locale (locale)}
					<option value={locale}>{localeNames[locale]}</option>
				{/each}
			</select>
		</nav>

		<button
			type="button"
			class="ml-auto shrink-0 rounded border border-orange-400 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700 md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={text.common.menu}
			aria-expanded={mobileOpen}
		>
			{mobileOpen ? text.common.close : text.common.menu}
		</button>
	</div>

	{#if mobileOpen}
		<div class="border-t border-slate-200 bg-white md:hidden">
			<div class="mx-auto flex w-full max-w-[1400px] flex-col px-4 py-4">
				<div class="pb-4">
					<label for="mobile-language" class="mb-2 block text-sm font-medium text-slate-600">
						{text.common.language}
					</label>

					<select
						id="mobile-language"
						class="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-sky-500"
						bind:value={$currentLocale}
						onchange={handleLocaleChange}
					>
						{#each locales as locale (locale)}
							<option value={locale}>{localeNames[locale]}</option>
						{/each}
					</select>
				</div>

				<a
					href={resolve('/about')}
					class="py-3 text-base font-medium text-slate-700 transition hover:text-sky-700"
					onclick={closeMobileMenus}
				>
					{text.nav.about}
				</a>

				<div class="border-b border-slate-100 pb-2">
					<button
						type="button"
						class="flex w-full items-center justify-between py-3 text-left text-base font-medium text-slate-700 transition hover:text-sky-700"
						onclick={() => (mobileConditionsOpen = !mobileConditionsOpen)}
						aria-expanded={mobileConditionsOpen}
					>
						<span>{text.nav.conditions}</span>

						<svg
							class={`h-4 w-4 transition ${mobileConditionsOpen ? 'rotate-180' : ''}`}
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					{#if mobileConditionsOpen}
						<div class="pb-2 pl-4">
							{#each conditionItems as item (item.key)}
								<a
									href={resolve(item.href)}
									class="block py-2 text-sm text-slate-600 transition hover:text-sky-700"
									onclick={closeMobileMenus}
								>
									{text.conditions[item.key]}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<a
					href={resolve('/treatment')}
					class="py-3 text-base font-medium text-slate-700 transition hover:text-sky-700"
					onclick={closeMobileMenus}
				>
					{text.nav.treatment}
				</a>

				<a
					href={resolve('/technology')}
					class="py-3 text-base font-medium text-slate-700 transition hover:text-sky-700"
					onclick={closeMobileMenus}
				>
					{text.nav.technology}
				</a>

				<a
					href={resolve('/clinics')}
					class="py-3 text-base font-medium text-slate-700 transition hover:text-sky-700"
					onclick={closeMobileMenus}
				>
					{text.nav.clinics}
				</a>

				<a
					href={resolve('/questions')}
					class="py-3 text-base font-medium text-slate-700 transition hover:text-sky-700"
					onclick={closeMobileMenus}
				>
					{text.nav.questions}
				</a>
			</div>
		</div>
	{/if}
</header>