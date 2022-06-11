import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Letter, Row, Tile } from "../types";

// 1       [1, 2, 3]
//returns true if item is in array
function includes<T>(item: T, array: T[]): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) return true;
  }
  return false;
}

//checks to see if the guessedn whether or not the word, specifically each character of that word, exist in the final answer. Returns the state of each tile.
function generateRow(guess: Letter[], answer: Letter[]): Tile[] {
  // B L O C K - S T E A K
  // when the letter is not in the answer (black)
  // when the letter is in the answer, but not in the right position
  // when the letter is in the answer, and is in the correct position

  let returnArray: Tile[] = [];
  for (let i = 0; i < guess.length; i++) {
    let currentGuessLetter = guess[i];
    let currentAnswerLetter = answer[i];

    if (currentGuessLetter === currentAnswerLetter) {
      returnArray.push([currentGuessLetter, "Green"]);
      //console.log(currentGuessLetter, "Green");
    } else if (includes(currentGuessLetter, answer)) {
      returnArray.push([currentGuessLetter, "Yellow"]);
      // console.log(currentGuessLetter, "Yellow");
    } else {
      returnArray.push([currentGuessLetter, "Black"]);
      // console.log(currentGuessLetter, "Black");
    }
  }

  return returnArray;
}

const Home: NextPage = () => {
  return (
    <pre>
      {JSON.stringify(
        generateRow(
          "BLOCK".split("") as Letter[],
          "STELK".split("") as Letter[]
        ),
        null,
        2
      )}
    </pre>
  );
};

export default Home;
