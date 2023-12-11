import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-8 -mt-16">
      <h1 class="heading text-6xl md:text-8xl font-extrabold tracking-tight text-goo goo-head">
        Querty
      </h1>

      <button className="text-lg border-2 border-neutral-50 px-6 py-4 rounded-full hover:bg-neutral-50 hover:text-neutral-900 duration-200 transition-colors">
        Get Started
      </button>
    </div>
  );
}

export default HomePage;
