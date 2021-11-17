import React from "react";
import { useRef } from "react/cjs/react.development";

const Makeadmin = () => {
  const emailRef = useRef();
  const handleMakeAdminBtn = (e) => {
    fetch(`http://localhost:5000/allusers?email=${emailRef.current.value}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert(`${emailRef.current.value} is now an admin.`);
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="lg:flex justify-center mb-12">
        <div className="mb-12 bg-white flex flex-col md:ml-auto w-full md:py-8 lg:mt-3 md:mt-0 px-2">
          <h2 className="text-red-500 text-lg mb-1 title-font">
            Make admin of your website
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Enter the email address you want to make admin
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              ref={emailRef}
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded-full border border-red-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleMakeAdminBtn}
            className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded-full text-lg"
          >
            Make Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Makeadmin;
