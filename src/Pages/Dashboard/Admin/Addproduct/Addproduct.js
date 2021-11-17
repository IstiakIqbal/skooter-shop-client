import React, { useRef } from "react";
import { useHistory } from "react-router";

const Addproduct = () => {
  const history = useHistory();
  const nameRef = useRef();
  const priceRef = useRef();
  const desRef = useRef();
  const imgRef = useRef();

  const handleSubmitBtn = (e) => {
    const review = {
      name: nameRef.current.value,
      img: imgRef.current.value,
      Description: desRef.current.value,
      price: priceRef.current.value,
    };
    fetch("https://murmuring-caverns-40870.herokuapp.com/skooters", {
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
            Product add Details
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Fill up the form with correct info to show your product in the ui
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Product Name
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded-full border border-red-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="text" className="leading-7 text-sm text-gray-600">
              Product Image-url
            </label>
            <input
              ref={imgRef}
              type="text"
              id="text"
              name="text"
              className="w-full bg-white rounded-full border border-red-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Product details
            </label>
            <textarea
              ref={desRef}
              id="address"
              name="address"
              className="w-full bg-white rounded-xl border border-red-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="relative mb-4">
            <label htmlFor="number" className="leading-7 text-sm text-gray-600">
              Product price
            </label>
            <input
              ref={priceRef}
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
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
