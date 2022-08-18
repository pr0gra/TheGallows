import { useEffect, useState } from "react";

function App() {
  let wordsArray = [
    { id: 1, question: "why", answer: "otvet" },
    { id: 2, question: "what", answer: "takiedela" },
  ];

  const [gameMistakes, setGameMistakes] = useState(0);
  const [randomWord, setRandomWord] = useState("");
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [currentLetter, setCurrentLetter] = useState("");

  useEffect(() => {
    if (gameIsStarted) {
      const gameElement = getRandomWord();
      const gameWord = gameElement.answer
      console.log(gameWord)
      setRandomWord(gameWord);
      console.log(randomWord);
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

  function changeLetter(event: any) {
    event.preventDefault();
    console.log(event.target.letter.value);
    setCurrentLetter(() => event.target.letter.value);
    console.log(currentLetter);
  }

  return (
    <div>
      <form onSubmit={(event) => changeLetter(event)}>
        <input
          style={{ width: "100px" }}
          name="letter"
          maxLength={1}
          type="text"
         // onChange={}
        />
        <input type="submit" value={"Отправить"} />
      </form>
      <button onClick={() => setGameIsStarted((current: boolean) => !current)}>
        Start
      </button>
    </div>
  );
}

export default App;
