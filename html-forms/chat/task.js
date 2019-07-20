const sideButton = document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const time = new Date().getHours() + ':' + new Date().getMinutes();

const robotMessage = [
	'Добрый день!',
	'Кто тут?',
    'К сожалению все операторы сейчас заняты',
    'Мы ничего не будем вам продавать',
    'Вы не купили ни одного товара, чтобы так с нами разговаривать',
	'Добрый день! До свидания!',
	'Где ваша совесть?'
];

sideButton.addEventListener('click', () => {
	chat.classList.add('chat-widget_active');
});

document.addEventListener('keypress', (e) => {
	if(e.which == 13) {
		e.preventDefault();
		const input = document.querySelector('.chat-widget__input');
		const value = input.value;
		if(value != '') {
			
			messages.innerHTML += `
				<div class="message message_client">
				    <div class="message__time">${time}</div>
				    <div class="message__text">
				      ${value}
				    </div>
			    </div>
			`;
			input.value = '';
			const random = Math.floor(Math.random()*robotMessage.length);
			const randomMessage = robotMessage[random];
			messages.innerHTML += `
				<div class="message">
				    <div class="message__time">${time}</div>
				    <div class="message__text">
				      ${randomMessage}
				    </div>
			    </div>
			`;
		}
	}
});