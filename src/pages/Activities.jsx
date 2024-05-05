// Activities.js

import React from "react";

const Activities = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Galleri Kegiatan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661940975273-5ff6431cf911?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Activity 1"
            className="rounded-lg w-full"
          />
          <p className="text-center mt-2">Activity 1</p>
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661940975273-5ff6431cf911?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Activity 2"
            className="rounded-lg w-full"
          />
          <p className="text-center mt-2">Activity 2</p>
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661940975273-5ff6431cf911?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Activity 3"
            className="rounded-lg w-full"
          />
          <p className="text-center mt-2">Activity 3</p>
        </div>
        {/* Add more images and descriptions as needed */}
      </div>
    </div>
  );
};

export default Activities;
