import { useState } from "react";
import "./App.css";

function Cell({ letter, status }) {
  return (
    <div className={`cell ${status}`}>
      {letter}
    </div>
  );
}

function Row({ word, secretWord }) {
  return (
    <div className="row">
      {[0, 1, 2, 3, 4].map((index) => (
        <Cell
          key={index}
          letter={word[index]}
          status={
            word
              ? getLetterStatus(
                  word[index],
                  index,
                  secretWord
                )
              : ""
          }
        />
      ))}
    </div>
  );
}

function getLetterStatus(letter, index, secretWord) {
  if (secretWord[index] === letter) {
    return "correct";
  }

  if (secretWord.includes(letter)) {
    return "present";
  }

  return "absent";
}

function App() {
  const [guesses, setGuesses] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [currentGuess, setCurrentGuess] = useState("");
  const [currentRow, setCurrentRow] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const secretWord = "TERMO";

  function submitGuess() {
      if (gameOver) {
        return;
      }

    if (currentGuess.length !== 5) {
      alert("Digite uma palavra com 5 letras");
      return;
    }

    const newGuesses = [...guesses];

    newGuesses[currentRow] = currentGuess;

    setGuesses(newGuesses);

    if (currentGuess === secretWord) {
      setGameOver(true);
      alert("🎉 Você venceu!");
    }

    if (
      currentRow === 5 &&
      currentGuess !== secretWord
    ) {
      alert(
        `😢 Você perdeu! A palavra era ${secretWord}`
      );
    }

    setCurrentRow(currentRow + 1);

    setCurrentGuess("");
  }

  return (
    <>
      <h1>Termo React</h1>

      {guesses.map((guess, index) => (
        <Row
          key={index}
          word={guess}
          secretWord={secretWord}
        />  
      ))}

      <input
        disabled={gameOver}
        type="text"
        maxLength="5"
        value={currentGuess}
        onChange={(e) =>
          setCurrentGuess(e.target.value.toUpperCase())
        }
      />

      <button
        disabled={gameOver}
        onClick={submitGuess}
      >
        Enviar
      </button>

 
      <button onClick={resetGame}>
        Novo Jogo
      </button>

    </>
  );

}

export default App;