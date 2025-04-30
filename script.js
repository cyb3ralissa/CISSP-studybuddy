let cards = [];

fetch("flashcards.json")
  .then(response => response.json())
  .then(data => {
    cards = data;
  });

function getCard() {
  const card = cards[Math.floor(Math.random() * cards.length)];
  document.getElementById("domain").textContent = card.domain;
  document.getElementById("question").textContent = card.question;
  document.getElementById("answer").textContent = card.answer;
  document.getElementById("answer").style.display = "none";
}

function showAnswer() {
  document.getElementById("answer").style.display = "inline";
}
