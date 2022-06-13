import React, { useState } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = () => {
  const [list, setList] = useState([]); // (B-1)

  // (A-2)
  const handleAddItem = addItem => {
    setList([...list, addItem]); // (B-2)
  };
  return (
    <div className="flex flex-col justify-center items-center mt-52 ">
      <h1 className="text-gray-700 font-bold text-3xl">ToDo List</h1>
      <FormTodo handleAddItem={handleAddItem} />
      {/*(C)*/}
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;