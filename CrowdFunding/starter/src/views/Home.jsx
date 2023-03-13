import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <div className="flex justify-center items-center my-10">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600 text-white text-xs font-medium leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
        >
          load more
        </button>
      </div>
    </>
  );
};

export default Home;
