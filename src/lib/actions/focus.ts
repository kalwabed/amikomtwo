export const autofocus = (node: HTMLElement, isFocus = true) => {
	let id: any;
	const doIt = () => {
		id && clearTimeout(id);
		node.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
		id = setTimeout(() => {
			node.focus();
		}, 20);
	};
	if (isFocus) doIt();
	return {
		update(_isFocus: boolean) {
			isFocus = _isFocus;
			if (isFocus) doIt();
		}
	};
};
