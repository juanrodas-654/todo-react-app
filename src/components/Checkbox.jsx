import React, { Fragment } from "react";

const Checkbox = props => {
  // (A)
  const {
    onChange,
    data: { id, description, done }
  } = props;
  return (
    <Fragment>
      <label className='flex justify-between items-center  bg-gray-200 rounded w-[180%]'>
        
        <input
          className="h-5 w-5 text-gray-600 ml-2 "
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className=" font-bold text-xl text-black h-10 mr-2">{description}</div>
      </label>
    </Fragment>
  );
};

export default Checkbox;