var menu = document.querySelector('.menu');
var menu1 = document.querySelector('.menu1');
var menu2 = document.querySelector('.menu2');
var menu3 = document.querySelector('.menu3');
var icon = document.querySelector('.icon');
var pasagr1 = document.querySelector('.pasagr1');
var pasagr2 = document.querySelector('.pasagr2');
var back = document.querySelector('.back');
var contact = document.querySelector('.contact');
var phone = document.querySelector('.phone');
var optionText = document.querySelectorAll('.cd-dropdown span');
var textHover = document.querySelector('.textHover');

menu.addEventListener('click', function panelShow() {
    icon.classList.toggle('icon-active');
    menu1.classList.toggle('menu1Active');
    menu2.classList.toggle('menu2Active');
    menu3.classList.toggle('menu3Active');
});

phone.addEventListener('click', function () {
    contact.classList.toggle('contactActive');
});

contact.addEventListener('click', function () {
    contact.classList.toggle('contactActive');

});

var starttime = function () {
    pasagr1.classList.toggle('pasagr1Active');
    pasagr2.classList.toggle('pasagr2Active');
};

var startback = function () {
    back.classList.toggle('backActive');
};

var timeback = setInterval(startback, 1000);
var time1 = setInterval(starttime, 500);

// for (i = 0; i < optionText.length; i++) {
//     console.log(optionText[i]);
//     optionText[i].addEventListener('mouseover', function () {
//         textHover.style.display = 'block';
//     });
//     optionText[i].addEventListener('mouseout', function () {
//         textHover.style.display = 'none';
//     });
// }

var table = document.querySelector('.table');
var alieneIn = document.querySelector('.alieneIn');
var ancetaContainer = document.querySelector('.anceta-container');

table.addEventListener('click', function () {
alieneIn.classList.toggle('alieneInActive');
ancetaContainer.classList.toggle('anceta-container-active');
});

var content = document.querySelector('.content');


var valueTag = document.querySelector('.valueTag');
var option = document.querySelectorAll('.option');
var selectInfa = document.querySelector('.selectInfa');
var selectMenuBox = document.querySelector('.selectMenuBox');

valueTag.addEventListener('click', function () {
    selectMenuBox.classList.toggle('selectMenuBoxActive');
});

for (i = 0; i < option.length; i++) {
    console.log(option[i].value);
    option[i].addEventListener('mouseover', function () {
        selectInfa.style.display = 'block';
    });
    option[i].addEventListener('mouseout', function () {
        selectInfa.style.display = 'none';
    });

    option[i].addEventListener('click', function () {
       var optionValue = this.value;
        valueTag.innerHTML = optionValue;
        selectMenuBox.classList.toggle('selectMenuBoxActive');
        console.log(optionValue);
    });
}






