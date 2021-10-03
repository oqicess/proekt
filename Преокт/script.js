// динамические окна
let forgotPassword = document.querySelector('.modal-window-enter__password-forgot'); // переменная переключения на восстановление 
let registration = document.querySelector('.modal-window-enter__link'); // переменная переключения на регистрацию   
let windowRegistration = document.querySelector('.modal-window-registration'); // окно регистрации
let windowEnter = document.querySelector('.modal-window-enter'); // окно входа
let registrationBtn = document.querySelector('.modal-window-registration__btn'); // кнопка регистрации
let enterBtn = document.querySelector('.modal-window-enter__btn'); // кнопка входа
let windowRecovery = document.querySelector('.recovery-password'); // окно восстановления
let recoveryBtn = document.querySelector('.recovery-password__btn'); // кнопка восстановить
let mainBtn = document.querySelector('.main-btn'); // кнопка открытия окна
let wrapperModal; // переменная для создания фона модального окна
let body = document.body; // элемент body

// Переменные для открытия холодоса
let openLeft = document.querySelector('.main-block__left-img');
let openRight = document.querySelector('.main-block__right-img');
let hiddenBtn = document.querySelector('.main-btn');

// Сохранение данных
let saveName;
let savePassword;
let saveEmail;

// переключения на регистрацию   
registration.addEventListener('click', () => {
    windowRegistration.style.display = 'block';
    windowEnter.style.display = 'none';
});

// переключение на вход
registrationBtn.addEventListener('click', () => {
    if (validation(true)) {
        windowRegistration.style.display = 'none';
        windowEnter.style.display = 'flex';
    }
});

// вход в систему
enterBtn.addEventListener('click', () => {
    
        windowEnter.style.display = 'none';
        mainBtn.style.display = 'block'; //временно
        wrapperModal.remove();
        setTimeout(() => {
            hiddenBtn.style.display = 'none';
            openLeft.classList.add('main-block__open-left');
            openRight.classList.add('main-block__open-right');
        }, 300);

});

// переключение на восстановление 
forgotPassword.addEventListener('click', () => {
    windowRecovery.style.display = 'block';
    windowEnter.style.display = 'none';
});

// переключение на вход
recoveryBtn.addEventListener('click', () => {
    windowRecovery.style.display = 'none';
    windowEnter.style.display = 'flex';
});

// вход в учетную запись(при нажатии на кнопку)
mainBtn.addEventListener('click', () => {
    mainBtn.style.display = 'none';
    windowEnter.style.display = 'flex';
    wrapperModal = document.createElement('div'); // создание элемента
    wrapperModal.classList.add('wrapper-modal'); // добавление класса
    body.prepend(wrapperModal); // вставка в начало body
});

// валидация и сохранение данных
// данные входа
let nameEnter = document.querySelector('.modal-window-enter__name');
let passwordEnter = document.querySelector('.modal-window-enter__password');

// данные регистрации
let nameRegistration = document.querySelector('.modal-window-registration__name');
let passwordRegistration = document.querySelector('.modal-window-registration__password');
let repeatPassword = document.querySelector('.modal-window-registration__repeat-password');
let emailPassword = document.querySelector('.modal-window-registration__email');

// данные на почту
let recovery = document.querySelector('.modal-window-registration__email');

// валидация
function validation(value) {
    // валидация имени
    if (nameRegistration.value != '' && nameRegistration.value.length > 3) {
        let check = nameRegistration.value.length;
        for (let i = 0; i < nameRegistration.value.length; i++) {
            if (nameRegistration.value[i] == ' ') {
                check--;
            }
        }
        if (check == nameRegistration.value.length) {
            nameRegistration.style.borderColor = 'green';
            value = true;
        } else {
            nameRegistration.style.borderColor = 'red';
            value = false;
        }
    } else {
        nameRegistration.style.borderColor = 'red';
        value = false;
    }

    // валидация паролей
    if (passwordRegistration.value.length == repeatPassword.value.length && passwordRegistration.value != '' && passwordRegistration.value.length > 6) {
        let check = passwordRegistration.value.length;
        for (let i = 0; i < passwordRegistration.value.length; i++) {
            if (passwordRegistration.value[i] != repeatPassword.value[i] || passwordRegistration.value[i] == ' ') {
                check--;
            }
        }
        if (check == passwordRegistration.value.length) {
            passwordRegistration.style.borderColor = 'green';
            repeatPassword.style.borderColor = 'green';
            value = true;
        } else {
            passwordRegistration.style.borderColor = 'red';
            repeatPassword.style.borderColor = 'red';
            value = false;
        }
    } else {
        passwordRegistration.style.borderColor = 'red';
        repeatPassword.style.borderColor = 'red';
        value = false;
    }

    // валидация почты
    if (emailPassword.value.length != '' && emailPassword.value.length > 10) {
        let check = 0;
        for (let i = 0; i < emailPassword.value.length; i++) {
            if (emailPassword.value[i] == '@') {
                check++;
            }
        }
        if (check == 1) {
            emailPassword.style.borderColor = 'green';
            value = true;
        } else {
            emailPassword.style.borderColor = 'red';
            value = false;
        }
    } else {
        emailPassword.style.borderColor = 'red';
        value = false;
    }

    // занесении данных в браузер
    /*localStorage.setItem('name', nameRegistration);
    localStorage.setItem('password',  passwordRegistration);
    localStorage.setItem('email', emailPassword);
    saveName = localStorage.getItem('name');
    savePassword = localStorage.getItem('password');
    saveEmail = localStorage.getItem('email');*/

    return value; // если какое то поле false то повторяет функцию
}

//localStorage

/*function enter(value) {
    let nameEnter = document.querySelector('.modal-window-enter__name');
    let passwordEnter = document.querySelector('.modal-window-enter__password');

    
}*/