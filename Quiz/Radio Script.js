const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");
var value=0;
var maintime=30;

//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		var worm = document.getElementById('worm1');
		worm.classList.add('worm');
		for (var i = 1; i < 31; i++) 
		{
			var worm = document.getElementById('worm__segment'+i);
			worm.classList.add('worm__segment');
		}		

	}


	
	Check (index)
	{
		if (nom>=0) {value = this.questions[this.current].Click(index);}
		if (nom==-1) 
		{
			value=0;
		}
		for(let i = 0; i < this.questions[this.current].answers.length; i++)
				{
					if(this.questions[this.current].answers[i].value >= 1)
					{
						var correct = i;
						break;
					}
				}


		if (nom>=0) 
		{
			let currentinput=document.getElementsByTagName('input')[index];
			let rightinput=document.getElementsByTagName('input')[correct];
			let rightlabel=document.getElementsByTagName('label')[correct];

			//если оно совпадает с выбранным номером варианта, то добавляем плюс балл
			if (correct==nom)
			{
				this.score++;
				for (var i=0; i<=29; i++)
				{
					document.getElementsByClassName('worm__segment')[i].classList.add('tool');
				}
				rightinput.classList.add('tool');
			}

			if (nom!=correct) 
			{
				this.score=this.score;

				for (var i=0;i<=29;i++)
					{
						document.getElementsByClassName('worm__segment')[i].classList.add('red');
					}
				currentinput.classList.add('red');
				rightlabel.classList.add('green');
			}
		}
	
		if (nom<0) 
		{

			document.getElementsByTagName('label')[correct].classList.add('green');
			document.getElementById('worm1').style.opacity='0';
		}
	}

	//Переход к следующему вопросу
	Next()
	{
		this.Check(nom);
		nom=-1;
		document.getElementById('timertime').style.opacity='0';

		this.current++;

		if(this.current >= this.questions.length) 
		{
			this.End();
			var highestIntervalId = setInterval(";");
			for (var i = 0 ; i < highestIntervalId ; i++) 
			{
				clearInterval(i); 
			}
		}
		else 
		{
			setTimeout(Update, 1000);
			var highestIntervalId = setInterval(";");
			for (var i = 0 ; i < highestIntervalId ; i++) 
			{
				clearInterval(i); 
			}
			ClickMain2(10000);
		}
	}

	ClickMain()
	{
		this.Next();
		for (var i=1;i<=this.questions[this.current-1].answers.length;i++){
			document.getElementById(i).disabled=true;}
		setTimeout(Update, 1000);
		document.getElementsByClassName('btnmain')[0].setAttribute('disabled', true);
	}
	

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		document.getElementById('timertime').remove();

		for(let i = 0; i < this.results.length; i++)
		{
			
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

//Массив с результатами
const results = 
[
	new Result("Вам многому нужно научиться", 0),
	new Result("Вы уже неплохо разбираетесь", 2),
	new Result("Ваш уровень выше среднего", 4),
	new Result("Вы в совершенстве знаете тему", 6)
];

//Массив с вопросами
const questions = 
[
	new Question("Who was the last Saxon king in England?", 
	[
		new Answer("Richard I", 0),
		new Answer("Harold II", 0),
		new Answer("William the Conqueror", 1),
		new Answer("Harold of Wessex", 0)
	]),

	new Question("Which British Prime Minister wrote “The History of the English Speaking People”?", 
	[
		new Answer("Winston Churchill", 0),
		new Answer("Lord North", 1),
		new Answer("Richard I", 0),
		new Answer("William Pitt", 0)
	]),

	new Question("Shakespeare mainly lived during the reign of", 
	[
		new Answer("Queen Victoria", 1),
		new Answer("Queen Elizabeth I", 0),
		new Answer("King Henry VIII", 0)
	]),

	new Question("2 - 2 = ", 
	[
		new Answer("0", 1),
		new Answer("1", 0),
		new Answer("2", 0),
		new Answer("Richard I", 0),
		new Answer("3", 0)
	]),

	new Question("2 + 2 * 2 = ", 
	[
		new Answer("6", 1),
		new Answer("10", 0)
	]),

	new Question("2 + 2 / 2 = ", 
	[
		new Answer("1", 1),
		new Answer("2", 0),
		new Answer("3", 0),
		new Answer("4", 0)
	])
];

//Сам тест
const quiz = new Quiz(1, questions, results);



//Обновление теста
function Update()
{
	clearInterval(downloadTimer);

	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		var timeleft = maintime;

		var downloadTimer = setInterval(function(){
		  if(timeleft <= 0){

			clearInterval(downloadTimer);
			document.getElementById('timertime').style.opacity='0';

		  }
		  else {
			document.getElementById('timertime').style.opacity='100';
		  }
		  if ((timeleft<=3) && (timeleft>=1)) {
			document.getElementById('timertime').style.color='red';
		}
		else {
			document.getElementById('timertime').style.color='white';
			document.getElementById('timertime').className='';
		
		}
		if ((timeleft<=3) && (timeleft>=0)) {
			document.getElementById('timertime').className='blink2';
		}
		if (timeleft==0){	for (var i=1;i<=quiz.questions[quiz.current].answers.length;i++){
			document.getElementById(i).disabled=true;}}
			

		  document.getElementById("timertime").textContent = timeleft;
		  timeleft -= 1;
		}, 1000);


		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{



			let btn = document.createElement("input");
            let lbl = document.createElement("label");
			btn.setAttribute("id", i+1);
			btn.setAttribute("index", i);

            btn.setAttribute("type","radio");
            btn.className='button';

            buttonsElem.appendChild(btn);
            btn.setAttribute('name','hopping');

			lbl.innerHTML =   '<span></span>' + quiz.questions[quiz.current].answers[i].text;
			lbl.setAttribute("for", i+1);

            buttonsElem.appendChild(lbl);

		}
		let btnmain = document.createElement("button");

		btnmain.innerHTML='Далее';
        btnmain.className='btnmain';
        buttonsElem.appendChild(btnmain);
		btnmain.addEventListener("click", function () { quiz.ClickMain(); });

		let worm = document.createElement("div");
		worm.setAttribute('id','worm1');

		for (var i = 0; i < 30; i++) {
			let wormchild=document.createElement('div');
			w=i+1;
			wormchild.setAttribute('id','worm__segment'+w);

			worm.appendChild(wormchild);
		 }		

		 buttonsElem.appendChild(worm);
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();

	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
	

}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

var nom=-1;
function Click(index) 
{
let correct = quiz.Click(index);
 nom = index;
}



document.getElementById('btnmain2').addEventListener("click", function () { ClickMain2(); });

var x=0;
function Func()
{
	quiz.Next();
	setTimeout(Update, 1000);

}

function ClickMain2()
{
	if (x<1) {		document.getElementById('btnmain2').parentNode.removeChild(document.getElementById('btnmain2'));

    Update();
	setInterval(Func, (maintime+2)*1000);

	x=x+2;
	document.getElementById('head').style.width="calc(285px + (800 - 285) * ((100vw - 320px) / (1920 - 320)))";
	document.getElementById('head').style.margin="auto";
	document.getElementById('quizbady').style.textAlign='left';

	document.querySelector('style').textContent +=
    "@media (max-width:600px) { #quizbady {width:75vw}  .quiz__body{	margin-right:0; width: 40vw; margin:0;margin-left: calc(20pt + (55 - 10) * ((100vw - 320px) / (600 - 320)));margin-right: calc(20pt + (55 - 10) * ((100vw - 320px) / (600 - 320)));}}"

}
else {
setInterval(Func, (maintime+3)*1000);}





}

