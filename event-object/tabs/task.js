const tabs = Array.from(document.querySelectorAll('.tab'));
const content = document.querySelectorAll('.tab__content');

function changeTab(event) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].className = 'tab';
        event.target.className = 'tab tab_active';
    }
    for (let i = 0; i < content.length; i++) {
        content[i].className = 'tab__content'
    }
    const index = tabs.indexOf(event.target);
    content[index].className = 'tab__content tab__content_active'
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', changeTab)
} 