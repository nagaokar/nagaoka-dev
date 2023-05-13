import React from "react";
import Image from "next/image";

export default function TaglineContainer() {
  return (
    <div className="flex flex-col p-8 xs:full sm:full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 xs:w-full sm:full md:translate-x-1/4 lg:translate-x-1/4 xl:translate-x-1/4 2xl:translate-x-1/4 xs:text-xl sm:text-xl md:text-xl lg:text-lg xl:text-xl 2xl:text-xl">
      <div className="flex flex-col mb-3">
        <div className="flex flex-col justify-center text-center mt-5 mb-4 xs:w-72 sm:w-72 md:w-full lg:w-full xl:w-full 2xl:w-full">
          <p className="font-bold text-xl underline decoration-2 my-2">summer 2023</p>
          <p>if you&apos;d like to hire me, i am currently able to take on:</p>
          <div className="text-center mx-8 my-3">
            <ul>
              <li className="my-1">videogame-related journalism</li>
              <li className="my-1">small web design projects (design/dev)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap font-bold justify-center align-middle text-center px-2 w-content mt-7 mb-5 xs:text-start sm:text-start md:text-center lg:text-center xl:text-center 2xl:text-center">
        <p>
          i primarily work as a phd researcher, specialising in eco-games and urban studies,
          but also practice as a computational designer, web developer, and writer.
        </p>
      </div>

      <ProfilesContainer />
    </div>
  );
}
