
/*Слайдер*/
let slideIndex = 1;
showSlides(slideIndex);

// Элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Управление точками
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//Окно регистрации

// Объявить переменную модального окна в текущей области видимости
var modal = document.getElementById("openModal" );
// Переменная кнопки, открывающей модальное окно
var btn = document.getElementById("login");
// Получение элемента <span>, который закрывает модальное окно
var span = document.getElementsByClassName('close')[0];

// Когда пользователь нажимает кнопку, открывается pop-up форма 
btn.onclick = function() {
modal.style.display = "block";
}
// // Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
// span.onclick = function() {
// modal.style.display = "none";
// }
// Когда пользователь нажимает в любое место вне формы, закрыть окно формы
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
