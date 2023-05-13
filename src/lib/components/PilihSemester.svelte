<script lang="ts">
	import { autofocus } from './../actions/focus';

	import { initKhs } from '../stores/initKhs';
	import HorizontalScrollContent from './HorizontalScrollContent.svelte';

	export let kode: number;
</script>

{#if $initKhs}
	<HorizontalScrollContent wheel>
		<div class="flex overflow-hidden gap-2">
			{#each $initKhs.Semester as khs}
				<button
					type="button"
					use:autofocus={khs.Kode == kode}
					class="px-6 py-2 rounded-lg border"
					on:click={() => {
						kode = khs.Kode;
					}}
					class:bg-white={kode != khs.Kode}
					class:bg-primary={kode == khs.Kode}
					class:text-white={kode == khs.Kode}>{khs.Nama}</button
				>
			{/each}
		</div>
	</HorizontalScrollContent>
{/if}
