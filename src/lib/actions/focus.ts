export const autofocus = (node: HTMLElement, isFocus = true) => {
	const doIt = () => {
		node.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
		node.focus()
	}
	if (isFocus) doIt()
	return {
		update(_isFocus: boolean) {
			isFocus = _isFocus
			if (isFocus) doIt()
		}
	}
}
