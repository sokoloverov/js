'use strict';

// 1. Получите ссылку на .scrollCheck

let numbersOfPosts = 0;
let scrollCheck = document.querySelector('.scrollCheck');

/**
 * Инициализация. При открытии страницы вставляем несколько постов
 * на страницу 
 */
function init() {
    // 4. Если условие истинно, то вызывайте insertPosts и рекурсивно вызывайте
    // init.
    if (window.innerHeight === document.body.offsetHeight) {
        insertPosts();
        init();
    }
}
init();

document.addEventListener('scroll', function (event) {
    if (scrollCheck.getBoundingClientRect().top <= window.innerHeight) {
        // 5. Если условие истинно вызывайте insertPosts.
        insertPosts();
    }
});

/**
 * Функция вставляет несколько постов на страницу.
 */
function insertPosts() {
    // 3. в postsMarkup вам надо будет в цикле дописывать с помощью конкатенации
    // разметку, возвращаемую getPostMarkup.
    // 3.1 в getPostMarkup в качестве аргумента передавайте счетчик цикла
    let postsMarkup = '';
    for (let i = 0; i < 4; i++) {
        postsMarkup += getPostMarkup(i);
    }
    // 3.2 Перед scrollCheck вставьте записанную в postsMarkup разметку
    scrollCheck.insertAdjacentHTML('beforebegin', postsMarkup);
}

/**
 * Функция возвращает html-разметку для одного поста, который будет
 * вставляться на страницу.
 * @param {number} counter число, для того, чтобы прибавить его ко времени unix.
 * @returns {string} html-разметка одного поста
 */
function getPostMarkup() {
    /* 2. Сделайте, чтобы в num записывалось текущее время unix (https://mzl.la/3iMz2Jr)
    плюс counter
    */
    //let num = new Date().getMilliseconds() + counter;
    numbersOfPosts = numbersOfPosts + 1;

    /* Метод RandomSource.getRandomValues() позволяет вам получать криптографически стойкие числа.
    Массив, переданный как параметр, заполняется случайными числами (случайными в криптографическом смысле). */

    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    console.log(array[0]);


    return `<div class="post">
        <img src="https://picsum.photos/200/300?random=${array}">
        Post #${numbersOfPosts}<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente suscipit aut? Veniam perspiciatis esse nesciunt ipsum numquam harum velit cumque libero provident voluptatibus iste, alias minus mollitia magni beatae dolor sunt accusantium quidem ipsa exercitationem repellendus reiciendis eaque? Iusto veritatis harum illo tenetur quam explicabo temporibus eum odit, reprehenderit unde maxime sequi incidunt atque beatae accusamus vero officiis dignissimos quasi libero ex ducimus labore asperiores iure. Unde id pariatur eius! Reiciendis similique aperiam quo consequuntur explicabo, enim, reprehenderit aspernatur, vel magni dolor voluptatem maiores quis quam odit deserunt eaque nemo autem optio? Reprehenderit cupiditate nisi nostrum exercitationem adipisci, repudiandae odio ab temporibus dolores, sunt repellat inventore ad fugiat praesentium debitis ipsam deleniti eius eligendi, nobis delectus doloremque mollitia? Quisquam sapiente similique officia officiis laudantium deserunt accusantium alias perspiciatis dolore illum. Rem blanditiis, optio exercitationem ipsam hic laudantium accusamus officiis iste sequi totam ullam, quam sunt eos a commodi modi excepturi! Ex earum deserunt possimus hic inventore sint impedit numquam veritatis harum tempore aut, velit quae maxime aliquid optio consequuntur quam dignissimos explicabo nam fugit temporibus iste aspernatur quisquam. In fugiat aut qui eaque? Aliquam consectetur minus ipsum numquam. Rerum illum illo sit repellat expedita doloribus excepturi nobis nihil! Ratione asperiores reprehenderit velit natus, sunt est, non suscipit impedit culpa dolore molestiae commodi. Dolorem reprehenderit eius, hic similique vel ullam eum eveniet asperiores aspernatur dicta neque nostrum nam quo! Dolorum fugit nobis id cum laborum magnam. 
    </div>`;
}