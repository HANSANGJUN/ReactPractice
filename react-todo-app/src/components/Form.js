import React from "react";

export default function Form({ setTodoData, setValue, value }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    //새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기

    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="flex pt-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        placeholder="해야 할 일을 입력하세요"
        value={value}
        onChange={handleChange}
      />

      <input
        className="p-2 text-blu-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        type="submit"
        value="입력"
      />
    </form>
  );
}
