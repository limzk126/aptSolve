import React from 'react';

// eslint-disable-next-line react/prop-types
const Comments = ({ comments, onCommentsChanged, textColor }) => {
  return (
    <div className="mt-4">
      <label className={`${textColor} dark:text-gray-200`}>Comments</label>
      <textarea
        type="textarea"
        className="block w-full px-4 py-2 mt-2 text-white bg-black border rounded-md dark:bg-gray-800 dark:border-gray-600"
        value={comments}
        onChange={onCommentsChanged}
      ></textarea>
    </div>
  );
};

export default Comments;
