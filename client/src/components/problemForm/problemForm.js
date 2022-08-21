import React from 'react';
import { useState } from 'react';
import ProblemDetails from './problemDetails';
import TimeDetails from './timeDetails';
import Comments from './comments';

const ProblemForm = () => {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [yourself, setYourself] = useState('');
  const [think, setThink] = useState('');
  const [code, setCode] = useState('');
  const [debug, setDebug] = useState('');
  const [total, setTotal] = useState('');
  const [comments, setComments] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDifficultyChanged = (e) => setDifficulty(e.target.value);
  const onYourselfChanged = (e) => setYourself(e.target.value);
  const onThinkChanged = (e) => setThink(e.target.value);
  const onCodeChanged = (e) => setCode(e.target.value);
  const onDebugChanged = (e) => setDebug(e.target.value);
  const onTotalChanged = (e) => setTotal(e.target.value);
  const onCommentsChanged = (e) => setComments(e.target.value);

  return (
    <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
      <form className="">
        <ProblemDetails
          title={title}
          onTitleChanged={onTitleChanged}
          difficulty={difficulty}
          onDifficultyChanged={onDifficultyChanged}
          yourself={yourself}
          onYourselfChanged={onYourselfChanged}
        />
        <TimeDetails
          think={think}
          onThinkChanged={onThinkChanged}
          code={code}
          onCodeChanged={onCodeChanged}
          debug={debug}
          onDebugChanged={onDebugChanged}
          total={total}
          onTotalChanged={onTotalChanged}
        />
        <Comments comments={comments} onCommentsChanged={onCommentsChanged} />
        <div className="flex justify-end mt-6">
          <button
            type="button"
            className="bg-black text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          >
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProblemForm;
