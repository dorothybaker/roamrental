import React from "react";
import CountUp from "react-countup";

import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import { HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative text-white bg-black">
      <div className="sm:p-5 py-5 px-3 max-w-7xl w-full mx-auto flex items-end justify-between gap-5 md:flex-nowrap flex-wrap">
        <div className="flex items-start flex-col justify-center gap-7 md:flex-1">
          <div className="relative z-[1]">
            <div className="h-9 w-9 rounded-full bg-gradient-to-l from-orange-300 to-orange-400 absolute right-[10%] -top-3 -z-10" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className="lg:text-5xl md:text-4xl text-3xl font-semibold leading-tight"
            >
              Discover the most suitable property!
            </motion.h1>
          </div>
          <div className="text-white/60">
            <p>Find a place to stay at an amazing price.</p>
            <p>
              RoamRental, a collection of properties that suit your need! We
              save you all the stress.
            </p>
          </div>
          <a
            className="p-2 rounded-xl border flex items-center gap-1 bg-white w-full lg:w-[70%]"
            href="/properties"
          >
            <div>
              <HiLocationMarker className="text-blue-600" size={20} />
            </div>
            <input
              type="text"
              className="w-full border-none outline-none focus:outline-none text-black text-[15px] placeholder-gray-600"
              placeholder="Search by title/city/country..."
            />
            <button className="text-white font-medium px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl transition-all ease-in-out hover:scale-105">
              Search
            </button>
          </a>
          <div className="flex lg:w-[70%] w-full justify-between sm:gap-3 gap-1.5">
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-2xl font-semibold flex gap-[2px] items-center">
                <CountUp
                  start={8000}
                  end={9000}
                  duration={5}
                  className="poppins"
                />
                <span className="text-orange-500">+</span>
              </span>
              <span className="lg:text-sm text-xs text-white/70 line-clamp-1">
                Premium Properties
              </span>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-2xl font-semibold flex gap-[2px] items-center">
                <CountUp
                  start={1900}
                  end={2000}
                  duration={5}
                  className="poppins"
                />
                <span className="text-orange-500">+</span>
              </span>
              <span className="lg:text-sm text-xs text-white/70 line-clamp-1">
                Happy Customers
              </span>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-2xl font-semibold flex gap-[2px] items-center">
                <CountUp start={0} end={28} className="poppins" />
                <span className="text-orange-500">+</span>
              </span>
              <span className="lg:text-sm text-xs text-white/70 line-clamp-1">
                Awards Won!
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:flex-1">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="lg:w-[27rem] md:w-[25rem] sm:h-[30rem] h-[25rem]  overflow-hidden rounded-tr-[15rem] rounded-tl-[15rem] border-4 border-white/30"
          >
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
              alt="heroBanner"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
