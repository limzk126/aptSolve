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

  console.log('Tabita swatoosh', difficulty);
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
      </form>
    </section>
  );
};

export default ProblemForm;
