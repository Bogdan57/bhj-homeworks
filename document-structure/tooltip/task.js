const tooltip = document.createElement('div');
tooltip.setAttribute('class', 'tooltip');
document.body.appendChild(tooltip);

document.body.addEventListener('click', (event) => {
	let target = event.target;
	if (target.className != 'has-tooltip') return;
	event.preventDefault();
	tooltip.innerText = target.getAttribute('title');
	tooltip.style.left = target.getBoundingClientRect().left.toString() + 'px';
	tooltip.classList.toggle('tooltip_active');
	tooltip.style.top = `${top + 20}px`;
	target.addEventListener('blur', () => {
		tooltip.classList.remove('tooltip_active');
	});
});