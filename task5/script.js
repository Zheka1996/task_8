const inputtext = document.querySelector('#inputtext');
const duplicateField = document.querySelector('#duplicateField');
const butt = document.querySelector('#butt');


inputtext.addEventListener('keydown',function() {
    duplicateField.textContent = this.value;
})

butt.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(duplicateField.textContent);
    inputtext.value = "";
    duplicateField.textContent = "";   
    
})
