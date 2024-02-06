import React, { useState, useEffect } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { IoFilterSharp } from 'react-icons/io5';

const Home = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '') {
      fetch(`https://www.perplexity.ai/search?q=${value}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((res) => {
          setData(res);
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  console.log(value);

  return (
    <div className="h-full flex justify-center items-center flex-col rounded-lg gap-10 w-[950px] ">
      <h1 className="sukui-h1-white">Where knowledge begins</h1>
      <form
        onSubmit={handleSubmit}
        type="submit"
        className="border border-[#898788] w-3/4 h-fit rounded-lg flex-col justify-start items-start bg-[#292927]"
      >
        <textarea
          placeholder="Ask anything..."
          onChange={(e) => setValue(e.target.value)}
          className="focus:outline-none resize-none rounded-lg p-4 text-neutral-200 w-full h-full bg-[#292927] placeholder:text-[#898788] focus-within:border"
          type="text"
        />
        <div className="h-1/2 w-full flex flex-row justify-between bg-[#292927] rounded-lg">
          <div className="m-5 flex gap-5">
            <button className="text-[#898788] font-semibold flex flex-row items-center gap-2">
              <IoFilterSharp />Focus
            </button>
            <button className="text-[#898788] font-semibold flex flex-row items-center gap-2">
              <CiCirclePlus className="" />Attach
            </button>
          </div>
          <div className="flex flex-row justify-end m-5 gap-5 items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-[#898788] peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-[#1f1f1d] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#898788] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#898788] after:border-[#898788] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#898788] peer-checked:bg-[#1f1f1d]"></div>
              <span className="ms-3 text-sm font-medium text-[#898788] dark:text-[#898788]">Copilot</span>
            </label>
            <button
              type="submit"
              className="text-white bg-[#333331] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-[#333331] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
