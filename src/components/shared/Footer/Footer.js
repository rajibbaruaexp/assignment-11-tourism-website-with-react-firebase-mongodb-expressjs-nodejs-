import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-500 p-7 mt-10">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 gap-4">
          <div className="copyright text-center text-white">
            <p>&copy; All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
