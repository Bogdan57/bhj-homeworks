const taskList = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');

button.addEventListener('click', addTask);

function addTask(event) {
	event.preventDefault();
	const value = input.value;
	if(value != '') {
		item(value);
		input.value = '';
	}
	removeTask ();
}


function removeTask (){
	const removeTask = Array.from( document.querySelectorAll('.task__remove') );
		removeTask.forEach( function(item) {
			item.addEventListener('click', function(event) {
				event.preventDefault();
				item.closest('div').remove();
			});
		}); 
}



function item(text) {
	taskList.innerHTML += `<div class="task">
				              <div class="task__title">
				                ${text}
				              </div>
				              <a href="#" class="task__remove">&times;</a>
				            </div>`;

removeTask ();
}