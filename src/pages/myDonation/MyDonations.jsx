import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchDonations = async () => {
      fetch(`http://localhost:4601/myDonations/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setDonations(data);
        });
    };

    fetchDonations();
  }, [user]);

  //   {
  //     "_id": "675a3dae12b2625eacd73fec",
  //     "username": "Jubayer Ahmed",
  //     "email": "jubayerdesigner46@gmail.com",
  //     "donatedCampaign": {
  //         "_id": "67599bd48f75d43be0d192f0",
  //         "title": "Documentary Production: The Reality of Climate Change",
  //         "description": "Support the production of a groundbreaking documentary aimed at raising global awareness about the catastrophic impact of climate change.",
  //         "amount": 40000,
  //         "deadline": "2024-12-31T00:00:00.000Z",
  //         "url": "https://i.ibb.co.com/c3hmjQm/trang-17-forum-1jpg09273231.jpg",
  //         "category": "Creative Ideas",
  //         "fullName": "Jubayer Ahmed",
  //         "email": "jubayerdesigner46@gmail.com"
  //     }
  // }

  return (
    <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 ">
      {donations?.map(
        ({ donatedCampaign: { _id, title, description, url, amount } }) => (
          <div
            className="max-w-sm rounded overflow-hidden border dark:border-gray-800 p-3"
            key={_id}
          >
            <img
              className="w-full h-48 object-cover rounded-md"
              src={url}
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
                Need:{" "}
                <span className="text-myPrimary  font-body text-base mb-1">
                  ${amount}
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
