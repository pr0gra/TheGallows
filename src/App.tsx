import { useEffect, useState, useCallback } from "react";
import "./index.css";

function getRandomArbitrary(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

const wordsArray = ["one", "two", "three"];

function App() {
  const [gameLifes, setGameLifes] = useState(5);
  const [randomWordArray, setRandomWordArray] = useState<string[]>([]);
  const [staticRandomWordArray, setStaticRandomWordArray] = useState<string[]>([])
  const [randomWordArrayWithSpaces, setRandomWordArrayWithSpaces] = useState<
    string[]
  >([]);
  const [currentLetter, setCurrentLetter] = useState("");

  useEffect(() => {
    console.log(randomWordArray);
    console.log(randomWordArrayWithSpaces);
  }, [randomWordArray]);

  useEffect(() => {
    if (randomWordArray !== []) {
      if (randomWordArray.includes(currentLetter)) {
        const currentIndex = randomWordArray.indexOf(currentLetter);
        randomWordArrayWithSpaces[currentIndex] = currentLetter;
        setRandomWordArray(
          randomWordArray.filter((item, index) => {
            if (index !== currentIndex) {
              return item;
            }
          })
        );

        // setRandomWordArray(randomWordArray.splice(currentIndex, 1));
      } else {
        setGameLifes(gameLifes - 1);
        console.log(gameLifes);
      }
      if (gameLifes !== 0 && randomWordArray.length === 1) {
        console.log("победа нахой");
        return;
      } else if (gameLifes === 0) {
        console.log("проебал :с");
        return;
      }
    } else {
      return;
    }
  }, [currentLetter]);

  return (
    <div>
      <div
        onClick={(e) => {
          setCurrentLetter(e.target.textContent);
        }}
        style={{
          maxWidth: "260px",
          display: randomWordArray.length !== 0 ? "block" : "none",
        }}
        className="alphavit"
      >
        <button>a</button>
        <button>b</button>
        <button>c</button>
        <button>d</button>
        <button>e</button>
        <button>f</button>
        <button>g</button>
        <button>h</button>
        <button>i</button>
        <button>j</button>
        <button>k</button>
        <button>l</button>
        <button>m</button>
        <button>n</button>
        <button>o</button>
        <button>p</button>
        <button>q</button>
        <button>r</button>
        <button>s</button>
        <button>t</button>
        <button>u</button>
        <button>v</button>
        <button>w</button>
        <button>x</button>
        <button>y</button>
        <button>z</button>
      </div>
      <button
        onClick={() => {
          let randomIndex = getRandomArbitrary(0, 2);
          let wordArray = wordsArray[randomIndex].split("");
          setRandomWordArray(wordArray);
          setStaticRandomWordArray(wordArray);
          setRandomWordArrayWithSpaces(Array(wordArray.length).fill("_"));
        }}
      >
        {randomWordArray.length === 0 ? "start" : "stop"}
      </button>
    </div>
  );
}

export default App;

// изменение стейта стринг
// как добавлять след. букву и прогонять заново код относительно неё
