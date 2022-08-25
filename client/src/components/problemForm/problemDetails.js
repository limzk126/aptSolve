import React from 'react';

const ProblemDetails = (prop) => {
  return (
    <div className="">
      <div>
        <label className={`block mr-4 ${prop.textColor} dark:text-gray-200`}>
          Problem title
        </label>
        <input
          className={`w-full block border-none rounded-lg mr-4 appearance-none py-3 px-3 bg-black placeholder-white-500 text-white`}
          type="text"
          value={prop.title}
          onChange={prop.onTitleChanged}
        ></input>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-64 mr-4">
          <label className={`block ${prop.textColor} dark:text-gray-200`}>
            Solved yourself?
          </label>
          <select
            className={`block border-none w-full rounded-lg py-3 px-3 pr-8 bg-black placeholder-white-500 text-white`}
            id="solved-yourself"
            value={prop.yourself}
            onChange={prop.onYourselfChanged}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="w-64">
          <label className={`block ${prop.textColor} dark:text-gray-200`}>
            Difficulty
          </label>
          <select
            className="block border-none w-full rounded-lg py-3 px-3 pr-8 bg-black placeholder-white-500 text-white"
            id="solved-yourself"
            value={prop.difficulty}
            onChange={prop.onDifficultyChanged}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetails;
