import { Description } from "@headlessui/react";
import { Carousel } from "@material-tailwind/react";

export function Banner() {
  const slidersData = [
    {
      title: "Funding Innovation",
      description:
        "Empowering breakthrough projects through community contributions, making groundbreaking ideas a reality.",
      image:
        "https://i.ibb.co.com/qyqPCGV/Crowdfunding-for-Startups-What-It-Is-How-It-Works-02-png.webp",
      id: 1,
    },
    {
      title: "Digital Contributions",
      description:
        "Highlighting the ease of supporting causes through online platforms, making financial contributions accessible to everyone.",
      image: "https://i.ibb.co.com/0VT9nmW/istockphoto-1401461124-612x612.jpg",
      id: 2,
    },
    {
      title: "Teamwork and Collaboration",
      description:
        "Illustrating the power of teamwork and joint efforts in driving projects towards success through collaborative crowdfunding.",
      image:
        "https://i.ibb.co.com/PYbn1gJ/banner-onderzoeksprogramma-kictopuphumancapital.jpg",
      id: 3,
    },
    {
      title: "Sustainable Initiatives",
      description:
        "Promoting environmentally friendly projects and personal causes that benefit from community funding.",
      image: "https://i.ibb.co.com/Yyd8Kv8/crowdfunding.jpg",
      id: 4,
    },
  ];
  return (
    <Carousel className=" rounded-xl relative 2xl:h-[550px] h-[480px] w-full dark:ring-1 ring-mySecondery ring-offset-8 ring-offset-sunset">
      {slidersData.map((slider) => {
        return (
          <div className="h-full relative " key={slider.id}>
            <img
              src={slider.image}
              alt={`image ${slider.id}`}
              className="h-full w-full object-cover md:brightness-75 brightness-50"
            />
            <div className="absolute   top-1/2 z-10 mx-auto md:w-10/12 w-8/12 text-light-green-50 left-1/2 -translate-x-1/2 -translate-y-1/2  text-left">
              <h2 className="text-3xl font-bold">{slider.title}</h2>
              <p className="sm:text-lg text-sm md:w-4/5 my-2 ">
                {slider.description}
              </p>
              <button className="bg-mySecondery  hover:bg-[#33aa57ce]  font-bold rounded-md md:px-4 px-2 md:py-2 py-1 text-lg ">
                Get Start
              </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90  to-transparent  md:flex hidden"></div>
          </div>
        );
      })}
    </Carousel>
  );
}
