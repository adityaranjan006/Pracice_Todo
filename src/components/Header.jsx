import React from "react";

const Header = (props) => {
  return (
    <div className="flex w-full bg-slate-500 justify-center gap-10 p-6">
      <div className="flex">
        <span className="font-bold">ToDo Application Js Practice</span>
      </div>
      <div className="flex">
        <ul className="flex flex-row gap-2 text-white">
          <li>
            <a href="https://adityaranjanportfolio.netlify.app/">About : <span className="text-black font-bold">{props.name}</span></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
