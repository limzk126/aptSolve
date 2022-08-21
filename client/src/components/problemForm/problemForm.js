import React from 'react';
import ProblemDetails from './problemDetails';
import TimeDetails from './timeDetails';
import Comments from './comments';

const ProblemForm = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
      <form className="">
        <ProblemDetails />
        <TimeDetails />
        <Comments />
      </form>
    </section>
  );
};

export default ProblemForm;
