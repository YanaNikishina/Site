// Написать нам

// Объявить переменную модального окна в текущей области видимости
var modal = document.getElementById("openMass" );
// Переменная кнопки, открывающей модальное окно
var btn = document.getElementById("btnMass");
// Получение элемента <span>, который закрывает модальное окно
var span = document.getElementsByClassName('close')[0];

// Когда пользователь нажимает кнопку, открывается pop-up форма 
btn.onclick = function() {
modal.style.display = "block";
}
// Когда пользователь нажимает в любое место вне формы, закрыть окно формы
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}