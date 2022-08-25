import React from 'react';
import { useState } from 'react';
import ProblemDetails from './problemDetails';
import TimeDetails from './timeDetails';
import Comments from './comments';
import { createProblem } from '../../reducers/problemReducer';
import { useDispatch } from 'react-redux';

const ProblemForm = ({ textColor }) => {
  const dispatch = useDispatch();

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const problem = {
      title,
      difficulty,
      think: +think,
      code: +code,
      debug: +debug,
      total: +total,
      yourself,
      comments,
    };
    console.log(problem, 'yoooo');
    dispatch(createProblem(problem));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <ProblemDetails
        title={title}
        onTitleChanged={onTitleChanged}
        difficulty={difficulty}
        onDifficultyChanged={onDifficultyChanged}
        yourself={yourself}
        onYourselfChanged={onYourselfChanged}
        textColor={textColor}
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
        textColor={textColor}
      />
      <Comments
        comments={comments}
        onCommentsChanged={onCommentsChanged}
        textColor={textColor}
      />
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-black text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default ProblemForm;
