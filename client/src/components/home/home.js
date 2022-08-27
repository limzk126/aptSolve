import React from 'react';
import Problem from '../problem/problem';
import Header from '../header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="min-w-screen min-h-screen bg-gray-100 flex justify-center bg-gray-100 font-sans overflow-hidden">
        <Problem />
      </div>
    </>
  );
};

export default Home;
