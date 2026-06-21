<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { initLocale } from '$lib/i18n';

	let { children } = $props();

	onMount(() => {
		initLocale();
	});
</script>

{@render children()}