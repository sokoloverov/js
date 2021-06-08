'use strict';

let colorCell = 'white';
let boardRow = "";
let column = "";
let row = "";
let cellChessmen = "";
let htmlString = document.querySelector('.chessBoard');

const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = [8, 7, 6, 5, 4, 3, 2, 1];
const kingsmen = [
    //белые
    { chessmen: 'king', code: '&#9812;', row: 1, col: 'e' },
    { chessmen: 'queen', code: '&#9813;', row: 1, col: 'd' },
    { chessmen: 'rook', code: '&#9814;', row: 1, col: ['a', 'h'] },
    { chessmen: 'bishop', code: '&#9815;', row: 1, col: ['c', 'f'] },
    { chessmen: 'knight', code: '&#9816;', row: 1, col: ['b', 'g'] },
    { chessmen: 'pawn', code: '&#9817;', row: 2, col: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] },
    //черные
    { chessmen: 'king', code: '&#9818;', row: 8, col: 'e' },
    { chessmen: 'queen', code: '&#9819;', row: 8, col: 'd' },
    { chessmen: 'rook', code: '&#9820;', row: 8, col: ['a', 'h'] },
    { chessmen: 'bishop', code: '&#9821;', row: 8, col: ['c', 'f'] },
    { chessmen: 'knight', code: '&#9822;', row: 8, col: ['b', 'g'] },
    { chessmen: 'pawn', code: '&#9823;', row: 7, col: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] },
];

/**
 * Ищет в массиве данных совпадение заданного местоположения фигуры с данными формирующейся ячейки
 * @param {строка формирующейся ячейки} rowChessmen 
 * @param {колонка формирующейся ячейки} columnChessmen 
 * @returns возвращает десятичный код символа фигуры
 */
function findChessman(rowChessmen, columnChessmen) {
    for (let k = 0; k < kingsmen.length; k++) {
        //перебор значений, если фигура в >1 ячейке
        for (let t = 0; t < kingsmen[k].col.length; t++) {
            if (kingsmen[k].col[t] == columnChessmen && kingsmen[k].row == rowChessmen) {
                return kingsmen[k].code;
            }
        }
    }
    return '';
}

for (let n = 0; n <= rows.length; n++) {
    //выбор цвета ячейки: правило четности строки
    n % 2 ? colorCell = 'black' : colorCell = 'white';
    //формирование вертикальной боковой разметки - вставка цифр
    n == rows.length ? row = '' : row = rows[n];
    boardRow = `<div class="cell border">${row}</div>`;

    for (let i = 0; i < cols.length; i++) {
        column = cols[i];
        //формирование горизонтальной боковой разметки
        if (n == rows.length) {
            boardRow += `<div class="cell border">${column}</div>`;
        } else {
            //основной цикл
            cellChessmen = findChessman(row, column);
            console.log(cellChessmen);
            //в каждый div ячейки добавляется название классов типа a 5, f 8  для последующего поиска позиционирования фигур, если делать игру на js
            boardRow += `<div class="cell ${colorCell} ${column} ${row} scale-up-top"><span class="rotate-center">${cellChessmen}</span></div>`;
            colorCell == 'white' ? colorCell = 'black' : colorCell = 'white';
        }
    }
    //за счет стиля флекс элемента chessBoard перенос строк вывода новых клеток происходит автоматически 
    htmlString.insertAdjacentHTML('beforeend', boardRow);
    //очистка клетки
    boardRow = '';
}