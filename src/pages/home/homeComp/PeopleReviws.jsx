import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ton Erling",
    feedback:
      "Great platform! Helped us to raise money for our crowdfunding project. Customer service responds quickly and accurately.",
    rating: 5,
  },
  {
    name: "Robin Wuyts",
    feedback: "First class help desk. I was helped very well and extensively!",
    rating: 5,
  },
  {
    name: "Matthijs van der Meulen",
    feedback:
      "Many donations received from unknown people! This platform really works.",
    rating: 5,
  },
];

const ReviewCard = ({ name, feedback, rating }) => (
  <div className="bg-white dark:bg-gray-600/10 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="dark:text-neutral-200 text-base mb-4 ">{feedback}</p>
    <div className="flex items-center text-lg text-center">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      <span className="ml-2 ">{rating}/5</span>
    </div>
  </div>
);

const PeopleReviws = () => (
  <div className=" mt-20">
    <div className="max-w-7xl flex justify-center flex-col items-center mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold  text-center">
        WhyDonate Happy Customers
      </h2>
      <span className=" h-1 md:w-44 w-32 bg-mySecondery mb-8 mt-2 rounded-sm mx-auto "></span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  </div>
);

export default PeopleReviws;
