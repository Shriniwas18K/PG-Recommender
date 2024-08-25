const messages = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

let knowledgeBase;

function loadKnowledgeBase(filePath) {
  fetch(filePath)
    .then((response) => response.json())
    .then((data) => {
      knowledgeBase = data;
    })
    .catch((error) => {
      console.error("Failed to load knowledge base:", error);
    });
}

function getCloseMatches(userQuestion, questions, n = 1, cutoff = 0.5) {
  // Implement your getCloseMatches logic here
  return questions.filter(q => q.includes(userQuestion));
}

function findBestMatch(userQuestion, questions) {
  const matches = getCloseMatches(userQuestion, questions, 1, 0.5);
  return matches[0] || null;
}

function getAnswerForQuestion(question, knowledgeBase) {
  const q = knowledgeBase.questions.find((q) => q.question === question);
  return q ? q.answer : null;
}

function addMessage(message, type) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.classList.add(type);
  div.textContent = message;
  messages.appendChild(div);
}

function handleSendButtonClick() {
  const userQuestion = userInput.value.trim();
  if (userQuestion) {
    const bestMatch = findBestMatch(userQuestion, knowledgeBase.questions.map(q => q.question));
    if (bestMatch) {
      const answer = getAnswerForQuestion(bestMatch, knowledgeBase);
      if (answer) {
        addMessage(answer, "bot-message");
      } else {
        addMessage("Sorry, I don't have an answer for that.", "bot-message");
      }
    } else {
      addMessage("Sorry, I didn't understand that question.", "bot-message");
    }
    userInput.value = "";
  }
}

sendBtn.addEventListener("click", handleSendButtonClick);

loadKnowledgeBase("airline.json");
