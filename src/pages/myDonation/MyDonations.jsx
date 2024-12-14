import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Fade } from "react-awesome-reveal";
import Loader from "../../components/Loader";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);
  const { user } = useAuth();
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://crowdcubebackend.vercel.app/myDonations/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setDonations(data);
        })
        .catch((err) => {
          err;
        })
        .finally(() => {
          setLoadingPage(false);
        });
    }
  }, [user]);

  if (loadingPage) {
    return <Loader />;
  }

  return (
    <div>
      <h2 className="text-center pb-4">My Donations</h2>
      {!donations.length ? (
        <div className="flex w-full justify-center items-center h-40">
          <h2 className="font-bold">No Donated Campaign Found!</h2>
        </div>
      ) : (
        <div>
          <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 ">
            <Fade cascade damping={0.1}>
              {donations?.map(
                (
                  { donatedCampaign: { _id, title, description, url, amount } },
                  i
                ) => (
                  <div
                    className="max-w-sm rounded overflow-hidden border dark:border-gray-800 p-3"
                    key={i}
                  >
                    <img
                      className="w-full h-48 object-cover rounded-md"
                      src={url}
                      alt={title}
                    />
                    <div className="p-2">
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
                        Donation Amount:{" "}
                        <span className="text-myPrimary  font-body text-base mb-1">
                          ${amount}
                        </span>
                      </p>
                    </div>
                  </div>
                )
              )}
            </Fade>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDonations;
