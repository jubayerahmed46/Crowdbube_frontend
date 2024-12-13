import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
import { useLoaderData } from "react-router-dom";

const RunningCanpaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [addTwo, setAddTwo] = useState(6);
  const campaignsData = useLoaderData();

  campaignsData;

  useEffect(() => {
    setCampaigns(campaignsData);
    setCampaigns(campaignsData.slice(0, addTwo));
  }, [addTwo]);

  const showMoreCampaignHandler = () => {
    campaignsData.length;
    if (campaignsData.length > 7) {
      setAddTwo((prev) => prev + 3);
    } else if (campaignsData.length === 7) {
      setAddTwo((prev) => prev + 2);
    } else if (campaignsData.length === addTwo) {
      setAddTwo((prev) => prev + 1);
    }
  };

  const showLessCampaignHandler = () => {
    setAddTwo(6);
  };

  return (
    <div className="mt-14 ">
      <div className="flex flex-col  mb-7 ">
        <h2 className=" md:text-3xl text-xl mb-2 font-semibold ">
          Running <span>Campaigns</span>
        </h2>
        <span className=" h-1 md:w-44 w-32 bg-mySecondery rounded-sm"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {campaigns.length > 0 ? (
          campaigns.map((campaign, index) => (
            <CampaignCard key={index} campaign={campaign} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No active campaigns at the moment. Check back later!
          </p>
        )}
      </div>
      {campaignsData.length + 1 === addTwo ? (
        <button
          onClick={showLessCampaignHandler}
          className=" bg-myPrimary hover:bg-myPrimary/70 text-white font-bold dark:bg-myPurtiul/65 dark:text-white/80 dark:hover:bg-myPurtiul/80 rounded-md md:px-4 px-2 md:py-1 py-2 text-lg"
        >
          Show Less
        </button>
      ) : (
        <button
          onClick={showMoreCampaignHandler}
          className=" bg-mySecondery hover:bg-[#246b2ece]  mr-2 text-white font-bold dark:bg-myPurtiul/65 dark:text-white/80 dark:hover:bg-myPurtiul/80 rounded-md md:px-4 text-sm px-2 md:py-1 py-2 md:text-lg"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default RunningCanpaigns;
