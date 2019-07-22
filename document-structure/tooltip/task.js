const has_tooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');

function showTip(event) {
	event.preventDefault();
	const title = event.target.getAttribute('title');
	const top = event.target.getBoundingClientRect().top;
	const left = event.target.getBoundingClientRect().left;
	tooltip.textContent = title;
	tooltip.style.display = 'block';
	tooltip.style.top = `${top + 20}px`;
	tooltip.style.left = `${left}px`;
}

for(let item of has_tooltip) {
	item.addEventListener('click', showTip);
}