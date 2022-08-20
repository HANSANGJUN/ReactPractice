import React from "react";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const onClick = () => {
    fetch("http://localhost:3001/days/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성완료");
        days();
      }
    });
  };
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={onClick}>Day 추가</button>
    </div>
  );
}
