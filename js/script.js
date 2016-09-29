var div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

var par = document.createElement('p');
par.innerHTML = "Тест по программированию";
div.appendChild(par);
div.classList.add('paragraph');
par.style.textAlign ="center";

var newul = document.createElement('ul');
div.appendChild(newul);
newul.innerHTML = "1. Вопрос №1";
newul.classList.add('list');

var newli = document.createElement('li');
newli.classList.add('variant');
newul.appendChild(newli);

var span = document.createElement('span');
span.innerHTML = "Вариант ответа №2";
newli.appendChild(span);



var newli = document.createElement('li');
newli.classList.add('variant');
newul.appendChild(newli);

var span = document.createElement('span');
span.innerHTML = "Вариант ответа №2";
newli.appendChild(span);

var newli = document.createElement('li');
newli.classList.add('variant');
newul.appendChild(newli);

var span = document.createElement('span');
span.innerHTML = "Вариант ответа №3";
newli.appendChild(span);

var newul = document.createElement('ul');
div.appendChild(newul);
newul.innerHTML = "2. Вопрос №2";
newul.classList.add('list');

var newli = document.createElement('li');
newli.classList.add('variant');
newul.appendChild(newli);

var span = document.createElement('span');
span.innerHTML = "Вариант ответа №1";
newli.appendChild(span);

var newli = document.createElement('li');
newli.classList.add('variant');
newul.appendChild(newli);

var span = document.createElement('span');
span.innerHTML = "Вариант ответа №2";
newli.appendChild(span);

var newli = document.createElement('li');
newli.classList.add('variant');
newul.appendChild(newli);

var span = document.createElement('span');
span.innerHTML = "Вариант ответа №3";
newli.appendChild(span);

var newul = document.createElement('ul');
div.appendChild(newul);
newul.innerHTML = "3. Вопрос №3";
newul.classList.add('list');

var newli = document.createElement('li');
newli.classList.add('variant');
newul.appendChild(newli);

var span = document.createElement('span');
span.innerHTML = "Вариант ответа №1";
newli.appendChild(span);

var newli = document.createElement('li');
newli.classList.add('variant');
newul.appendChild(newli);

var span = document.createElement('span');
span.innerHTML = "Вариант ответа №2";
newli.appendChild(span);

var newli = document.createElement('li');
newli.classList.add('variant');
newul.appendChild(newli);

var span = document.createElement('span');
span.innerHTML = "Вариант ответа №3";
newli.appendChild(span);

var input = document.createElement('input');
input.classList.add('subm');
input.type ='submit';
input.value = 'Проверить мои результаты';
//input.getAttribute('submit');

div.appendChild(input);
