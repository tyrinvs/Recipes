const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');
const popupMobile = document.querySelector('.btn__open-form');

navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile');
	menuIcon.classList.toggle('menu-icon--active');

	popupMobile.onclick = function() {
		nav.classList.toggle('nav--mobile');
		menuIcon.classList.toggle('menu-icon--active');
	}
};


const likes = document.querySelectorAll('.dish-day__like');

likes.forEach(like => {
	const plus = like.querySelector('.dish-day__like-inc');
	const counter_element = like.querySelector('.dish-day__like-span');

    let counter = 0;

    plus.addEventListener('click', () => {
        if(counter === 0){
        	render(++counter, counter_element);
        }
        else if (counter > 0) {
        	render(--counter, counter_element);
        }
  	});
});

const render = (counter, counter_element) => counter_element.innerText = counter;


function checkFormRegistration(el) {
	var reg_name = el.reg_name.value;
	var reg_login = el.reg_login.value;
	var reg_pass = el.reg_pass.value;
	var reg_repass = el.reg_repass.value;

	var fail = "";

	if(reg_name == "" || reg_pass == "")
		fail = "Заполните все поля формы";
	else if(reg_name.length <= 2 || reg_name.length > 30)
		fail = "Введите корректное имя";
	else if(reg_pass.length <= 7)
		fail = "Минимальная длина пароля - 8 символов";
	else if(reg_pass != reg_repass)
		fail = "Пароли не совпадают";

	if(fail != "") {
		document.getElementById('errorRegistr').innerHTML = fail;
		return false;
	}
	else {
		alert("Все данные корректно заполнены");
		return true;
	}
}

function checkPassword() {
	let logins = document.getElementById("aut_login");
	let passwords = document.getElementById("aut_pass");

	var err = "";

	let loginEntered = logins.value;
	let passwordEntered = passwords.value;
	
	if(loginEntered === "login" && passwordEntered === "password") {
		alert("Добро пожаловать!");
		window.location = 'index.html';
		return true;
	}
	else {
		if(loginEntered == "" || passwordEntered == "") {
			err = "Заполните все поля формы";
		}
		else if(loginEntered != "login" || passwordEntered != "password"){
			err = "Неверный логин или пароль!";
		}
		document.getElementById('errorLogin').innerHTML = err;
		return false;
	}
	document.getElementById('aut_login').value='';
	document.getElementById('aut_pass').value='';
}


const popupLinks = document.querySelectorAll('.btn__open-form');
let unlock = true;

if (popupLinks.length > 0) { 
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index]; 
		popupLink.addEventListener("click", function (e) { 
			const popupName = popupLink.getAttribute('href').replace('#', ''); 
			const curentPopup = document.getElementById(popupName); 
			popupOpen(curentPopup); 
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.btn__close-form');
if (popupCloseIcon.length > 0) { 
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index]; 
		el.addEventListener('click', function (e) {		
			document.getElementById('reg_name').value='';
			document.getElementById('reg_login').value='';
			document.getElementById('reg_pass').value='';
			document.getElementById('reg_repass').value='';
			document.getElementById('errorRegistr').remove();
			document.getElementById('aut_login').value='';
			document.getElementById('aut_pass').value='';
			document.getElementById('errorLogin').remove();
			popupClose(el.closest('.popup')); 
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) { 
	if (curentPopup && unlock) { 
		const popupActive = document.querySelector('.popup.open'); 
		if (popupActive) { 
			popupClose(popupActive, false); 
		} 
		curentPopup.classList.add('open'); 
		curentPopup.addEventListener("click", function (e) { 
			if (!e.target.closest('.popup__content')) { 
				document.getElementById('reg_name').value='';
				document.getElementById('reg_login').value='';
				document.getElementById('reg_pass').value='';
				document.getElementById('reg_repass').value='';
				document.getElementById('errorRegistr').remove();
				document.getElementById('aut_login').value='';
				document.getElementById('aut_pass').value='';
				document.getElementById('errorLogin').remove();
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
	}
}