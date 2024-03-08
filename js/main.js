const phraseText = document.getElementById("phraseText");

const phrases = [
  {
    author: "Albert Einstein",
    text: "No poseo talentos especiales. Solo soy apasionadamente curioso.",
  },
  {
    author: "Anónimo",
    text: "Semanas de programación te pueden ahorrar horas de planeación.",
  },
  {
    author: "Alan Kay",
    text: "La mejor forma de predecir el futuro es inventarlo.",
  },
  {
    author: "Amelia Earhart",
    text: "Lo más dificil es tomar la decisión de actuar. El resto es simplemente tenacidad.",
  },
  {
    author: "Aristotle",
    text: "La calidad no es un acto, es un hábito.",
  },
  {
    author: "Benjamin Franklin",
    text: "Dímelo y lo olvidaré. Enséñamelo y lo recordaré. Involúcrame y lo aprenderé.",
  },
  {
    author: "Charles R. Swindoll",
    text: "La vida es 10% lo que te ocurre y 90% cómo reaccionas.",
  },
  {
    author: "Jane Goodall",
    text: "Lo que haces hace una diferencia. Y debes decidir si qué tipo de diferencia quieres hacer.",
  },
  {
    author: "John Muir",
    text: "El poder de la imaginación nos hace infinitos.",
  },
  {
    author: "Mark Twain",
    text: "Los dos días más importantes de tu vida son el día que naciste y el día que descubres por qué.",
  },
];

const getRandomNumber = (phrases) => Math.floor(Math.random() * phrases.length);

phraseText.textContent = phrases[0].text;
phraseText.nextElementSibling.textContent = phrases[0].author;

document.addEventListener("click", (e) => {
  if (e.target.matches("#btnPhrase")) {
    let randomNumber = getRandomNumber(phrases);

    const currentPhrase = phrases[randomNumber];

    phraseText.textContent = `"${currentPhrase.text}"`;
    phraseText.nextElementSibling.textContent = currentPhrase.author;
  }
});
