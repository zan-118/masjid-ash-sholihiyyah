import React from "react";

const Info = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Info</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4 md:mb-0">
          {" "}
          {/* Added margin bottom for small screens */}
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p>
            Dusun Karangjaya RT003 RW004, Blanakan, Blanakan, Subang, Jawa Barat
            41259
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="mb-2 md:mb-0">Phone: +62 123 456 789</p>{" "}
          {/* Added margin bottom for small screens */}
          <p>Email: info@masjidashsholihiyyah.com</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
