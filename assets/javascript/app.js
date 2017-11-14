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
	//correct: (this.d)
}

var q2 = {
	answered: false,
	q: 'Who is Kimmy\'s talented roommate on "Unbreakable Kimmy Schmidt"?',
	a: 'Jacqueline Voorheese',
	b: 'Lillian Jaushtupper',
	c: 'Titus Andromedon',
	d: 'Kimmy lives alone',
	//correct: (this.c)
}

var q3 = {
	answered: false,
	q: 'Which of the following are one of Jessica Jones\' powers on "Jessica Jones"?',
	a: 'Super Jumping',
	b: 'Mind Control',
	c: 'Invisibility',
	d: 'Immortality',
	//correct: (this.a)
}

var q4 = {
	answered: false,
	q: '"Wet Hot American Summer: First Day of Camp" it\'s revealed Lindsay is actually ',
	a: 'An undercover cop',
	b: 'A convict',
	c: 'A Russian assasin',
	d: 'An undercover journalist',
	//correct: (this.d)
}

var q5 = {
	answered: false,
	q: 'What religion is Matt Murdock on "Daredevil"?',
	a: 'Jewish',
	b: 'Protestant',
	c: 'Catholic',
	d: 'Atheist',
	//correct: (this.c)
}

var q6 = {
	answered: false,
	q: 'Why is Piper in prison on "Orange is the New Black"?',
	a: 'balh',
	b: 'lhdfdsf',
	c: 'dksjhfk',
	d: 'jdhfkj',
	//correct: (this.a)
}

var q7 = {
	answered: false,
	q: 'This Netflix horror series takes its name from a fictional Pennsylvania town:',
	a: 'Twin Peaks',
	b: 'Snow Creek',
	c: 'Hemlock Grove',
	d: 'Dawny Brook',
	//correct: (this.c)
}

var q8 = {
	answered: false,
	q: 'This Brazilian actor plays Pablo Escabar on "Narcos":',
	a: 'Pedro Pascal',
	b: 'Wagner Moura',
	c: 'Diego Luna',
	d: 'Rodrigo Santoro',
	//correct: (this.b)
}

var q9 = {
	answered: false,
	q: 'What is the most famous thing Dev has done as an actor on "Master of None"?', 
	a: 'A role as a Doctor',
	b: 'A BBQ commerical',
	c: 'A role in "Halloween 13"',
	d: 'A Go-Gurt commercial',
	//correct: (this.d)
}

var q10 = {
	answered: false,
	q: 'On this Netflix series, Jane Fonda and Lily Tomlin move in together when their husbands announce they\'re in love:',
	a: 'Carol and Helen',
	b: 'Jane and Joan',
	c: 'Grace and Frankie',
	d: 'Ruth and Gloria',
	//correct: (this.c)
}

var triviaQs = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var triviaAs = ['Arrested Development', 'Titus Andromedon', 'Super Jumping', 'An undercover journalist', 'Catholic', 'balh', 'Hemlock Grove', 'Wagner Moura', 'A Go-Gurt commercial', 'Grace and Frankie'];
var showQ;
var count = 0;
var currentAnswer;
var seconds = 30;
var intervalId;

function nextQ() {
	$('#seconds').html(seconds);
	seconds--;
	count++;
	$('.question').html(triviaQs[count].q);
	$('#a').html(triviaQs[count].a);
	$('#b').html(triviaQs[count].b);
	$('#c').html(triviaQs[count].c);
	$('#d').html(triviaQs[count].d);
}

function playTrivia() {
	$('#startButton').hide();
	$('.startGame').show();
	intervalId = setInterval(decrement, 1000);
	showQ = setInterval(nextQ, (1000 * 30));
	$('.userGuess').on('click', function() {
		stop();
		if (currentAnswer === $(this).attr('id')) {
			$('.result').html('<p>' + 'You got it, dude!' + '</p>');
			correctAnswers++;
		}
		else {
			$('.result').html('<p>' + 'Nope! The correct answer was ' + '<strong>' + '</strong>' + '</p>');
			incorrectAnswers++;
		}
	})
}	

function decrement() {
	$('#seconds').html(seconds);
	seconds--;
	if (seconds === 0) {
		stop();
		$('.timeRemaining').hide();
		$('.abcd').hide();
		$('.result').html('<p>' + 'Out of time! The correct answer was ' + '<strong>' + '</strong>' + '</p>');
		unanswered++;
	}
}

function stop() {
  clearInterval(intervalId);
}

$('.startGame').hide();
$('#startButton').click(playTrivia);







	