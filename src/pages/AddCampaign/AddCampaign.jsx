import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Ensure the CSS is imported

function AddCampaign() {
  const [startDate, setStartDate] = useState(new Date());

  const handlerSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const url = form.url.value;
    const title = form.title.value;
    const category = form.category.value;
    const amount = parseInt(form.amount.value);
    const description = form.description.value;
    const fullname = form.fullname.value;
    const email = form.email.value;

    if (!startDate) {
      alert("Please select a deadline.");
      return;
    }

    const newCampaign = {
      title,
      description,
      url,
      amount,
      category,
      deadline: startDate,
      fullname,
      email,
    };
    console.log(newCampaign);
  };

  return (
    <div>
      <div className="flex text-center flex-col items-center">
        <h2 className="md:text-3xl text-2xl font-bold mb-2">
          Add New Campaign
        </h2>
        <p className="md:text-lg text-base sm:w-8/12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ipsa,
          ab quas odio veniam excepturi debitis adipisci sunt omnis ex.
        </p>
      </div>
      <form className="p-5 mx-auto" onSubmit={handlerSubmit}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg  dark:text-dark">
              Thumbnail URL
            </span>
          </div>
          <input
            type="text"
            placeholder="Thumbnail URL"
            className="input input-bordered w-full dark:bg-sunset dark:border-gray-600"
            name="url"
            required
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
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="personal issue">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="creative idea">Creative Idea</option>
              <option value="business">Business</option>
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
              required
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
              required
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-mySecondery mt-5 hover:bg-[#309230] text-white font-bold rounded-tl-md rounded-bl-md md:px-4 px-2 md:py-2 py-1 text-lg w-full"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCampaign;
