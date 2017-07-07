/*
// need to do coding for a quizz
// here implement immediately invoked function expression to have data privacy, by keeping question function inside  like this'(function(){});' 

(function(){
var Question = function (question, answers, correctAnswer)
{
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion= function(){
    console.log(this.question);
    for(var i=0; i<this.answers.length; i++){
        
         console.log(i+':'+this.answers[i]);
    
    }
}

var q1 = new Question('Do you want to learn JavaScript?',['Yes', 'No', 'May Be'], 0 );

var q2 = new Question('How well do you know JavaScript?', ['Average', 'Good', 'Not at all' ], 1 );

var q3 = new Question('Do you like JavaScript?', ['Yes','No','May Be'], 2);

var questions = [q1, q2, q3];

var questionSelection = Math.floor(Math.random()*questions.length);

questions[questionSelection].displayQuestion();

var result = parseInt(prompt('please select the correct answer'));



Question.prototype.checkAns = function(ans){
    if(ans===this.correctAnswer){
        console.log('correct answer');
    }else{
        console.log('wrong answer')
    }
}

// calling checkAns function

questions[questionSelection].checkAns(result);
})();

*/

// need to do coding for a quizz
// here implement immediately invoked function expression to have data privacy, by keeping question function inside  like this'(function(){});'
// we are adding some more functionality to above quizz code: moving to next question after giving answer, exit from the quizz, display scores for quizz


(function(){
var Question = function (question, answers, correctAnswer)
{
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion= function(){
    console.log(this.question);
    for(var i=0; i<this.answers.length; i++){
        
         console.log(i+':'+this.answers[i]);
    
    }
}

var q1 = new Question('Do you want to learn JavaScript?',['Yes', 'No', 'May Be'], 0 );

var q2 = new Question('How well do you know JavaScript?', ['Average', 'Good', 'Not at all' ], 1 );

var q3 = new Question('Do you like JavaScript?', ['Yes','No','May Be'], 2);

var questions = [q1, q2, q3];

// calling checkAns function
//questions[questionSelection].checkAns(result);
    
Question.prototype.checkAns = function(ans, callback){
    
    var score;
    if(ans===this.correctAnswer){
        console.log('correct answer');
        score =callback(true);
        
    }else{
        console.log('wrong answer');
        score =callback(false);
       
    }
          this.displayScores(score);
    
}
Question.prototype.displayScores = function(scores){
    
    console.log('your score:'+scores);
}



function scores () {
    var score = 0;
    return function (correctAnswer) {
        if(correctAnswer) {
        score++;
        }
    return score;
    }
}
    var keepScore = scores();

    
    
function nextQuestion(){
  // no need to define var question again, var questions = [q1, q2, q3];

var questionSelection = Math.floor(Math.random()*questions.length);

questions[questionSelection].displayQuestion();

var result = prompt('please select the correct answer and to exit pls type exit and press ok');

        if (result !== 'exit'){
    
    questions[questionSelection].checkAns(parseInt(result), keepScore);
    nextQuestion();
        }
    
    
    }
nextQuestion();


    
})();











