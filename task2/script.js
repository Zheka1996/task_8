const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click' ,(event) => {
    alert('Метод для вывод элементов в веб-консоль!');
})

const aler = document.querySelector('#aler');
aler.addEventListener('click', (event) =>  {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})

document.querySelector('#promp').addEventListener('click', 
(event) => {
    prompt('Отображает диалоговое окно с запросом на ввод текста.');
})
