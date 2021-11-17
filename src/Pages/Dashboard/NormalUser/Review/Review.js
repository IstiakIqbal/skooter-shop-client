import React, { useRef } from "react";
import { useHistory } from "react-router";
import useAuth from "../../../../Hooks/useAuth";

const Review = () => {
  const history = useHistory();
  const { user } = useAuth();
  const msgRef = useRef();
  const rateRef = useRef();

  const handleSubmitBtn = (e) => {
    const review = {
      name: user?.displayName,
      message: msgRef.current.value,
      rate: parseInt(rateRef.current.value),
    };
    fetch("https://murmuring-caverns-40870.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Your review was added");
          if (alert) {
            history.push("/home");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="lg:flex justify-center mb-12">
        <div className="mb-12 bg-white flex flex-col md:ml-auto w-full md:py-8 lg:mt-3 md:mt-0 px-2">
          <h2 className="text-red-500 text-lg mb-1 title-font">
            Delivery Details
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Fill up the form with correct info to get your product delivered at
            your home
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              value={user.displayName}
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded-full border border-red-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              value={user.email}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded-full border border-red-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Review Message
            </label>
            <textarea
              ref={msgRef}
              id="address"
              name="address"
              className="w-full bg-white rounded-xl border border-red-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="relative mb-4">
            <label htmlFor="number" className="leading-7 text-sm text-gray-600">
              Rating
            </label>
            <input
              ref={rateRef}
              type="number"
              id="number"
              name="number"
              className="w-full bg-white rounded-full border border-red-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleSubmitBtn}
            className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded-full text-lg"
          >
            Add your Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
