import React from "react";
import Card from "./stack/Card";

const App = () => {
  return (
    <>
      <div
        className=" w-screen h-full overflow-x-hidden min-h-screen
      bg-gradient-to-br from-black via-neutral-900 to-black"
      >
        <div className="pb-10">
          <Card />
        </div>

        <footer className="w-full fixed bottom-2 bg-transparent text-white py-2 text-center">
          <p>© 2025 Adarsh Pathania</p>

          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/Stack-Sage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-pathania177/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://adarsh-dev11.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Portfolio 
            </a>
            
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
