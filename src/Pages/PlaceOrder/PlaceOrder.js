import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const PlaceOrder = () => {
  const history = useHistory();
  const { user } = useAuth();
  const addressRef = useRef();
  const phoneRef = useRef();
  const { _id } = useParams();
  const [skooter, setSkooter] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/skooters")
      .then((res) => res.json())
      .then((data) => {
        setSkooter(data.find((pd) => pd._id == _id));
      });
  }, [_id]);

  const handleSubmitBtn = (e) => {
    const order = {
      pdName: skooter.name,
      pdPrice: skooter.price,
      pdImf: skooter.img,
      userName: user?.displayName,
      userEmail: user?.email,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
      status: "pending",
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Your order has been received by SKOOTER");
          if (alert) {
            history.push("/dashboard/myorders");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <div className="lg:flex justify-center my-12 lg:mx-20">
        <div className="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 lg:flex items-end justify-start relative">
          <section className="text-gray-600 body-font overflow-hidden px-2">
            <div className="py-12 mx-auto">
              <div className="lg:w-4/5 mx-auto flex justify-center flex-wrap">
                <>
                  <img
                    alt="ecommerce"
                    className="w-1/2 flex justify-center lg:h-full lg:h-64 object-cover rounded"
                    src={skooter.img}
                  />
                </>
                <div className="lg:w-1/2 w-full lg:pl-12 lg:pb-6 mb-6 lg:mb-0">
                  <h2 className="text-sm title-font text-red-500 tracking-widest">
                    SKOOTER
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                    {skooter.name}
                  </h1>
                  <div className="flex mb-4">
                    <a
                      href="/"
                      className="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1"
                    >
                      Description
                    </a>
                    <a
                      href="/"
                      className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                    >
                      Reviews
                    </a>
                    <a
                      href="/"
                      className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                    >
                      Details
                    </a>
                  </div>
                  <p className="leading-relaxed text-sm mb-4">
                    {skooter.Description}
                  </p>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Color</span>
                    <span className="ml-auto text-gray-900">Blue</span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Size</span>
                    <span className="ml-auto text-gray-900">Medium</span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-gray-500">Quantity</span>
                    <span className="ml-auto text-gray-900">4</span>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      $ {skooter.price}
                    </span>
                    <button className="rounded-full ml-auto w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="my-12 lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 lg:mt-3 md:mt-0 px-2">
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
              Address
            </label>
            <textarea
              ref={addressRef}
              id="address"
              name="address"
              className="w-full bg-white rounded-xl border border-red-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="relative mb-4">
            <label htmlFor="number" className="leading-7 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              ref={phoneRef}
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
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
