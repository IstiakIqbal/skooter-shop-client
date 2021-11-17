import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-12 font-medium text-gray-700">
              Find your favourite{" "}
              <span className="text-red-500 font-bold text-5xl">Electric </span>
              <br className="hidden lg:inline-block" />
              <span className="text-red-500 font-bold text-5xl">
                Scooter
              </span>{" "}
              here
            </h1>
            <p className="mb-12 leading-relaxed">
              Skooter Online Shop offers different kinds of electric scooter.
              You can find your favourite one. We love to see you riding on our
              scooter.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-gray-100 rounded-full text-lg">
                Find Scooters
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg">
                Contact
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0437/8761/6424/files/img-1_970x.jpg?v=1595849332"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
