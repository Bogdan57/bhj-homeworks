    
const book = document.querySelector('.book');
const controls = document.querySelector('.book__control');
const sizes = document.querySelectorAll('.font-size');

function changeSize(event) {
    event.preventDefault();
    if (event.target.dataset.size === 'big') {
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
    } else if (event.target.dataset.size === 'small') {
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
    } else {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
    }

    for (let size of sizes) {
        size.classList.remove('font-size_active');
    }
    event.target.classList.add('font-size_active');
}
for (let control of controls.children) {
    control.addEventListener('click', changeSize)
}