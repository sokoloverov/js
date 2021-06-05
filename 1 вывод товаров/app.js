"use strict";
/* 
Разметка товара:

<div class="product">
    <div>${здесь_название_товара}</div>
    <img src="${здесь путь до картинки}" alt="">
    <div>${здесь_цена}</div>
    <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>
</div>
*/

const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};



function clearWindow() {
    divEl.innerHTML = '';
}


let divEl = document.querySelector('.products');
let buttons = document.querySelectorAll('button');

buttons.forEach(function (buttonList) {
    buttonList.addEventListener('click', function (event) {

        switch (event.target.dataset.type) {
            case 'phones':
                clearWindow();
                for (let i = 0; i < products.phones.length; i++) {
                    console.log(products.phones[i].name);

                    divEl.insertAdjacentHTML('beforeend',
                        `<div><div>${products.phones[i].name}</div><div><a href="https://example.com/producs/${products.phones[i].id}">Подробнее</a></div><img src="${products.phones[i].imageUrl}" alt="${products.phones[i].name}"> <div> ${products.phones[i].price}</div></div>`);
                }
                break;

            case 'tablets':
                clearWindow();
                for (let i = 0; i < products.tablets.length; i++) {
                    console.log(products.tablets[i].name);

                    divEl.insertAdjacentHTML('beforeend',
                        `<div><div>${products.tablets[i].name}</div><div><a href="https://example.com/producs/${products.tablets[i].id}">Подробнее</a></div><img src="${products.tablets[i].imageUrl}" alt="${products.tablets[i].name}"> <div> ${products.tablets[i].price}</div></div>`);
                }
                break;

            case 'tv':
                clearWindow();
                for (let i = 0; i < products.tv.length; i++) {
                    console.log(products.tv[i].name);

                    divEl.insertAdjacentHTML('beforeend',
                        `<div><div>${products.tv[i].name}</div><div><a href="https://example.com/producs/${products.tv[i].id}">Подробнее</a></div><img src="${products.tv[i].imageUrl}" alt="${products.tv[i].name}"> <div> ${products.tv[i].price}</div></div>`);
                }
                break;
        }
    });
});
