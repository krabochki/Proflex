const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

var maintime=10;
var warningtime=3;
//Класс, который представляет сам тест
class Quiz1
{
	constructor(type, questions1, results1)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions1 = questions1;

		//Массив с возможными результатами
		this.results1 = results1;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click()
	{
		//Добавляем очки

        var value=0;
        var text = document.getElementsByTagName('input')[0];
        let justanswer = text.value;
        justanswer=justanswer.toLowerCase();
        justanswer=justanswer.replace(/\s/g,'')  ;
        var correct=0;
        if (justanswer==quiz1.questions1[quiz1.current].answers[0].realanswer){
            value=1;
            correct = 1;

        }

		this.score += value;


		//Если было добавлено хотя одно очко, то считаем, что ответ верный


		this.Next();

		return correct;
	}

	ClickButton() 
	{
		let btn=document.getElementsByTagName('button')[0];
		let inpt=document.getElementsByTagName('input')[0];
		btn.setAttribute('disabled', true);
		inpt.setAttribute('disabled', true);
		let correct=this.Click();
		if(correct > 0)
		{
			inpt.className = "green";
		}
		else 
		{
			inpt.className = "red";
		} 
		setTimeout(Update1, 1000);
	}

	//Переход к следующему вопросу
	Next()
	{		document.getElementById('timertime').style.opacity='0';

		this.current++;
		

		
		if(this.current >= this.questions1.length) 
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
			setTimeout(Update1, 1000);
			var highestIntervalId = setInterval(";");
			for (var i = 0 ; i < highestIntervalId ; i++) 
			{
				clearInterval(i); 
			}
			ClickMain2_2(10000);
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		document.getElementById('timertime').remove();

		for(let i = 0; i < this.results1.length; i++)
		{
			if(this.results1[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question1 
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
class Answer1 
{
	constructor(textbefore, realanswer,textafter) 
	{
		this.textbefore = textbefore; 
		this.realanswer = realanswer; 
        this.textafter=textafter;
    }
}



//Класс, представляющий результат
class Result1 
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
const results1 = 
[
	new Result1("Вам многому нужно научиться", 0),
	new Result1("Вы уже неплохо разбираетесь", 2),
	new Result1("Ваш уровень выше среднего", 4),
	new Result1("Вы в совершенстве знаете тему", 6)
];

//Массив с вопросами
const questions1 = 
[
	new Question1("Input the correct answer: ", 
	[
		new Answer1(" ", 'любовь', ' ')
	]),

	new Question1("Продолжите афоризм:", 
	[
		new Answer1(" ", ' ', ' ')
	]),

	new Question1("Продолжите фразу:", 
	[
		new Answer1(" ", ' ', ' ')
	])
];

//Сам тест
const quiz1 = new Quiz1(1, questions1, results1);


//Обновление теста
function Update1()
{
	if(quiz1.current < quiz1.questions1.length) 
	{
		clearInterval(downloadTimer);
		var timeleft = maintime;
		var downloadTimer = setInterval(function()
		{
			  if(timeleft <= 0)
			  {
				clearInterval(downloadTimer);
				document.getElementById('timertime').style.opacity='0';
				document.getElementById('timertime').style.color='white';
			  }
			else 
			{
				document.getElementById('timertime').style.opacity='100';
				document.getElementById('timertime').className='';
			  }
			  if ((timeleft<=warningtime) && (timeleft>=1)) 
			{
				document.getElementById('timertime').style.color='red';
				document.getElementById('timertime').className='blink2';
			}
			  document.getElementById("timertime").textContent = timeleft;
			 timeleft -= 1;
		}, 1000);
		headElem.innerHTML = quiz1.questions1[quiz1.current].text;
		buttonsElem.innerHTML = "";
		let maindivi =document.createElement("div");
      	let btn=document.createElement("button");     
		let divi = document.createElement("div");
        divi.className = 'qv';
		divi.innerHTML = quiz1.questions1[quiz1.current].answers[0].textbefore;
        let inpi=document.createElement('input');
        inpi.className='concept';
        divi.appendChild(inpi);
        divi.innerHTML=  divi.innerHTML + quiz1.questions1[quiz1.current].answers[0].textafter;
        maindivi.appendChild(divi);
        btn.id='butt';
        btn.textContent='Check';
        maindivi.appendChild(btn);
        buttonsElem.appendChild(maindivi);
		pagesElem.innerHTML = (quiz1.current + 1) + " / " + quiz1.questions1.length;
		document.getElementById("butt").addEventListener("click", function () { quiz1.ClickButton(); });
	}
	else
	{
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz1.results1[quiz1.result].text;
		pagesElem.innerHTML = "Очки: " + quiz1.score;
	}
}


function Func1()
{
	quiz1.ClickButton();

}

document.getElementById('btnmain2').addEventListener("click", function () { ClickMain2_2(); });
var x=0;
function ClickMain2_2()
{
	if (x<1) {		document.getElementById('btnmain2').parentNode.removeChild(document.getElementById('btnmain2'));
    Update1();
	setInterval(Func1, (maintime+2)*1000);
	x++;
}
else {
setInterval(Func1, (maintime+3)*1000);}





}
