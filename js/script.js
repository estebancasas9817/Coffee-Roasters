'use strict';
// ! ========= VARIABLES ========= /
const summary__item = document.querySelectorAll('.summary__item');
const summary__itemTittle = document.querySelectorAll('.summary__item-tittle');
const summary__itemText = document.querySelectorAll('.summary__item-text');
const summary__orderSpan1 = document.querySelector('.summary__order-span--1');
const summary__orderSpan2 = document.querySelector('.summary__order-span--2');
const summary__orderSpan3 = document.querySelector('.summary__order-span--3');
const summary__orderSpan4 = document.querySelector('.summary__order-span--4');
const summary__orderSpan5 = document.querySelector('.summary__order-span--5');
const summary__btn = document.querySelector('.summary__btn');
const summary__tittle = document.querySelectorAll('.summary__tittle');
const summary__caja = document.querySelectorAll('.summary__caja');
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
		summary__orderSpan1.textContent = summary__itemTittle[i].innerHTML;
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
		summary__orderSpan2.textContent = summary__itemTittle[i].innerHTML;
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
		summary__orderSpan3.textContent = summary__itemTittle[i].innerHTML;
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
		summary__orderSpan4.textContent = summary__itemTittle[i].innerHTML;
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
		summary__orderSpan5.textContent = summary__itemTittle[i].innerHTML;
	});
}
