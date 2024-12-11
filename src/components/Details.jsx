import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

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
    _id: 1,
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
    _id: 2,
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
    _id: 3,
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
    _id: 4,
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
    _id: 5,
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
    _id: 6,
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
    _id: 7,
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
    _id: 8,
  },
  {
    title: "Hello world",
    description: "I'm poor, help me please",
    image: "https://outu.be/Q9YaaP9hNfw?si=BB2uuflfOodNqg3f",
    goal: 50000,
    category: "personal issue",
    deadline: "2024-12-27T14:31:17.000Z",
    fullname: "Sahar Ali",
    email: "john@doe.com",
    _id: 3874,
  },
  {
    title: "Hello world",
    description: "I'm poor, help me please",
    image: "https://outu.be/Q9YaaP9hNfw?si=BB2uuflfOodNqg3f",
    goal: 50000,
    category: "personal issue",
    deadline: "2024-12-27T14:31:17.000Z",
    fullname: "Sahar Ali",
    email: "john@doe.com",
    _id: 38374,
  },
];

export function Details() {
  const params = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const d = campaignsData.find((camp) => {
      return camp._id == params.id;
    });
    setData(d);
  }, [params]);

  const handlerDonation = (donatedCampaign) => {
    const donationDetails = {
      username: user?.displayName,
      email: user?.email,
      donatedCampaign,
    };

    console.log(donationDetails);
  };

  const { title, description, goal, raised, deadline, image } = data || {};

  const remainingDays = Math.ceil(
    (new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24)
  );
  return (
    <section className="py-6 px-8">
      <button
        onClick={() => navigate(-1)}
        color="gray"
        className="  font-bold  mb-6  rounded-md md:px-6 px-3  md:py-2 py-1 md:text-3xl text-2xl hover:-ml-1"
      >
        <IoArrowBackOutline />
      </button>
      <div className="mx-auto container flex place-items-center flex-col md:flex-row gap-8">
        <img
          src={image}
          alt={title}
          className="md:h-[30rem]  object-cover brightness-75 md:w-1/2"
        />
        <div>
          <div className="mb-4 md:text-3xl text-xl font-bold">{title}</div>
          <div>
            <div className="flex sm:flex-row flex-col font-semibold sm:justify-between md:text-lg text-base ">
              <h2 className="text-mySecondery  ">
                {" "}
                Raised: $ {raised?.toLocaleString()} (
                {Math.floor((raised / goal) * 100)}%)
              </h2>
              <h2>Goal: $ {goal?.toLocaleString()}</h2>
            </div>
          </div>
          <div className="!mt-4 md:text-base text-sm font-normal leading-[27px] !text-gray-500">
            {description}
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-green-600 font-semibold"></p>
            </div>
            <p className="text-sm text-gray-500 font-semibold">
              {remainingDays > 0 ? `${remainingDays} days left` : "Ends today"}
            </p>
          </div>
          <div className="mb-4 flex  items-center gap-3 md:w-1/2 md:justify-start w-full">
            <button
              onClick={() => handlerDonation(data)}
              color="gray"
              className=" bg-mySecondery hover:bg-[#3c8f3c] text-white font-bold dark:bg-mySecondery dark:text-white/80 md:w-auto w-full dark:hover:bg-mySecondery/80 rounded-md md:px-10 px-5 md:py-2 py-1 text-lg"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
