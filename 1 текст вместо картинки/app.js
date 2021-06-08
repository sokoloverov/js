'use strict';
// 1. получите все кнопки и сохраните в переменную
let buttonsAll = document.querySelectorAll('button');
// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick
buttonsAll.forEach(function (buttonClick) {
    buttonClick.addEventListener('click', function (event) {
        handleClick(event);
    });
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    // const cardNode = ;
    const cardNode = clickedButtonEvent.target.parentElement;

    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        // wrap: document.target('.product'), здесь элемент с классом .product
        //img: , здесь картинка внутри .product
        //productName: , здесь .productName, который внутри .product
        //button: , здесь button, который внутри .product
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };


    // 4. получаем текст на кнопке, которая внутри .product

    card.button.innerText == 'Подробнее' ? showMoreText(card) : hideMoreText(card);
}
//if () { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
// 4.2 если да, то передаем объект card в функцию showMoreText
//function showMoreText(card) 
//} else if () { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
// 4.4 если да, то передаем объект card в функцию hideMoreText
//hideMoreText(card);
//}
//}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {

    // 5. картинке внутри .product ставим стиль display: block
    card.img.style.display = 'block';
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    card.wrap.querySelector('.desc').remove();
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.button.innerText = "Подробнее";
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    card.img.style.display = 'none';
    // 6.1 сохраняем произвольный текст в переменную
    let textDescription = "Слово за слово, друзья, а без джавы нам нельзя.<br>Еще скрипт сюда добавить и фрондэндом все приправить."
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    card.img.insertAdjacentHTML('beforebegin', `<div class="desc">${textDescription}</div>`);
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    card.button.innerText = "Отмена";
}