/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";

function UpdateCampaign({ updateCampaign, setLoadPage }) {
  const [startDate, setStartDate] = useState(new Date());
  const [currCategory, setCurrCategory] = useState("");

  useEffect(() => {
    setCurrCategory(updateCampaign?.category || "");
  }, [updateCampaign]);

  useEffect(() => {
    if (updateCampaign?.deadline) {
      const parsedDate = new Date(updateCampaign.deadline);
      if (!isNaN(parsedDate)) {
        setStartDate(parsedDate);
      }
    }
  }, [updateCampaign]);

  const { _id, url, title, amount, email, fullName, description } =
    updateCampaign;

  const submitHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const url = form.url.value;
    const title = form.title.value;
    const amount = form.amount.value;
    const category = currCategory;
    const description = form.description.value;

    const updatedCampaign = {
      url,
      title,
      amount,
      category,
      description,
      deadline: startDate.toISOString(),
    };

    fetch(`http://localhost:4601/myCampaign/update/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then(() => {
        setLoadPage(true);
        toast.success(
          <p className="text-sm">
            Campaign is updated. You can close this window.
          </p>
        );
      });
  };

  return (
    <>
      <div className="flex text-center flex-col items-center relative">
        <h2 className="md:text-3xl text-2xl font-bold mb-2">Update Campaign</h2>
      </div>
      <form method="dialog">
        <button className="bg-mySecondery rounded-full p-1 text-white hover:bg-mySecondery/95 hover:scale-105 absolute top-3 right-3 text-base">
          <FaXmark />
        </button>
      </form>
      <form className="p-5 mx-auto" onSubmit={submitHandler}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg  dark:text-dark">
              Image URL
            </span>
          </div>
          <input
            type="text"
            placeholder="Thumbnail URL"
            className="input input-bordered w-full dark:bg-sunset dark:border-gray-600"
            name="url"
            required
            defaultValue={url}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg  dark:text-dark">Title</span>
          </div>
          <input
            type="text"
            placeholder="Campaign title"
            className="input input-bordered w-full dark:bg-sunset dark:border-gray-600"
            name="title"
            required
            defaultValue={title}
          />
        </label>
        <div className="flex sm:flex-row flex-col gap-5 mt-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg  dark:text-dark">
                Category
              </span>
            </div>
            <select
              name="category"
              className="input input-bordered dark:bg-sunset dark:border-gray-600"
              required
              value={currCategory}
              onChange={(event) => setCurrCategory(event.target.value)}
            >
              <option disabled>Select Category</option>
              <option value="personal issue">Personal Issue</option>
              <option value="Startups">Startups</option>
              <option value="Creative Ideas">Creative Ideas</option>
              <option value="Business">Business</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg  dark:text-dark">
                Set Deadline
              </span>
            </div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input input-bordered w-full dark:bg-sunset dark:border-gray-600"
              dateFormat="yyyy/MM/dd"
              required
            />
          </label>
        </div>
        <label className="form-control w-full relative">
          <div className="label">
            <span className="label-text text-lg  dark:text-dark">
              Donation Amount
            </span>
          </div>
          <input
            type="number"
            name="amount"
            placeholder="Donation amount"
            className="input input-bordered w-full pl-6 dark:bg-sunset dark:border-gray-600"
            min="1"
            required
            defaultValue={amount}
          />
          <span className="absolute bottom-[10px] left-3 text-lg opacity-80">
            $
          </span>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg  dark:text-dark">
              Description
            </span>
          </div>
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered w-full dark:bg-sunset dark:border-gray-600"
            name="description"
            required
            defaultValue={description}
          />
        </label>
        <div className="flex sm:flex-row flex-col gap-5 mt-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg  dark:text-dark">
                Your Name
              </span>
            </div>
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full dark:bg-sunset dark:border-gray-600"
              name="fullname"
              readOnly
              defaultValue={fullName}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg  dark:text-dark">
                Email Address
              </span>
            </div>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="input input-bordered w-full dark:bg-sunset dark:border-gray-600"
              name="email"
              readOnly
              defaultValue={email}
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-mySecondery mt-5 hover:bg-[#309230] text-white font-bold rounded-tl-md rounded-bl-md md:px-4 px-2 md:py-2 py-1 text-lg w-full"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateCampaign;
