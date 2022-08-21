import React from 'react';

const ProblemDetails = () => {
  return (
    <div className="">
      <div>
        <label className="block mr-4 text-white dark:text-gray-200">
          Problem title
        </label>
        <input
          className="w-full block border-none rounded-lg mr-4 appearance-none py-3 px-3 bg-black placeholder-white-500 text-white"
          type="text"
        ></input>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-64 mr-4">
          <label className="block text-white dark:text-gray-200">
            Solved yourself?
          </label>
          <select
            className="block border-none w-full rounded-lg py-3 px-3 pr-8 bg-black placeholder-white-500 text-white"
            id="solved-yourself"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="w-64">
          <label className="block text-white dark:text-gray-200">
            Difficulty
          </label>
          <select
            className="block border-none w-full rounded-lg py-3 px-3 pr-8 bg-black placeholder-white-500 text-white"
            id="solved-yourself"
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
