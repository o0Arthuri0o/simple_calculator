

const digits = document.querySelector('#digits')

let display = '';

const keys = document.querySelectorAll('.key')
for (let i = 0; i<18; i++) {
	keys[i].onclick = displayShow;
}

function displayShow(){
	display += this.textContent;
	digits.textContent = display;
}

const clearAll = document.querySelector('#clearAll');
clearAll.onclick = () => {
	display = '';
	digits.textContent = display;
}

const clear = document.querySelector('#clear');
clear.onclick = () => {
	display = display.slice(0, -1);
	digits.textContent = display;
}

const equal = document.querySelector('#equal');
equal.onclick = () => {
	display = eval(display);
	digits.textContent = display;
}
