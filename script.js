'use strict';

const box = document.querySelector('.box'); // Выбираем элемент с классом 'box'

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords); // Логируем записи о мутациях (изменениях)
});

observer.observe(box, {
    childList: true // Наблюдаем за изменениями в дочерних элементах
});

observer.disconnect(); // Отключаем наблюдатель
