import React from "react";

const Info = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Info</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p>Jl. Raya Bogor KM 30, Cileungsi, Bogor, West Java, Indonesia</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>Phone: +62 123 456 789</p>
          <p>Email: info@masjidashsholihiyyah.com</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
