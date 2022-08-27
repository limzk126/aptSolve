import React from 'react';
import ProblemForm from './problemForm/problemForm';
import Header from './header';

const Create = () => {
  return (
    <>
      <Header />
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <ProblemForm textColor="text-white" isEdit={false} />
      </section>
    </>
  );
};

export default Create;
