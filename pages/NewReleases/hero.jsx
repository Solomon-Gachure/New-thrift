import AddtocartButtons from "@/component/Buttons/addtocartButtons";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <img src="/heronews.png" alt="Newestshoe" />
      </div>

      <div className="flex flex-col gap-4 max-w-xl md:max-w-lg">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Nike Air Jordan Dior
          </h2>
          <p className="text-lg text-gray-600">
            A revolutionary system that adjusts to the shape of your foot.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <h1 className="text-3xl text-orange-500 font-semibold">$350</h1>
          <AddtocartButtons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
