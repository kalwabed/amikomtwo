<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	export let draggable = true;
	export let pointer = true;
	export let wheel = false;

	let slider;

	onMount(() => {
		let mouseDown = false;
		let startX, scrollLeft;

		if (draggable) {
			let startDragging = function (e) {
				mouseDown = true;
				startX = e.type.includes('touch')
					? e.touches[0].pageX - slider.offsetLeft
					: e.pageX - slider.offsetLeft;
				scrollLeft = slider.scrollLeft;
			};

			let stopDragging = function (event) {
				mouseDown = false;
			};

			slider.addEventListener('mousemove', (e) => {
				e.preventDefault();
				if (!mouseDown) {
					return;
				}
				const x = e.type.includes('touch')
					? e.touches[0].pageX - slider.offsetLeft
					: e.pageX - slider.offsetLeft;
				const scroll = x - startX;
				slider.scrollLeft = scrollLeft - scroll;
			});
			// Add touchmove event listener
			slider.addEventListener('touchmove', (e) => {
				e.preventDefault();
				if (!mouseDown) {
					return;
				}
				const x = e.touches[0].pageX - slider.offsetLeft;
				const scroll = x - startX;
				slider.scrollLeft = scrollLeft - scroll;
			});

			// Add the event listeners for both mouse and touch events
			slider.addEventListener('mousedown', startDragging, false);
			slider.addEventListener('touchstart', startDragging, false);
			slider.addEventListener('mouseup', stopDragging, false);
			slider.addEventListener('mouseleave', stopDragging, false);
			slider.addEventListener('touchend', stopDragging, false);
			// scroll event
			slider.addEventListener('wheel', (event) => {
				if (wheel) {
					event.preventDefault();

					slider.scrollBy({
						left: event.deltaY < 0 ? -30 : 30
					});
				}
			});
		}
	});
</script>

<div class="clear" />
<div bind:this={slider} class="parent">
	<div class="child" class:cursor-pointer={pointer}>
		<slot />
	</div>
</div>
<div class="clear" />

<style>
	.parent {
		width: 100%;
		overflow-x: hidden;
		float: left;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none;
		scroll-snap-type: x mandatory;
	}
	.parent::-webkit-scrollbar {
		display: none;
	}

	.child {
		float: left;
		/* scroll-snap-align: center; */
	}
	.clear {
		clear: both;
	}
</style>
