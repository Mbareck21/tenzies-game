import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import Die from "./Components/Die";
import { nanoid } from "nanoid";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
function App() {
  const [diceArray, setDiceArray] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  useEffect(() => {
    const allHeld = diceArray.every((die) => die.isHeld);
    const firstValue = diceArray[0].value;
    const allSameValue = diceArray.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [tenzies, diceArray]);
  function generatenewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  function allNewDice() {
    let newArr = [];
    for (let i = 1; i <= 12; i++) {
      newArr.push(generatenewDie());
    }
    console.log(newArr[0]);
    return newArr;
  }

  function rollDice() {
    setDiceArray((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generatenewDie();
      })
    );
  }
  function holdDice(id) {
    setDiceArray((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  function newGame() {
    console.log("new game");
    setDiceArray(allNewDice);
    setTenzies(false);
  }
  return (
    <Container style={{ background: "#0B2434" }} className="rounded  my-5 p-3 ">
      <div
        style={{ background: "F5F5F5", height: "400px" }}
        className="w-100 rounded bg-light p-3 "
      >
        {tenzies && <Confetti />}

        <h1 className="text-center">Tenzies</h1>
        <p className="text-center">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>

        <Die data={diceArray} onHold={holdDice} />
        <div className="d-flex justify-content-center">
          <Button
            size="lg"
            variant="dark"
            onClick={tenzies ? newGame : rollDice}
          >
            {tenzies ? " New Game" : " Roll"}
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
