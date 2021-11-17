import React, { useEffect, useState } from "react";
import Skooter from "../Home/Skooter.js/Skooter";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Skooters = () => {
  const [skooters, setSkooters] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-caverns-40870.herokuapp.com/skooters")
      .then((res) => res.json())
      .then((data) => setSkooters(data));
  }, []);
  return (
    <div>
      <Header />
      <section className="flex justify-center my-16">
        <p className="text-4xl font-bold text-gray-700">
          Our <span className="text-5xl text-red-500">Skooters</span> for you
        </p>
      </section>
      <section className="flex justify-center">
        <div className="lg:grid grid-cols-3 gap-12">
          {skooters.map((skooter) => (
            <Skooter key={skooter._id} skooter={skooter}></Skooter>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Skooters;
