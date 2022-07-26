import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
  // dummy.words
  const { day } = useParams();
  // const wordList = dummy.words.filter((word) => word.day === Number(day));

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
