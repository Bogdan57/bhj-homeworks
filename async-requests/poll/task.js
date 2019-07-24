const poll_title = document.getElementById('poll__title');
const poll_answers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.addEventListener('readystatechange', showPoll);
xhr.send();
function showPoll() {
    if(xhr.readyState === 4 && xhr.status === 200){
        const data = JSON.parse(xhr.responseText).data;
        poll_title.innerText = data.title;

        for (const answer of data.answers) {

            const btn = `<button class="poll__answer">${answer}</button>`;

            poll_answers.insertAdjacentHTML('afterbegin', btn);
        }

        const answerButtons = document.querySelectorAll('.poll__answer');
        
        for (const answerButton of answerButtons) {
            answerButton.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
        }
    }
}