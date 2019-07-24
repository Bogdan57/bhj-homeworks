const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.addEventListener('readystatechange', showCourse);
xhr.send();
function showCourse() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        loader.classList.remove('loader_active');
        const data = JSON.parse(xhr.responseText).response.Valute;
        console.log(data)
        for (const valute in data) {
            const item = `<div class="item">
                            <div class="item__code">
                                ${data[valute].CharCode}
                            </div>
                            <div class="item__value">
                                ${data[valute].Value}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>
                          </div>`;

            items.insertAdjacentHTML('afterbegin', item);            
        }

    }
}