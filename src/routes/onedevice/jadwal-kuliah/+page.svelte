<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import type { IJadwalKuliah } from '@binsarjr/apiamikomone/lib/typings/Response';
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
	import { jadwal } from '../../../lib/stores/jadwal';
	import HorizontalScrollContent from '../../../lib/components/HorizontalScrollContent.svelte';
	import { fade } from 'svelte/transition';
	const todayId = new Date().getDay();
	let idHariSelected = todayId.toString();
	let jadwalSelected: IJadwalKuliah[] = [];

	const getJadwal = async () => {
		let idHari = parseInt(idHariSelected);
		jadwalSelected = $jadwal.filter((jadwal) => jadwal.IdHari == idHari);
	};
	$: if (idHariSelected) getJadwal();
	onMount(() => {
		getJadwal();
	});
</script>

<Page>
	<Navbar title="Jadwal Kuliah">
		<NavbarBackLink slot="left" text="Back" href="/onedevice" component="a" />
	</Navbar>
	<Block>
		<HorizontalScrollContent>
			<div class="flex overflow-hidden gap-2">
				{#each ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu', 'Minggu'] as hari, i}
					{@const idHari = i + 1}
					<button
						type="button"
						class="px-8 py-4 rounded-lg border"
						on:click={() => {
							idHariSelected = idHari.toString();
						}}
						class:bg-white={idHariSelected != idHari.toString()}
						class:bg-primary={idHariSelected == idHari.toString()}
						class:text-white={idHariSelected == idHari.toString()}>{hari}</button
					>
				{/each}
			</div>
		</HorizontalScrollContent>
	</Block>

	<BlockTitle>Jadwal Kuliah</BlockTitle>
	<List strongIos insetIos outlineIos>
		{#each jadwalSelected as jadwal}
			<ListItem
				title={jadwal.MataKuliah}
				header={jadwal.JenisKuliah + (!!jadwal.Keterangan ? ' (' + jadwal.Keterangan + ')' : '')}
				subtitle={jadwal.Ruang + ' | ' + jadwal.Waktu}
				text={jadwal.EmailDosen}
				after={jadwal.Kode}
			>
				<svelte:fragment slot="footer">
					<div class="mt-2 mb-4">
						<p>{jadwal.NamaDosen}</p>
						<a href={jadwal.ZoomURL} target="_blank" rel="noreferrer" class="text-blue-600"
							>{jadwal.ZoomURL}</a
						>
					</div>
				</svelte:fragment>
			</ListItem>
		{:else}
			<ListItem title="Tidak ada jadwal" />
		{/each}
	</List>
</Page>
