'use strict';
// ! ========= VARIABLES ========= /
const summary__item = document.querySelectorAll('.summary__item');
const summary__itemTittle = document.querySelectorAll('.summary__item-tittle');
const summary__itemText = document.querySelectorAll('.summary__item-text');
const summary__orderSpan = document.querySelectorAll('.summary__order-span');
const summary__orderSpan1 = document.querySelectorAll(
	'.summary__order-span--1'
);
const summary__orderSpan2 = document.querySelectorAll(
	'.summary__order-span--2'
);
const summary__orderSpan3 = document.querySelectorAll(
	'.summary__order-span--3'
);
const summary__orderSpan4 = document.querySelectorAll(
	'.summary__order-span--4'
);
const summary__orderSpan5 = document.querySelectorAll(
	'.summary__order-span--5'
);
const summary__btn = document.querySelector('.summary__btn');
const summary__tittle = document.querySelectorAll('.summary__tittle');
const summary__caja = document.querySelectorAll('.summary__caja');
const summary__popup = document.querySelector('.summary__popup');
const summary__modalBtn = document.querySelector('.summary__modal--btn');
summary__btn.addEventListener('click', () => {
	summary__popup.classList.toggle('hidden');
	document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.705)';

	for (let i = 0; i < summary__caja.length; i++) {
		summary__caja[i].classList.add('hidden');
		console.log('entra');
	}
	for (let j = 0; j < summary__item.length; j++) {
		summary__item[j].classList.remove('item-active');
		summary__itemText[j].classList.remove('text-active');
		summary__itemTittle[j].classList.remove('text-active');
	}
});
summary__modalBtn.addEventListener('click', () => {
	summary__popup.classList.toggle('hidden');
	document.body.style.backgroundColor = 'white';

	for (let i = 0; i < summary__orderSpan.length; i++) {
		summary__orderSpan[i].textContent = '____';
	}
});

for (let k = 0; k < summary__tittle.length; k++) {
	summary__tittle[k].addEventListener('click', () => {
		summary__caja[k].classList.toggle('hidden');
	});
}

for (let i = 0; i < 3; i++) {
	summary__item[i].addEventListener('click', () => {
		for (let j = 0; j < 3; j++) {
			summary__item[j].classList.remove('item-active');
			summary__itemText[j].classList.remove('text-active');
			summary__itemTittle[j].classList.remove('text-active');
		}
		summary__item[i].classList.toggle('item-active');
		summary__itemText[i].classList.toggle('text-active');
		summary__itemTittle[i].classList.toggle('text-active');
		for (let h = 0; h < summary__orderSpan1.length; h++) {
			summary__orderSpan1[h].textContent = summary__itemTittle[i].innerHTML;
		}
	});
}

for (let i = 3; i < 6; i++) {
	summary__item[i].addEventListener('click', () => {
		for (let j = 3; j < 6; j++) {
			summary__item[j].classList.remove('item-active');
			summary__itemText[j].classList.remove('text-active');
			summary__itemTittle[j].classList.remove('text-active');
		}
		summary__item[i].classList.toggle('item-active');
		summary__itemText[i].classList.toggle('text-active');
		summary__itemTittle[i].classList.toggle('text-active');
		for (let h = 0; h < summary__orderSpan1.length; h++) {
			summary__orderSpan2[h].textContent = summary__itemTittle[i].innerHTML;
		}
	});
}

for (let i = 6; i < 9; i++) {
	summary__item[i].addEventListener('click', () => {
		for (let j = 6; j < 9; j++) {
			summary__item[j].classList.remove('item-active');
			summary__itemText[j].classList.remove('text-active');
			summary__itemTittle[j].classList.remove('text-active');
		}
		summary__item[i].classList.toggle('item-active');
		summary__itemText[i].classList.toggle('text-active');
		summary__itemTittle[i].classList.toggle('text-active');
		for (let h = 0; h < summary__orderSpan1.length; h++) {
			summary__orderSpan3[h].textContent = summary__itemTittle[i].innerHTML;
		}
	});
}

for (let i = 9; i < 12; i++) {
	summary__item[i].addEventListener('click', () => {
		for (let j = 9; j < 12; j++) {
			summary__item[j].classList.remove('item-active');
			summary__itemText[j].classList.remove('text-active');
			summary__itemTittle[j].classList.remove('text-active');
		}
		summary__item[i].classList.toggle('item-active');
		summary__itemText[i].classList.toggle('text-active');
		summary__itemTittle[i].classList.toggle('text-active');
		for (let h = 0; h < summary__orderSpan1.length; h++) {
			summary__orderSpan4[h].textContent = summary__itemTittle[i].innerHTML;
		}
	});
}

for (let i = 12; i < 15; i++) {
	summary__item[i].addEventListener('click', () => {
		for (let j = 12; j < 15; j++) {
			summary__item[j].classList.remove('item-active');
			summary__itemText[j].classList.remove('text-active');
			summary__itemTittle[j].classList.remove('text-active');
		}
		summary__item[i].classList.toggle('item-active');
		summary__itemText[i].classList.toggle('text-active');
		summary__itemTittle[i].classList.toggle('text-active');
		for (let h = 0; h < summary__orderSpan1.length; h++) {
			summary__orderSpan5[h].textContent = summary__itemTittle[i].innerHTML;
		}
	});
}
