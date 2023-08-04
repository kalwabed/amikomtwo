<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import {
		Block,
		BlockTitle,
		Button,
		Link,
		List,
		ListItem,
		Navbar,
		NavbarBackLink,
		Page
	} from 'konsta/svelte';
	import { onMount } from 'svelte';
	import { serviceClient } from '../../../lib/serviceClient';
	import { initKhs } from '../../../lib/stores/initKhs';
	import { ktmDigital } from '../../../lib/stores/ktmDigital';
	import { mahasiswa } from '../../../lib/stores/mahasiswa';
	import { authUser, preferences } from '../../../lib/stores/preferences';
	import { pengumuman } from '$lib/stores/akademik';
	import PengumumanDetail from '$lib/components/PengumumanDetail.svelte';
</script>

<Page>
	<Navbar title="Amikom TWO">
		<NavbarBackLink slot="left" text="Back" href="/onedevice" component="a" />
	</Navbar>
	<BlockTitle>Pengumuman</BlockTitle>

	<Block>
		{#each $pengumuman as item}
			<PengumumanDetail pengumuman={item} />
		{:else}
			<p>Tidak ada pengumuman</p>
		{/each}
	</Block>
</Page>
