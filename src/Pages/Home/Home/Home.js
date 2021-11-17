import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import Skooter from "../Skooter.js/Skooter";
import Stat from "../Stat/Stat";

const Home = () => {
  const [skooters, setSkooters] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/skooters")
      .then((res) => res.json())
      .then((data) => setSkooters(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Header />
      <Banner></Banner>
      <section className="mb-16">
        <div>
          <p className="text-4xl font-bold text-gray-700">
            Our <span className="text-5xl text-red-500">Skooters</span> for you
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="lg:grid grid-cols-3 gap-8">
          {skooters
            .map((skooter) => (
              <Skooter key={skooter._id} skooter={skooter}></Skooter>
            ))
            .slice(0, 6)}
        </div>
      </section>
      <Stat></Stat>
      <div>
        <p className="text-4xl font-bold text-gray-700">
          What Our <span className="text-5xl text-red-500">Customer</span> says
        </p>
      </div>
      <section className="lg:flex justify-center">
        <div className="my-4 lg:my-16 px-4 lg:px-32 lg:grid grid-cols-2 gap-8">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
