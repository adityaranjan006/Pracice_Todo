import React, { useState } from "react";

const courses = [];

const Tasks = () => {
  const [useText, setText] = useState("");
  const [count, setCount] = useState(0);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleOnclick() {
    if(useText!=''){
      courses.push(useText);
    }
    setCount(courses.length);
    setText("");
  }

  const arrayDataItems = courses.map((item) => (
    <li className="flex w-full pt-2 pb-2 pl-2 gap-1 list-none  border-2">
      {item}
    </li>
  ));

  return (
    <>
      <section className="flex max-w-full h-100 bg-slate-900 justify-center relative">
        <div className=" flex justify-center text-xl w-full text-white m-10 relative">
          <h1>Enter the Task Here:</h1>
          <div className="flex gap-4 justify-center absolute w-full mt-20 border-none">
            <input
              className="block sm:h-12 md:h-14 lg:h-18 lg:w-8/12 relative border-sky-200 outline-blue-300 text-black"
              type="text"
              name="taskbox"
              placeholder=" Enter the task to be added"
              value={useText}
              onChange={handleChange}
            />
            <button
              className="flex p-2 relative bg-blue-300 text-md rounded-md hover:bg-blue-600 hover:transition-all duration-1000 border-sky-100"
              onClick={handleOnclick}
            >
              Add Task
            </button>
          </div>
        </div>
      </section>
      <div className="flex relative justify-around lg:top-20 sm:top-15 w-full">
        <div className="flex flex-col w-1/2">
          <h3 className="flex mb-10 justify-center">
            {count}: Tasks available
          </h3>
          <ul id="taskList" className="flex flex-col gap-1 list-none">
            {arrayDataItems}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tasks;
