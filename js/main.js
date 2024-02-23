// Плавный скролл из нава

let links = document.querySelectorAll(".nav__link");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = () => {
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
  }
}

// Кнопка Hire me

document.querySelector('.header__button-hire').onclick = () => {
  document.querySelector('#contact').scrollIntoView({ behavior: "smooth" });
}

// Переключатель в My recent works

var mixer = mixitup('.target');

const button = [
  document.querySelector("#button1"),
  document.querySelector("#button2"),
  document.querySelector("#button3"),
  document.querySelector("#button4")
]

for (let i = 0; i < button.length; i++) {

  button[i].onclick = () => {
    button.forEach ((item) => {
      item.classList.remove('button--active');
    })
    button[i].classList.add('button--active');
  }
}

// Валидация формы

// получили инпуты

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

// Функция при нажатии на кнопку

document.querySelector(".message__form-btn").onclick = () => {

  let hasError = false;

  [name, email, message].forEach(item => {
    if (!item.value) {
      item.style.border = "1px solid red";
      hasError = true;
    } else {
      item.style.border = "";
    }
  });

  // Если всё ок, подчищаем форму и выводим сообщение

  if (!hasError) {
    [name, email, message].forEach(item => {
      item.value = "";
    });
    alert("Успешный успех!");
  }
}

// Плавный скролл из футера

let links2 = document.querySelectorAll(".footer__link");

for (let i = 0; i < links2.length; i++) {
  links2[i].onclick = () => {
    event.preventDefault();
    setTimeout(() => {
      document.getElementById(links2[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}