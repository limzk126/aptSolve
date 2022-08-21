import React from 'react';

const TimeDetails = () => {
  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-48 mr-4">
        <label className="block mr-4 text-white dark:text-gray-200">
          Thinking time
        </label>
        <input
          className="w-full block border-none rounded-lg mr-4 appearance-none py-3 px-3 bg-black placeholder-white-500 text-white"
          type="text"
        ></input>
      </div>
      <div className="w-48 mr-4">
        <label className="block mr-4 text-white dark:text-gray-200">
          Coding time
        </label>
        <input
          className="w-full block border-none rounded-lg mr-4 appearance-none py-3 px-3 bg-black placeholder-white-500 text-white"
          type="text"
        ></input>
      </div>
      <div className="w-48 mr-4">
        <label className="block mr-4 text-white dark:text-gray-200">
          Debugging time
        </label>
        <input
          className="w-full block border-none rounded-lg mr-4 appearance-none py-3 px-3 bg-black placeholder-white-500 text-white"
          type="text"
        ></input>
      </div>
      <div className="w-48">
        <label className="block mr-4 text-white dark:text-gray-200">
          Total time
        </label>
        <input
          className="w-full block border-none rounded-lg mr-4 appearance-none py-3 px-3 bg-black placeholder-white-500 text-white"
          type="text"
        ></input>
      </div>
    </div>
  );
};

export default TimeDetails;
