

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const questions = [
  {
    question: "What is the capital of France?",
    options: ["A) Paris", "B) London", "C) Berlin", "D) Madrid"],
    correct: "A"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A) Venus", "B) Mars", "C) Jupiter", "D) Saturn"],
    correct: "B"
  },
  {
    question: "What is 2 + 2?",
    options: ["A) 3", "B) 4", "C) 5", "D) 6"],
    correct: "B"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["A) Harper Lee", "B) J.K. Rowling", "C) Ernest Hemingway", "D) Mark Twain"],
    correct: "A"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["A) Atlantic", "B) Indian", "C) Arctic", "D) Pacific"],
    correct: "D"
  }
];


function startQuiz() {
  console.log("Welcome to the Trivia Quiz!");
  console.log("You have 60 seconds to answer all questions. Let's begin!\n");

  let currentQuestionIndex = 0;
  let score = 0;
  const totalQuestions = questions.length;

  
  const gameTimer = setTimeout(() => {
    console.log("\nTime's up! Game over.");
    console.log(`Your final score: ${score}/${totalQuestions}`);
    rl.close();
  }, 60000); // 60 seconds

  
  function askQuestion() {
    if (currentQuestionIndex < totalQuestions) {
      const q = questions[currentQuestionIndex];
      console.log(`Question ${currentQuestionIndex + 1}: ${q.question}`);
      
      
      q.options.map(option => console.log(option));
      
      rl.question("Your answer (A, B, C, or D): ", (answer) => {
        
        if (answer.toUpperCase() === q.correct) {
          console.log("Correct!\n");
          score++;
        } else {
          console.log(`Incorrect. The correct answer is ${q.correct}.\n`);
        }
        currentQuestionIndex++;
        askQuestion(); 
      });
    } else {
      
      clearTimeout(gameTimer);
      console.log("Quiz completed!");
      console.log(`Your final score: ${score}/${totalQuestions}`);
      rl.close();
    }
  }

  
  askQuestion();
}


startQuiz();
