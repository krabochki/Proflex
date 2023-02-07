const headElem = document.getElementById("head");
const html = document.getElementById("html");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");
var maintime=5;
var click=false;
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
		let btns = document.getElementsByClassName("button");

		for(let i = 0; i < btns.length; i++)
		{
			btns[i].disabled=true;
		}

		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		setTimeout(Update, 1000);
		click=true;
		return correct;
		
	}

	//Переход к следующему вопросу
	Next()
	{ click=false;
		click2 =false;
		document.getElementById('timertime').style.opacity='0';

		this.current++;

		if(this.current >= this.questions.length) 
		{
			document.getElementById('timertime').remove();

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



	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{

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
	new Result("Very bad...", 0),
	new Result("Not bad", 2),
	new Result("Good!", 4),
	new Result("You are the best!", 6)
];

//Массив с вопросами
const questions = 
[
	new Question("John (1)... from the USA (2)... works for a big computer company", 
	[
		new Answer("1) Does 2) Or", 0),
		new Answer("1) Is 2) And", 1),
		new Answer("1) Come 2) So", 0),
		new Answer("1) Is 2) Or", 0)
	]),

	new Question("The company ... 2,000 employees", 
	[
		new Answer("Has got", 1),
		new Answer("Got", 0),
		new Answer("Gets", 0),
		new Answer("Is getting", 0)
	]),

	new Question("He's based in the London office but he often ... around Europe", 
	[
		new Answer("Travels", 1),
		new Answer("Travelling", 0),
		new Answer("Is travelling", 0),
		new Answer("Travel", 0)
	]),

	new Question("He is ...", 
	[
		new Answer("System analyst", 0),
		new Answer("A system analyst", 1),
		new Answer("An system analyst", 0),
		new Answer("The system analyst", 0),
	]),

	new Question("He ... work on Mondays and Tuesdays but he works at the weekend", 
	[
		new Answer("Isn't", 0),
		new Answer("Don't", 0),
		new Answer("Doesn't", 1),
		new Answer("Aren't", 0)
	]),

	new Question("... are six people in his team", 
	[
		new Answer("They", 0),
		new Answer("There", 1),
		new Answer("Their", 0),
		new Answer("Here", 0)
	]),
	new Question("He likes ... job because it’s very interesting", 
	[
		new Answer("He", 0),
		new Answer("Him", 0),
		new Answer("His", 1),
		new Answer("Hes", 0)
	])
];

//Сам тест
const quiz = new Quiz(1, questions, results);



//Обновление теста
function Update()
{
	
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		clearInterval(downloadTimer);
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
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		

		
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
		pagesElem.innerHTML = "Score: " + quiz.score;
		
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

function Click(index) 
{

	//Получаем номер правильного ответа
	let correct = quiz.Click(index);


	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}

var click2 =false;
function Check() 
{
if (click==false){
click2=false
}	//Получаем номер правильного ответа
	let correct = quiz.Click(0);
	if (click2==false && correct==0) {
		quiz.score=quiz.score-1;
			
		}
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	if(quiz.type == 1)
	{
			btns[correct].className = "button button_correct";
	}
}


document.getElementById('btnmain2').addEventListener("click", function () { ClickMain2(); });

function Func()
{
Check();	setTimeout(Update, 1000);


}

var x=0;

function ClickMain2()
{
	if (x<1) {		
		document.getElementById('btnmain2').parentNode.removeChild(document.getElementById('btnmain2'));
    Update();
	setInterval(Func, (maintime+2)*1000);
	x++;
}
else {
setInterval(Func, (maintime+3)*1000);}





}

