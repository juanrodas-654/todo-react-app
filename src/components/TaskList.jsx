
import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
  // (C)
  const { list, setList } = props;

  const onChangeStatus = e => {
    const { name, checked } = e.target;

    // (E)
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  // (D)
  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  // (A-2)
  const chk = list.map(item => (
    <Checkbox  key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className=" font-bold text-xl text-green-900 flex flex-col justify-center items-center">
      
      {list.length ? chk : "No tasks"}
      
      {list.length ? (
        <p>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 mt-4 px-4 rounded' onClick={onClickRemoveItem}>
            Delete
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;