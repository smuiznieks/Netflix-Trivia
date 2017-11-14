var seconds = 10;
var count = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var q1 = {
	answered: false,
	q: 'Netflix became a hero for producing a new season of which cult comedy series, cancelled by Fox in 2006?',
	a: 'Master of None',
	b: 'House of Cards',
	c: 'Wet Hot American Summer',
	d: 'Arrested Development',
	answer: 'Arrested Development',
}

var q2 = {
	answered: false,
	q: 'Who is Kimmy\'s talented roommate on "Unbreakable Kimmy Schmidt"?',
	a: 'Jacqueline Voorheese',
	b: 'Lillian Jaushtupper',
	c: 'Titus Andromedon',
	d: 'Kimmy lives alone',
	answer: 'Titus Andromedon',
}

var q3 = {
	answered: false,
	q: 'Which of the following are one of Jessica Jones\' powers on "Jessica Jones"?',
	a: 'Super Jumping',
	b: 'Mind Control',
	c: 'Invisibility',
	d: 'Immortality',
	answer: 'Super Jumping',
}

var q4 = {
	answered: false,
	q: '"Wet Hot American Summer: First Day of Camp" it\'s revealed Lindsay is actually ',
	a: 'An undercover cop',
	b: 'A convict',
	c: 'A Russian assasin',
	d: 'An undercover journalist',
	answer: 'An undercover journalist',
}

var q5 = {
	answered: false,
	q: 'What religion is Matt Murdock on "Daredevil"?',
	a: 'Catholic',
	b: 'Protestant',
	c: 'Jewish',
	d: 'Atheist',
	answer: 'Catholic',
}

var q6 = {
	answered: false,
	q: 'Why is Piper in prison on "Orange is the New Black"?',
	a: 'balh',
	b: 'lhdfdsf',
	c: 'dksjhfk',
	d: 'jdhfkj',
	answer: 'hdfdsf',
}

var q7 = {
	answered: false,
	q: 'This Netflix horror series takes its name from a fictional Pennsylvania town:',
	a: 'Twin Peaks',
	b: 'Snow Creek',
	c: 'Hemlock Grove',
	d: 'Dawny Brook',
	answer: 'Hemlock Grove',
}

var q8 = {
	answered: false,
	q: 'This Brazilian actor plays Pablo Escabar on "Narcos":',
	a: 'Pedro Pascal',
	b: 'Wagner Moura',
	c: 'Diego Luna',
	d: 'Rodrigo Santoro',
	answer: 'Wagner Moura',
}

var q9 = {
	answered: false,
	q: 'What is the most famous thing Dev has done as an actor on "Master of None"?', 
	a: 'A role as a Doctor',
	b: 'A BBQ commerical',
	c: 'A role in "Halloween 13"',
	d: 'A Go-Gurt commercial',
	answer: 'A Go-Gurt commercial',
}

var q10 = {
	answered: false,
	q: 'On this Netflix series, Jane Fonda and Lily Tomlin move in together when their husbands announce they\'re in love:',
	a: 'Carol and Helen',
	b: 'Jane and Joan',
	c: 'Grace and Frankie',
	d: 'Ruth and Gloria',
	answer: 'Grace and Frankie',
}

//var a = $('#a');
//var b = $('#b');
//var c = $('#c');
//var d = $('#d');

var triviaQs = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var triviaAs = ['d', 'c', 'a', 'd', 'a', 'b', 'c', 'b', 'd', 'c']
var showQ;
var timer;
var userAnswer;

function nextQuestion() {
	$('.question').html(triviaQs[count].q);
	$('#a').html(triviaQs[count].a);
	$('#b').html(triviaQs[count].b);
	$('#c').html(triviaQs[count].c);
	$('#d').html(triviaQs[count].d);
}

function showResults() {
	if (userAnswer === triviaAs[count]) {
		$('.result').html('<p>' + 'You got it, dude!' + '</p>');
		correctAnswers++;
	}
	else if (userAnswer !== triviaAs[count]) {
		$('.result').html('<p>' + 'Nope! The correct answer was ' + '<strong>' + triviaQs[count].answer + '</strong>' + '. </p>');
		incorrectAnswers++;
	}
	else if (seconds === 0) {
		$('.result').html('<p>' + 'Out of time! The correct answer was ' + '<strong>' + triviaQs[count].answer + '</strong>' + '. </p>');
	//	unanswered++;
	}
	count++;
}




function startGame() {
	$('#startButton').hide();
	$('.game').show();
	playTrivia();
}

function resetTimer() {
	seconds = 10;
	timer = setInterval(decrement, 1000);
}



function playTrivia() {
	if (count === 9) {
		stop();
	}
	nextQuestion();
	resetTimer();
	$('.userGuess').on('click', function() {
		userAnswer = $(this).attr('id');
		stop();
		console.log(userAnswer);
		console.log(triviaAs[count]);
		setTimeout(showResults, (1000 * 5));
		
		//if (userAnswer === triviaAs[count]) {
			//$('.result').html('<p>' + 'You got it, dude!' + '</p>');
			//correctAnswers++;
			//count++;
			//nextQuestion();
			//resetTimer();
		//}
		//else {
		//	$('.result').html('<p>' + 'Nope! The correct answer was ' + '<strong>' + triviaQs[count].answer + '</strong>' + '. </p>');
		//	incorrectAnswers++;
		//	count++;
		//	nextQuestion();
		//	resetTimer();
		//}
	})
}	

	//$('.game').hide();
	//if (userAnswer === triviaAs[count]) {
	//		$('.result').html('<p>' + 'You got it, dude!' + '</p>');
	//		correctAnswers++;
	//}
	//
	//}
	//else if (seconds === 0){
	//	
	//}
	//count++;
	//nextQuestion();
	//resetTimer();
//}

function decrement() {
	$('#seconds').html(seconds);
	seconds--;
	if (seconds === 0) {
		stop();
		$('.timeRemaining').hide();
		$('.abcd').hide();
		$('.result').html('<p>' + 'Out of time! The correct answer was ' + '<strong>' + triviaQs[count].answer + '</strong>' + '. </p>');
		unanswered++;
		count++;
		nextQuestion();
		resetTimer();
	}
}

function stop() {
  clearInterval(showQ);
  clearInterval(timer);
}

$('.game').hide();
$('#startButton').click(startGame);







	