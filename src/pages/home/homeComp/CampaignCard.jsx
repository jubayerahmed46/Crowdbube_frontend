/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function CampaignCard({ campaign }) {
  const { title, description, amount, deadline, url, _id } = campaign || {};
  const remainingDays = Math.ceil(
    (new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <Fade cascade damping={0.1}>
      <div className="max-w-sm rounded overflow-hidden border dark:border-gray-800 p-3">
        <img
          className="w-full h-48 object-cover rounded-md"
          src={url}
          alt={title}
        />
        <div className="px-6 py-4">
          <h3 className="text-lg hover:underline font-bold mb-2 border-l-4 border-mySecondery pl-2 rounded-sm">
            <Link to={""}>
              {title.split(" ")[0] + " " + title.split(" ")[1]}...
            </Link>
          </h3>
          <p className="text-gray-700 dark:text-neutral-200/80 text-base mb-4">
            {description.slice(0, 70)}...
          </p>
          <div className=" mb-4">
            <div>
              <p className="text-base text-green-600 font-semibold">
                Donation amount: ${amount?.toLocaleString()}
              </p>
            </div>
            <p className="text-sm text-gray-500 font-semibold">
              {remainingDays > 0 ? `${remainingDays} days left` : "Ends today"}
            </p>
          </div>
          <Link to={`campaign/${_id}`}>
            <button className=" bg-myPurtiul hover:bg-[#ff5708ce] text-white font-bold dark:bg-myPurtiul/65 dark:text-white/80 dark:hover:bg-myPurtiul/80 rounded-md md:px-3 px-2 md:py-1 py-1 text-sm ">
              See More
            </button>
          </Link>
        </div>
      </div>
    </Fade>
  );
}

export default CampaignCard;
