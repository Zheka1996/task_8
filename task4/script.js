const textchanche = document.querySelector('#textchanche');
textchanche.addEventListener('click', function (evt) {
    evt.preventDefault();
    const text = prompt('Введите текст, который должен быть=)');
    this.textContent = text;
})


