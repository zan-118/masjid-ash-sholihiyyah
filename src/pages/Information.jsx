import React from "react";
import Info from "../components/Info";

const Information = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Information</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Info />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg">{/* Content for the right side, if any */}</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
