

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});


// destination container
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

// blogs container
ScrollReveal().reveal(".blogs__card", {
  duration: 1000,
  interval: 400,
});


// quiz.................

const quizData = [
  {
    question: "What is the capital of Bangladesh?",
    answers: ["Dhaka", "Chittagong", "Rajshahi", "Sylhet"],
    correctAnswer: 0
  },
  {
    question: "Which is the largest sea beach in Bangladesh?",
    answers: ["Cox's Bazar", "Saint Martin's Island", "Kuakata", "Patenga"],
    correctAnswer: 0
  },
  {
    question: "Which river is known as the lifeline of Bangladesh?",
    answers: ["Padma", "Jamuna", "Meghna", "Karnaphuli"],
    correctAnswer: 0
  },
  {
    question: "Which city is known as the 'City of Mosques'?",
    answers: ["Dhaka", "Chittagong", "Rajshahi", "Sylhet"],
    correctAnswer: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionData = quizData[currentQuestionIndex];
  document.getElementById("question-text").innerText = questionData.question;

  const answerButtons = document.querySelectorAll(".answer-btn");
  answerButtons.forEach((button, index) => {
    button.innerText = questionData.answers[index];
  });

  document.getElementById("feedback").innerText = "";
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selectedIndex) {
  const questionData = quizData[currentQuestionIndex];

  const feedbackElement = document.getElementById("feedback");
  const nextButton = document.getElementById("next-btn");

  if (selectedIndex === questionData.correctAnswer) {
    feedbackElement.innerText = "Correct!";
    feedbackElement.style.color = "green";
    score++;
  } else {
    feedbackElement.innerText = "Wrong Answer!";
    feedbackElement.style.color = "red";
  }

  // Disable all answer buttons after one answer is selected
  const answerButtons = document.querySelectorAll(".answer-btn");
  answerButtons.forEach(button => {
    button.disabled = true;
  });

  nextButton.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
      button.disabled = false;
    });
  } else {
    showResult();
  }
}

function showResult() {
  const quizResult = document.getElementById("quiz-result");
  quizResult.innerHTML = `<h2>You scored ${score} out of ${quizData.length}</h2>`;
  document.getElementById("quiz").style.display = "none";
}

window.onload = loadQuestion;
