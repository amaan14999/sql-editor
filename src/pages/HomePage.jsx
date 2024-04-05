import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/editor");
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-8 -mt-16">
      <h1 className="heading text-7xl md:text-8xl font-extrabold tracking-tight text-goo goo-head">
        Querty
      </h1>

      <p className="text-center text-md md:text-xl px-4">
        Query, Create, Conquer: Your SQL Journey Begins Here. <br />
        Fast, Friendly, and Foolproof!
      </p>

      <button
        className="text-lg border-2 border-neutral-50 px-6 py-4 rounded-full hover:bg-neutral-50 hover:text-neutral-950 duration-200 transition-colors"
        onClick={handleClick}
      >
        Get Started
      </button>
    </div>
  );
}

export default HomePage;
