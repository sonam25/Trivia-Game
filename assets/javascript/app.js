$(document).ready(function(){

  function start(){
    openScreen = "<p class = 'start-container'><a class='start-button' href='#' role='button'>Start Quiz!</a></p>";
    $("#Content").append(openScreen);
}
  start();

  $("#Content").on('click','.start-button',function(event){
    $(".jumbotron").hide();
   // console.log(" here2");
      showQuestions();
      //console.log(showQuestions);
      Timer();
  });

  $("body").on("click",".answer", function(event){
      selectans = $(this).text();
     if(selectans === correctAnswers[qCounter]) {
      // alert("correct");
      clearInterval(Clock),
      Win();
     }
     else{
      clearInterval(Clock),
      Loss();
     }
     
  });
  $("body").on("click", ".reset-button", function(event){
   
    resetGame();
});
});
  
function Timeout() {
  unanswered++;
  gameScreen = "<p class=' timer-p'>Time Remaining: <span class='timer'>" 
  + counter + "</span></p>" + "<p>You ran out of time. The correct answer is: "
  + correctAnswers[qCounter] + "</p>" 
  + "<img class = 'center-block' src='assets/images/Sorry.gif'>";
  $("#Content").html(gameScreen);
  setTimeout(wait, 3000); 
}
  
  function Win() {
  right++;
  gameScreen = "<p class='timer-p'>Time Remaining: <span class='timer'>"
   + counter + "</span></p>" + "<p>Correct! The answer is: "
   + correctAnswers[qCounter] + "</p>"+"<p>" + imageArray[qCounter] + "</p>";
    $("#Content").html(gameScreen);
  setTimeout(wait, 3000); 
} 

  function Loss() {
  wrong++;
  gameScreen = "<p class=' timer-p'>Time Remaining: <span class='timer'>" 
  + counter + "</span></p>" + "<p>Wrong! The correct answer is: "
  + correctAnswers[qCounter] + "</p>" 
  + "<img  class = 'center-block' src='assets/images/Sorry.gif'>";
  $("#Content").html(gameScreen);
  setTimeout(wait, 3000); 
}
  function showQuestions() {
    gameScreen =  "<p class='text-center timer-p'>Time Remaining: <span class='timer'>"
    +counter+ "</span></p>"+"<p class='text-center'>"
     + questionArray[qCounter] + "</p><p class='first-answer answer'>A. " 
     + answerArray[qCounter][0] + "</p><p class='answer'>B. "
     + answerArray[qCounter][1]+"</p><p class='answer'>C. "
     + answerArray[qCounter][2]+"</p><p class='answer'>D. " + 
     answerArray[qCounter][3]+"</p>";
     $("#Content").html(gameScreen);
     console.log(gameScreen);

  }
  function wait() {
  
  if(qCounter < 14){
    qCounter++,
    showQuestions(),
    counter = 20,
    Timer();
  } else{
    GameOver()
  }  
};

  function Timer() {
    Clock = setInterval(twentySeconds, 1000);
    function twentySeconds() {
        if (counter === 0) {
            clearInterval(Clock);
            Timeout();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
       // console.log(counter);
    }
  } 
   
  function GameOver(){
       gameScreen =  "<p>Your Final Score" + "</p>" +
         "<p>Correct Answers: " + right + "</p>" +
          "<p>Wrong Answers: " + wrong + "</p>" + "<p>Unanswered: " + unanswered + "</p>"
           + "<p><a class='reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
           $("#Content").html(gameScreen);
    }
   
    function resetGame() {
       counter = 20;
       qCounter = 0;
       right = 0;
       wrong = 0;
       unanswered = 0;
      // console.log("here");
      showQuestions();
      Timer();
    }
 
   
    var counter = 20;
    var gameScreen;
  var qCounter = 0;
  var selectans;
  var Clock;
  var right = 0;
  var wrong = 0;
  var unanswered = 0;
  var questionArray = 
    ["1.What do you destroy a Horcrux with?",
    "2. Who is Harry Potter's godfather?",
    "3. Which type of creepy crawly is Ronald Weasley most afraid of?",
    "4. What is the name of Dumbledore's phoenix?",
    "5. What does Fawkes give to Harry to save his life after being poisoned by the Basilisks fang?",
    "6. What is the make and model of the Weasley's flying car?",
    "7. Which brothers had the strongs wand?",
    "8. Who was the Headmaster at Hogwarts?",
    "9. What name was given to Lord Voldemort at birth?",
   "10. Who gave Harry his Firebolt?" ,
   "11. Which house did the Sorting Hat almost put Harry in?",
   "12. What do Hermione's parents do for a living?",
   "13. What shape is Harry Potter's scar?",
   "14. What is the name of Ron's pet rat?",
   "15. Where did Sirius Black escape from?"
    ];

  var answerArray = [
      ["Elder wand","Vibranium" , "Basilisk venom","Mjonir"], 
        ["Dumbledore",  "Prof. Snape","Sirius Black","Dr. Strange"],
        [ "Snake","Spiders","Lizard","Crocodile"],
        ["Fawkes","Nagini" , "Crookshanks", "Scabbers"],
        [ "Feather","Tears","Honey", "Love potion"],
        [ "Ford Escape","Ford Mustang","Ford Anglia","Ford Focus"],
        [ "Cadmus","Ignotus Peverell","Dumbledore","Antioch" ],
        ["Dumbledore", "J. K Rowling", "Harry Potter","Albert Einstein"],
        [ "Clark Kent","Half blood prince","Ron Wissels","Tom Marvolo Riddle"],
        ['Iron Man',' Dumbledore',"Sirius Black", "Thor"],
        [ "Griffindor","Slytherin","Wakanda","Asgard"],
        ["Engineers","Dentists","Doctor","Lawyer"],
        ["Lightening","Snake",'Triangle',"Hexagon"],
        [ "Crookshanks","Scabbers","Fawkes","Wolverine"],
        ["Wakanda","Hogwarts","Gringots","Azkaban"]
         ];

   var imageArray = new Array(); 
   imageArray[0] = "<img class='center-block' src='assets/images/Basilisk venom.gif'>";
   imageArray[1] = "<img class='center-block' src='assets/images/Sirius Black.gif'>"; 
   imageArray[2] = "<img class='center-block' src='assets/images/Spiders.gif'>"; 
   imageArray[3] = "<img class='center-block' src='assets/images/Fawkes.gif'>";  
   imageArray[4] = "<img class='center-block' src='assets/images/Tears.gif'>"; 
   imageArray[5] = "<img class='center-block' src='assets/images/Ford Anglia.gif'>"; 
   imageArray[6] = "<img class='center-block' src='assets/images/Antioch.gif'>"; 
   imageArray[7] = "<img class='center-block' src='assets/images/Dumbledore.gif'>"; 
   imageArray[8] = "<img class='center-block' src='assets/images/Tom Marvolo Riddle.gif'>"; 
   imageArray[9] = "<img class='center-block' src='assets/images/Sirius Black.gif'>"; 
   imageArray[10] = "<img class='center-block' src='assets/images/Slytherin.gif'>"; 
   imageArray[11] = "<img class='center-block' src='assets/images/Dentists.gif'>"; 
   imageArray[12] = "<img class='center-block' src='assets/images/Lightening.gif'>"; 
   imageArray[13] = "<img class='center-block' src='assets/images/Scabbers.gif'>"; 
   imageArray[14] = "<img class='center-block' src='assets/images/Azkaban.gif'>"; 

  var correctAnswers = 
[   "C. Basilisk venom", 
    "C. Sirius Black", 
    "B. Spiders", 
    "A. Fawkes", 
    "B. Tears", 
    "C. Ford Anglia", 
    "D. Antioch", 
    "A. Dumbledore",
    "D. Tom Marvolo Riddle",
    "C. Sirius Black",
    "B. Slytherin",
    "B. Dentists",
    "A. Lightening",
    "B. Scabbers",
    "D. Azkaban"
];
  