var seconds;
var count;
var correctAnswers;
var incorrectAnswers;
var unanswered;

var q1 = {
	answered: false,
	q: 'Netflix became "a hero" for producing a new season of which cult comedy series, cancelled by Fox in 2006?',
	a: 'Master of None',
	b: 'House of Cards',
	c: 'Wet Hot American Summer',
	d: 'Arrested Development',
	answer: 'Arrested Development',
	correctImg: '<iframe src="https://giphy.com/embed/6YCelxMJo0txK" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jJ56cJ4ZU1fTq">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/jJ56cJ4ZU1fTq" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jJ56cJ4ZU1fTq">via GIPHY</a></p>',
}

var q2 = {
	answered: false,
	q: 'Who is Kimmy\'s talented roommate on "Unbreakable Kimmy Schmidt"?',
	a: 'Jacqueline Voorheese',
	b: 'Lillian Jaushtupper',
	c: 'Titus Andromedon',
	d: 'Kimmy lives alone',
	answer: 'Titus Andromedon',
	correctImg: '<iframe src="https://giphy.com/embed/18pjPEqqIt2k8" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/comedy-drama-emmys-18pjPEqqIt2k8">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/3oEjHKvjqt5pssL99C" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kimmyschmidt-unbreakable-kimmy-schmidt-uks-3oEjHKvjqt5pssL99C">via GIPHY</a></p>',
}

var q3 = {
	answered: false,
	q: 'Which of the following are one of Jessica Jones\' powers on "Jessica Jones"?',
	a: 'Super Jumping',
	b: 'Mind Control',
	c: 'Invisibility',
	d: 'Immortality',
	answer: 'Super Jumping',
	correctImg: '',
	incorrectImg: '<iframe src="https://giphy.com/embed/SqtUeHelzv0Pe" width="480" height="441" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jessica-jones-SqtUeHelzv0Pe">via GIPHY</a></p>',
}

var q4 = {
	answered: false,
	q: '"Wet Hot American Summer: First Day of Camp" it\'s revealed Lindsay is actually ',
	a: 'An undercover cop',
	b: 'A convict',
	c: 'A Russian assasin',
	d: 'An undercover journalist',
	answer: 'An undercover journalist',
	correctImg: '',
	incorrectImg: '',
}

var q5 = {
	answered: false,
	q: 'What religion is Matt Murdock on "Daredevil"?',
	a: 'Catholic',
	b: 'Protestant',
	c: 'Jewish',
	d: 'Atheist',
	answer: 'Catholic',
	correctImg: '',
	incorrectImg: '',
}

var q6 = {
	answered: false,
	q: 'Why is Piper in prison on "Orange is the New Black"?',
	a: 'balh',
	b: 'lhdfdsf',
	c: 'dksjhfk',
	d: 'jdhfkj',
	answer: 'hdfdsf',
	correctImg: '',
	incorrectImg: '',
}

var q7 = {
	answered: false,
	q: 'This Netflix horror series takes its name from a fictional Pennsylvania town:',
	a: 'Twin Peaks',
	b: 'Snow Creek',
	c: 'Hemlock Grove',
	d: 'Dawny Brook',
	answer: 'Hemlock Grove',
	correctImg: '',
	incorrectImg: '',
}

var q8 = {
	answered: false,
	q: 'This Brazilian actor plays Pablo Escabar on "Narcos":',
	a: 'Pedro Pascal',
	b: 'Wagner Moura',
	c: 'Diego Luna',
	d: 'Rodrigo Santoro',
	answer: 'Wagner Moura',
	correctImg: '',
	incorrectImg: '',
}

var q9 = {
	answered: false,
	q: 'What is the most famous thing Dev has done as an actor on "Master of None"?', 
	a: 'A role as a Doctor',
	b: 'A BBQ commerical',
	c: 'A role in "Halloween 13"',
	d: 'A Go-Gurt commercial',
	answer: 'A Go-Gurt commercial',
	correctImg: '',
	incorrectImg: '',
}

var q10 = {
	answered: false,
	q: 'On this Netflix series, Jane Fonda and Lily Tomlin move in together when their husbands announce they\'re in love:',
	a: 'Carol and Helen',
	b: 'Jane and Joan',
	c: 'Grace and Frankie',
	d: 'Ruth and Gloria',
	answer: 'Grace and Frankie',
	correctImg: '',
	incorrectImg: '',
}

var triviaQs = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var triviaAs = ['d', 'c', 'a', 'd', 'a', 'b', 'c', 'b', 'd', 'c']
var showQ;
var timer;
var userAnswer;

function nextQuestion() {
	$('.game').show();
	$('.result').hide();
	$('.question').html(triviaQs[count].q);
	$('#a').html(triviaQs[count].a);
	$('#b').html(triviaQs[count].b);
	$('#c').html(triviaQs[count].c);
	$('#d').html(triviaQs[count].d);
}

function showResults() {
	$('.game').hide();
	$('.result').show();
	if (userAnswer === triviaAs[count]) {
		$('.result').html('<p>' + 'You got it, dude!' + '</p>');
		$('.result').append(triviaQs[count].correctImg)
		correctAnswers++;
	}
	else if (userAnswer !== triviaAs[count]) {
		$('.result').html('<p>' + 'Nope! The correct answer was ' + '<br />' + '<strong>' + triviaQs[count].answer + '</strong>' + '. </p>');
		incorrectAnswers++;
	}
	else if (seconds === 0) {
		$('.result').html('<p>' + 'Out of time! The correct answer was ' + '<strong>' + triviaQs[count].answer + '</strong>' + '. </p>');
		unanswered++;
	}
	count++;
	if (count < 10) {
		showQ = setTimeout(nextQuestion, (1000 * 2));
	}
	else {
		clear();
		showFinal();
	}
	
}

function startGame() {
	count = '';
	seconds = 10;
	correctAnswers = 0;
	incorrectAnswers =  0;
	unanswered = 0;
	$('#startButton').hide();
	$('.result').hide();
	$('.final').hide();
	$('.game').show();
	console.log(count);
	playTrivia();
}

function resetTimer() {
	seconds = 10;
	timer = setInterval(decrement, 1000);
}

function playTrivia() {
	count = 0;
	console.log(count);
	nextQuestion();
	//resetTimer();
	$('.userGuess').on('click', function() {
		userAnswer = $(this).attr('id');
		stop();
		console.log(userAnswer);
		console.log(triviaAs[count]);
		console.log(count);
		showResults();
	})
}	

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
	clearInterval(timer);
}

function clear() {
	clearTimeout(showQ);
}

function showFinal() {
	$('#startButton').show();
	$('.game').hide();
	$('#correctAnswers').html(correctAnswers);
	$('#incorrectAnswers').html(incorrectAnswers);
	$('#unanswered').html(unanswered);
	$('.final').show();
}

$('.final').hide();
$('.game').hide();
$('#startButton').click(startGame);






	