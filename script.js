var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Аппараттың, құрылғының, программаның жұмысын реттеу үшін қолданылатын операция",
		"options" : [
			{"a": "Баптаулар", 
			 "b":"Блок-сызба", 
			 "c":"Байланыс арнасы", 
			 "d":"Аутентификация"}
			],
		"answer":"Баптаулар",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Нақты атаумен сақталған компьютердің сыртқы жадында сақталған ақпараттар жиынтығы",
		"options" : [
			{"a": "Форма", 
			 "b":"Файл", 
			 "c":"Түйін"}
			],
		"answer":"Файл",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Аналық плата – бұл…?",
		"options" : [
			{"a": "iшiнде процессор, жедел жады және т.б. құрылғылар орналасқан плата>", 
			 "b":"компьютер жадындағы ақпараттар көлемi", 
			 "c":"процессордың бiр секундта орындай алатын амалдар саны"}
			],
		"answer":"iшiнде процессор, жедел жады және т.б. құрылғылар орналасқан плата",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Процессор – бұл…",
		"options" : [
			{"a": "процессордың бiр секундта орындай алатын амалдар саны", 
			 "b": "көптеген жартылай өткізгішті элементтерден тұратын, компьютерде барлық есептеу мен ақпарат өңдеу жұмыстарын жүргізетін электронды микросхема"
			}
			],
		"answer":"көптеген жартылай өткізгішті элементтерден тұратын, компьютерде барлық есептеу мен ақпарат өңдеу жұмыстарын жүргізетін электронды микросхема",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Аппараттық және бағдарламалық қамтамасыз етуді теңшеу, оңтайландыру және жақсарту бойынша арнайы тапсырмаларды шешуге арналған шағын көмекші бағдарлама?",
		"options" : [
			{"a": "Хаттама", 
			 "b":"Форма",
			 "c":"Утилита",
			 "d":"Функция",
			}
			],
		"answer":"Утилита",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Ақпаратты шығару құрылғысы?",
		"options" : [
			{"a": "шнур", 
			 "b":"флешка",
			 "c":"монитор",
			}
			],
		"answer":"монитор",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Процессордың бір секундта орындайтын тактілер (әрекет) саны. Мегагерц (МГц) және Гигагерцпен (ГГц) есептеледі",
		"options" : [
			{"a": "Тактілік амплитуда", 
			 "b":"Тактілік жылдамдық",
			 "c":"Тактілік жиілік",
			}
			],
		"answer":"Тактілік жиілік",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "Паскаль машинасын кім қай жылы жасады?",
		"options" : [
			{"a": "Ада Лавлейс 1700 жылы", 
			 "b":"Джон Непер 1761 жылы",
			 "c":"Исаак Ньютон 1660 жылы",
			 "d":"Блез Паскаль 1642 жылы",
			}
			],
		"answer":"Блез Паскаль 1642 жылы",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "Арифмометрді кім құрастырды?",
		"options" : [
			{"a": "Исаак Ньютон", 
			 "b":"Джон Непер",
			 "c":"Ада Лавлейс",
			 "d":"Лейбенц"
			}
			],
		"answer":"Лейбенц",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Бірінші электронды – есептеуіш машина қалай аталған? Ол қай жылы жасалды?",
		"options" : [
			{"a": "Непер машинасы деп, 1761 жылы", 
			 "b":"Паскаль машинасы деп,1642 жылы",
			 "c":"ENIAC деп аталды, 1946 жылы",
			 "d":"Лейбенц машинасы деп, 1834 жылы",
			}
			],
		"answer":"ENIAC деп аталды, 1946 жылы",
		"score":0,
		"status": ""
	},
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
			
	});