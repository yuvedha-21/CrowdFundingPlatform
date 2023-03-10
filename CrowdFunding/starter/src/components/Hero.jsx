import React from "react";

const Hero = () => {
  return (
    <div className="text-center bg-white text-grey-800 py-24 px-6 ">
      <h1 className="text-5xl ms:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
        <span className="capitalize">Bring life to Creative Projects with</span>
        <br />
        <span className="uppercase text-green-600 ">Genesis</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
        >
          Add Project
        </button>
        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-green-600 text-green-600 text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:text-white"
        >
          Back Projects
        </button>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center h-20 border border-grey-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">
            {0}
          </span>
          <span>projects</span>
        </div>

        <div className="flex flex-col justify-center items-center h-20 border border-grey-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">
            {0}
          </span>
          <span>Backing</span>
        </div>

        <div className="flex flex-col justify-center items-center h-20 border border-grey-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">
            {0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
