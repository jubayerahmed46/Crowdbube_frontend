import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);

  // Simulated API call to fetch donations
  useEffect(() => {
    const fetchDonations = async () => {
      // Replace this mock data with an actual API call to your database
      const mockDonations = [
        {
          _id: 1,
          title: "Support for Education",
          description:
            "A campaign to support education for under privileged children.",
          image: "https://via.placeholder.com/150",
          donatedAmount: 500,
          goal: 6000,
        },
        {
          _id: 2,
          title: "Medical Aid ",
          description: "Helping those in need of urgent medical attention.",
          image: "https://via.placeholder.com/150",
          donatedAmount: 1000,
          goal: 5000,
        },
      ];
      setDonations(mockDonations);
    };

    fetchDonations();
  }, []);

  return (
    <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 ">
      {donations.map(
        ({ _id, title, description, donatedAmount, image, goal }) => (
          <div
            className="max-w-sm rounded overflow-hidden border dark:border-gray-800 p-3"
            key={_id}
          >
            <img
              className="w-full h-48 object-cover rounded-md"
              src={image}
              alt={title}
            />
            <div className="px-6 py-4">
              <h3 className="text-lg text-nowrap hover:underline font-bold mb-2 border-l-4 border-mySecondery pl-2 rounded-sm">
                <Link to={`campaign/${_id}`}>
                  {title.split(" ")[0] + " " + title?.split(" ")[1]}
                  ...
                </Link>
              </h3>
              <p className="text-gray-700 dark:text-neutral-200/80 text-base mb-2">
                {description.slice(0, 70)}...
              </p>
              <p className="font-bold text-base mb-1">
                Donated Amount:{" "}
                <span className="text-mySecondery  font-body text-base mb-1">
                  ${donatedAmount}
                </span>
              </p>
              <p className="font-bold text-base mb-1">
                Need:{" "}
                <span className="text-myPrimary  font-body text-base mb-1">
                  ${goal}
                </span>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MyDonations;
