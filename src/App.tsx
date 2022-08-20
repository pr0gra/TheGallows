import { useEffect, useState, useCallback } from "react";
import "./index.css";

function getRandomArbitrary(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function getAllIndexes(arr: string[], val: string) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}

const wordsArray = ["one", "two", "three"];

function App() {
  const [gameLifes, setGameLifes] = useState(5);
  const [randomWordArray, setRandomWordArray] = useState<string[]>([]);
  const [staticRandomWordArray, setStaticRandomWordArray] = useState<string[]>(
    []
  );
  const [randomWordArrayWithSpaces, setRandomWordArrayWithSpaces] = useState<
    string[]
  >([]);
  const [currentLetter, setCurrentLetter] = useState("");

  useEffect(() => {
    if (
      gameLifes !== 0 &&
      randomWordArray.length === 0 &&
      staticRandomWordArray.length !== 0
    ) {
      console.log("ПАБЕДА")
      setRandomWordArray([]);
      setStaticRandomWordArray([]);
      setCurrentLetter("");
      setGameLifes(5);
      return;
    }
  }, [randomWordArray]);

  useEffect(() => {
    if (gameLifes === 0) {
      console.log("праеграл :с");
      setRandomWordArray([]);
      setStaticRandomWordArray([]);
      setCurrentLetter("");
      return;
    }
  }, [gameLifes]);

  useEffect(() => {
    if (randomWordArray !== []) {
      if (randomWordArray.includes(currentLetter)) {
        const currentIndexes = getAllIndexes(
          staticRandomWordArray,
          currentLetter
        );
        const newArrayWithSpaces = randomWordArrayWithSpaces.map(
          (item, index) => {
            if (currentIndexes.includes(index)) {
              return currentLetter;
            } else if (item === "_") {
              return "_";
            }
            return item;
          }
        );
        setRandomWordArrayWithSpaces(newArrayWithSpaces);

        setRandomWordArray(
          randomWordArray.filter((item) => {
            if (item !== currentLetter) {
              return item;
            }
          })
        );
      } else if (
        !randomWordArray.includes(currentLetter) &&
        currentLetter !== ""
      ) {
        setGameLifes((gameLifes) => gameLifes - 1);
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
          setGameLifes(5);
        }}
      >
        {randomWordArray.length === 0 ? "start" : "stop"}
      </button>
      <div
        style={{
          display: randomWordArray.length !== 0 ? "flex" : "none",
          gap: '10px'
        }}
      >
        lifes:{gameLifes}
        {randomWordArrayWithSpaces.map((item, index)=>{return <div key={index}>{item}</div>})}
      </div>
      <div style={{display: gameLifes !== 0 &&
      randomWordArray.length === 0 && staticRandomWordArray.length !== 0 ? 'block':'none'}}>Победа</div>
    </div>
  );
}

export default App;

// Как-то надо вывести результат
