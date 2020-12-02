    var readlineSync = require("readline-sync");

    var userName = readlineSync.question("What is your name? ");

    // Input
    console.log("Hello " + userName + ", Welcome to this know your friend quiz!");

    console.log("--- Let's see how much do you know Shashank ---");

    var end = readlineSync.question("Do you want to exit from the program? Press 'E' to exit, any other key to continue - ");

    var score = 0;
    var lastScore = 0;
    var highScore = [];
    highScore.length = 3;

    var userQuestions = [
      {
        question: "Where do I live? \na: LKO \nb: Delhi \n",
        answer: "a"
      },
      {
        question: "What is my name? \na: Shashank \nb: Sam \n",
        answer: "a"
      },
      {
        question: "What do I do? \na: Job \nb: Student \n",
        answer: "a"
      },
      {
        question: "What is my last name? \na: None \nb: Mishra \n",
        answer: "b"
      },
      {
        question: "What is my qualification? \na: None \nb: Graduate \n",
        answer: "b"
      },
      {
        question: "What is favourite web series? \na: Little Things \nb: PFA \n",
        answer: "a"
      }
    ];

    if (end == "e" || end == "E") {

      console.log("Thanks for playing..");
      finalScore();
      process.exit();

    } else {

      start();

    }

    // function and condition
    function quiz(question, answer) {
      var userAnswer = readlineSync.question(question);

      if (userAnswer.toUpperCase() === answer.toUpperCase()) {

        console.log("You are right");
        score++;

      } else {

        console.log("You are wrong");

      }

      console.log("Your score: " + score);
    }

    function start() {
      for (i = 0; i < userQuestions.length; i++) {
        quiz(userQuestions[i].question, userQuestions[i].answer);
      }
      lastScore = score;
      finalScore();
    }

    function finalScore() {
      console.log("------------------------");
      console.log("Your Final Score: " + lastScore);
      console.log("------------------------");

  // additional attempt at increasing scale
      for (i=0; i < 3; i++) {

      highScore[i] = lastScore;
      }

      highScore.sort();
    }

    var highScore = [
      {
        name: "xyz",
        score: 10
      },
      {
        name: "abc",
        score: 9
      }
    ];

    if (lastScore > 10) { //which will never run lol

      console.log("Congrats!!! You made a High Score.");

    } else {

      for (i=0; i < highScore.length; i++) {
        console.log("HighScore" + (i+1) + " is:\n" + highScore[i].name, '\n', highScore[i].score);
        console.log("---------");
      }
      console.log("**Please note we are only showing last 2 High Scores**")
    }