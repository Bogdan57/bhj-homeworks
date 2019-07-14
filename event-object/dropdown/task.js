const button = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const links = document.querySelector('.dropdown__link');
const items = document.querySelectorAll('.dropdown__item');


function drop() {
    list.className = 'dropdown__list dropdown__list_active'
}
button.addEventListener('click', drop);

function change(event) {
    event.preventDefault();
    if(list.classList.contains('dropdown__list_active')) {
        button.textContent = event.target.textContent;
        list.classList.remove('dropdown__list_active');
    }

}

for(let i = 0; i < items.length; i++) {
	items[i].addEventListener('click', change);
}