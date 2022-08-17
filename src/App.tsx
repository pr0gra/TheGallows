import { useState } from "react";

function App() {
  function start() {
    let wordsArray = [
      { id: 1, question: "why", answer: "because" },
      { id: 2, question: "what", answer: "takiedela" },
    ];

    const [gameProgress, setGameProgress] = useState(0);

    let word = getRandomWord();

    function getRandomArbitrary(min: number, max: number) {
      return Math.round(Math.random() * (max - min) + min);
    }

    function getRandomWord() {
      let randomId = getRandomArbitrary(1, wordsArray.length);
      let word = wordsArray.filter((word) => {
        // Кажись криво отфильтровал
        return word.id === randomId;
      });
      return word[0];
    }

    function onSubmit(letter: string) {
      if (letter.length > 1) {
        console.log("многа букв");
        return;
      }
      letter = letter.toLowerCase();
      checkLetterInAnswer(letter);
    }

    function checkLetterInAnswer(letter) {}
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let letter = event.target.querySelector("input").value;
          onSubmit(letter);
        }}
      >
        <input type="text" />
      </form>
      <button></button>
    </div>
  );
}

export default App;
