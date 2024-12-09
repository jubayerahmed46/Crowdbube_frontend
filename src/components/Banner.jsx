import { Carousel } from "@material-tailwind/react";

export function Banner() {
  return (
    <Carousel className=" rounded-xl relative 2xl:h-[550px] h-[480px] w-full dark:ring-1 ring-mySecondery ring-offset-8 ring-offset-sunset">
      <div className="h-full relative ">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover md:brightness-75 brightness-50"
        />
        <div className="absolute   top-1/2 z-10 mx-auto md:w-10/12 w-8/12 text-light-green-50 left-1/2 -translate-x-1/2 -translate-y-1/2  text-left">
          <h2 className="text-3xl font-bold">Empower Ideas</h2>
          <p className="sm:text-lg text-sm md:w-4/5 my-2 ">
            {" "}
            A platform to fund dreams, ideas, and causes—connect, contribute,
            and bring projects to life. From creative ventures to personal
            needs, empower innovation and make an impact with your support.
          </p>
          <button className="bg-mySecondery  hover:bg-[#33aa57ce]  font-bold rounded-md md:px-4 px-2 md:py-2 py-1 text-lg ">
            Get Start
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90  to-transparent  md:flex hidden"></div>
      </div>
      <div className="h-full relative ">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover md:brightness-75 brightness-50"
        />
        <div className="absolute   top-1/2 z-10 mx-auto md:w-10/12 w-8/12 text-light-green-50 left-1/2 -translate-x-1/2 -translate-y-1/2  text-left">
          <h2 className="text-3xl font-bold">Empower Ideas</h2>
          <p className="sm:text-lg text-sm md:w-4/5 my-2 ">
            {" "}
            A platform to fund dreams, ideas, and causes—connect, contribute,
            and bring projects to life. From creative ventures to personal
            needs, empower innovation and make an impact with your support.
          </p>
          <button className="bg-mySecondery  hover:bg-[#33aa57ce]  font-bold rounded-md md:px-4 px-2 md:py-2 py-1 text-lg ">
            Get Start
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90  to-transparent  md:flex hidden"></div>
      </div>
      <div className="h-full relative ">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover md:brightness-75 brightness-50"
        />
        <div className="absolute   top-1/2 z-10 mx-auto md:w-10/12 w-8/12 text-light-green-50 left-1/2 -translate-x-1/2 -translate-y-1/2  text-left">
          <h2 className="text-3xl font-bold">Empower Ideas</h2>
          <p className="sm:text-lg text-sm md:w-4/5 my-2 ">
            {" "}
            A platform to fund dreams, ideas, and causes—connect, contribute,
            and bring projects to life. From creative ventures to personal
            needs, empower innovation and make an impact with your support.
          </p>
          <button className="bg-mySecondery  hover:bg-[#33aa57ce]  font-bold rounded-md md:px-4 px-2 md:py-2 py-1 text-lg ">
            Get Start
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90  to-transparent  md:flex hidden"></div>
      </div>
    </Carousel>
  );
}

//
