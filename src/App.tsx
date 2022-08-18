import { useEffect, useState } from "react";

function App() {
  let wordsArray = [
    { id: 1, question: "why", answer: "because" },
    { id: 2, question: "what", answer: "takiedela" },
  ];

  const [gameMistakes, setGameMistakes] = useState(0);
  const [randomWord, setRandomWord] = useState("");
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [currentLetter, setCurrentLetter] = useState("")

  useEffect(() => {
    if (gameIsStarted) {
      setGameMistakes(() => gameMistakes + 1);
      console.log(gameMistakes);
    } else {
      setGameMistakes(0);
      setRandomWord("");
      setGameIsStarted(false);
    }
  }, [gameIsStarted]);

  function getRandomArbitrary(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function getRandomWord() {
    let randomId = getRandomArbitrary(1, wordsArray.length);
    let word = wordsArray.filter((word) => {
      return word.id === randomId;
    });
    return word[0];
  }

  return (
    <div>
      <input maxLength={1} type="text" />
      <button
        onClick={() => setGameIsStarted((current: boolean) => !current)}
      ></button>
    </div>
  );
}

export default App;
