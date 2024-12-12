import { IoArrowBackOutline } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export function Details() {
  const campaign = useLoaderData();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handlerDonation = (donatedCampaign) => {
    const donationDetails = {
      username: user?.displayName,
      email: user?.email,
      donatedCampaign,
    };

    fetch("http://localhost:4601/donatedData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donationDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for donating",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    console.log(donationDetails);
  };

  const { title, description, amount, deadline, url } = campaign || {};

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
          src={url}
          alt={title}
          className="md:h-[30rem]  object-cover brightness-75 md:w-1/2"
        />
        <div>
          <div className="mb-4 md:text-3xl text-xl font-bold">{title}</div>
          <div>
            <div className="flex sm:flex-row flex-col font-semibold sm:justify-between md:text-lg text-base ">
              <h2>
                amount:
                <span className="text-secondary">
                  &nbsp; ${amount?.toLocaleString()}
                </span>
              </h2>
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
              onClick={() => handlerDonation(campaign)}
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
