import React from 'react';

const Comments = () => {
  return (
    <div className="mt-4">
      <label className="text-white dark:text-gray-200">Comments</label>
      <textarea
        type="textarea"
        className="block w-full px-4 py-2 mt-2 text-white bg-black border rounded-md dark:bg-gray-800 dark:border-gray-600"
      ></textarea>
    </div>
  );
};

export default Comments;
