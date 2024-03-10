"use client";

import type { NextPage } from "next";
import 'animate.css';
import Overview from "./_components/Overview";

const Home: NextPage = () => {  

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex h[20vh] text-4xl py-28  animate__animated gap-y-3 animate__backInDown text-center">
          Explore Composable Liquidity<br /> for Limitless Possibilities.
        </div>
        
        <Overview />
      </div>
    </>
  );
};

export default Home;