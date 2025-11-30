let questions = [
  {
    category: "From Naruto",
    question: "Who is known as Ghost of the Uchiha?",
    choices: ["Itachi","Shusui","Madara"],
    answer: "Madara",
  },
  {
    category: "From One piece",
    question: "Who is Right Hand man of Gol.D.Roger?",
    choices: ["Gaban","Rayleigh","Shanks"],
    answer: "Rayleigh",
  },
  {
    category: "From Pokemon",
    question: "Which Pokemon Does Ash Catch during Kalos?",
    choices: ["Lucario","Froakie","Heracross"],
    answer: "Froakie",
  },
  {
    category: "From Bleach",
    question: "What is Shunsui's Bankai Name?",
    choices: ["Katenkyokotsu Karamatsu Shinju","Znaka No Tachi","Kanon Biraki Benihime Aratame"],
    answer: "Katenkyokotsu Karamatsu Shinju",
  },
  {
    category: "From AOT",
    question: "Who is the Most Hated Character in AOT?",
    choices: ["King Fritz","Zeke","Gabi"],
    answer: "Gabi",
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}


// 3. Function to return a random choice from the question's choices
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}


// 4. Function to check computer's answer
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + questionObj.answer;
  }
}
