<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { List, ListItem } from 'konsta/svelte';
	import { usersGuest, type UserGuest } from '../../stores/userguest';
	import { createEventDispatcher } from 'svelte';
	export let active = false;
	export let guests: UserGuest[] = [];
	export let except: UserGuest[] = [];

	const dispatch = createEventDispatcher()

	$: if ($usersGuest) {
		guests = $usersGuest;
	}

	$: guests = guests.filter((guest) => !except.includes(guest));
	afterNavigate(() => {
		guests = guests.filter((guest) => !except.includes(guest));
	});

	let checkboxs: boolean[] = [];
	const onClick = (indexGuest: number) => {
		if (!active) return;
		checkboxs[indexGuest] = !checkboxs[indexGuest];
		if (guests.includes($usersGuest[indexGuest])) {
			guests = guests.filter((guest) => guest != $usersGuest[indexGuest]);
			dispatch('deactive', $usersGuest[indexGuest])
		} else {
			guests[guests.length] = $usersGuest[indexGuest];
			dispatch('active', $usersGuest[indexGuest])

		}
	};
</script>

{#if active}
	<List>
		{#each $usersGuest as guest, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class:cursor-pointer={active}
				class:opacity-50={!guests.includes(guest)}
				on:click={() => onClick(i)}
				class="flex-grow"
			>
				<ListItem header="Tamu {i + 1}" subtitle={guest.nim} title={guest.nama}>
					<span
						slot="after"
						class="bg-red-500 text-center px-2 py rounded text-white text-sm font-semibold"
						on:dblclick={() => {
							$usersGuest = $usersGuest.filter((d) => d != guest);
						}}>Ketuk 2x<br />Untuk Hapus</span
					>
				</ListItem>
			</div>
		{/each}
	</List>
{:else}
	<List>
		{#each $usersGuest as guest, i}
			<ListItem header="Tamu {i + 1}" subtitle={guest.nim} title={guest.nama} />
		{/each}
	</List>
{/if}
