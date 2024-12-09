import React, { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
const campaignsData = [
  {
    title: "Urgent Medical Fund for Pediatric Heart Surgery",
    description:
      "A 6-year-old boy requires a life-saving heart surgery. Your contributions will directly cover medical expenses and post-operative care.",
    goal: 50000,
    raised: 32000,
    deadline: "2024-12-25",
    image: "https://i.ibb.co.com/r0cXqJp/maxresdefault.jpg",
    category: "Personal Needs",
  },
  {
    title: "Documentary Production: The Reality of Climate Change",
    description:
      "Support the production of a groundbreaking documentary aimed at raising global awareness about the catastrophic impact of climate change.",
    goal: 40000,
    raised: 19000,
    deadline: "2024-12-31",
    image: "https://i.ibb.co.com/c3hmjQm/trang-17-forum-1jpg09273231.jpg",
    category: "Creative Ideas",
  },
  {
    title: "Seed Funding for Sustainable Food Packaging Startup",
    description:
      "Help us revolutionize food packaging with eco-friendly solutions that promote sustainability and reduce environmental impact.",
    goal: 70000,
    raised: 45000,
    deadline: "2025-01-10",
    image: "https://i.ibb.co.com/jZRC60N/images-2.jpg",
    category: "Startups",
  },
  {
    title: "Flood Relief Campaign: Rebuilding Lives and Communities",
    description:
      "Join hands to provide emergency shelter, food, and medical assistance to families displaced by recent floods.",
    goal: 60000,
    raised: 39000,
    deadline: "2024-12-20",
    image: "https://i.ibb.co.com/cFzGQZK/flood-victims.jpg",
    category: "Personal Needs",
  },
  {
    title: "Sci-Fi Short Film: Exploring the Future of AI",
    description:
      "Be part of an exciting journey to create a visually stunning sci-fi short film that delves into the possibilities of artificial intelligence.",
    goal: 30000,
    raised: 17000,
    deadline: "2024-12-22",
    image: "https://i.ibb.co.com/h8gk0sh/Sci-Fi.webp",
    category: "Creative Ideas",
  },
  {
    title: "Accessible Navigation App for the Visually Impaired",
    description:
      "Support the development of an innovative mobile app designed to empower visually impaired individuals with navigation assistance.",
    goal: 80000,
    raised: 54000,
    deadline: "2025-01-15",
    image: "https://i.ibb.co.com/qMswD9D/images-3.jpg",
    category: "Startups",
  },
  {
    title: "Education Drive for Underprivileged Orphans",
    description:
      "Enable orphaned children to access quality education, school supplies, and essential resources to build brighter futures.",
    goal: 25000,
    raised: 12000,
    deadline: "2024-12-18",
    image: "https://i.ibb.co.com/bzv58nJ/pict-large.jpg",
    category: "Personal Needs",
  },
  {
    title: "Art Exhibition: Empowering Local Talent",
    description:
      "Help a passionate local artist showcase their artwork in a professional exhibition to gain recognition and inspire creativity.",
    goal: 20000,
    raised: 11000,
    deadline: "2024-12-29",
    image: "https://i.ibb.co.com/sWv495f/download.jpg",
    category: "Creative Ideas",
  },
];
const RunningCanpaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [addTwo, setAddTwo] = useState(6);

  useEffect(() => {
    setCampaigns(campaignsData.slice(0, addTwo));
  }, [addTwo]);

  const showMoreCampaignHandler = () => {
    console.log(campaignsData.length);
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
      <div className="flex flex-col items-center mb-7 ">
        <h2 className="text-center md:text-3xl text-xl mb-2 font-semibold ">
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
