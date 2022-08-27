import React from 'react';

const Login = () => {
  return (
    <div className="flex bg-blue-200 w-full h-screen">
      <div className="flex flex-col ml-auto mr-auto items-center w-full h-auto lg:w-2/3 md:w-3/5">
        <h1 className="font-bold text-2xl my-10 text-white">Login</h1>
        <form className="mt-2 flex flex-col lg:w-1/3 w-8/12">
          <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white rounded mb-6 pr-10">
            <div className="flex -mr-px justify-center w-15 p-2">
              <span className="flex items-center bg-white px-3 border-0 rounded ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
            </div>
            <input
              type="text"
              className="border-0 rounded w-px flex-1 flex-shrink flex-grow relative self-center bg-white outline-none font-roboto text-xl"
              placeholder="username"
            ></input>
          </div>
          <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white rounded mb-6 pr-10">
            <div className="flex -mr-px justify-center w-15 p-2">
              <span className="flex items-center bg-white px-3 border-0 rounded ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </span>
            </div>
            <input
              type="text"
              className="flex-shrink flex-groW border-0 outline-none rounded w-px flex-1 self-center relative bg-white font-roboto text-xl"
              placeholder="password"
            ></input>
          </div>
          <a
            href="/sign-up"
            className="text-base text-white text-right font-roboto leading-normal hover:underline mb-6"
          >
            Sign Up
          </a>
          <button className="border-0 outline-none rounded p-1 bg-blue-400 text-white text-xl font-sans">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
