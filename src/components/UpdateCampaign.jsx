import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateCampaign = () => {
  const { id } = useParams(); // Get campaign ID from the URL
  const [campaignData, setCampaignData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  // Simulate fetching campaign data
  useEffect(() => {
    // Replace this with your real API call to fetch the campaign data
    const fetchCampaign = async () => {
      const mockCampaign = {
        title: "Help for Education",
        url: "https://example.com/image.jpg",
        category: "Education",
        deadline: "2024-12-31T00:00:00.000Z",
        goal: 50000,
        description: "This is a campaign for education support.",
        fullname: "John Doe",
        email: "john.doe@example.com",
      };
      setCampaignData(mockCampaign);
      setStartDate(new Date(mockCampaign.deadline));
    };

    fetchCampaign();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract updated data
    const updatedCampaign = {
      url: form.url.value,
      title: form.title.value,
      category: form.category.value,
      deadline: startDate,
      goal: form.amount.value,
      description: form.description.value,
      fullname: campaignData.fullname,
      email: campaignData.email,
    };

    console.log("Updated Campaign:", updatedCampaign);

    // Add your API call to update the campaign
  };

  if (!campaignData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-6">
        <Typography variant="h4" className="font-bold">
          Update Campaign
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Modify the details of your campaign below.
        </Typography>
      </div>
      <form
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        {/* Thumbnail URL */}
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Thumbnail URL</span>
          <input
            type="text"
            name="url"
            defaultValue={campaignData.url}
            className="input input-bordered w-full mt-2"
            required
          />
        </label>

        {/* Title */}
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Title</span>
          <input
            type="text"
            name="title"
            defaultValue={campaignData.title}
            className="input input-bordered w-full mt-2"
            required
          />
        </label>

        {/* Category and Deadline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-700 font-bold">Category</span>
            <select
              name="category"
              defaultValue={campaignData.category}
              className="input input-bordered w-full mt-2"
            >
              <option value="Education">Education</option>
              <option value="Business">Business</option>
              <option value="Personal Issue">Personal Issue</option>
              <option value="Creative Idea">Creative Idea</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700 font-bold">Deadline</span>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input input-bordered w-full mt-2"
              dateFormat="yyyy/MM/dd"
              required
            />
          </label>
        </div>

        {/* Donation Amount */}
        <label className="block my-4">
          <span className="text-gray-700 font-bold">Donation Amount</span>
          <input
            type="number"
            name="amount"
            defaultValue={campaignData.goal}
            className="input input-bordered w-full mt-2"
            required
          />
        </label>

        {/* Description */}
        <label className="block my-4">
          <span className="text-gray-700 font-bold">Description</span>
          <textarea
            name="description"
            defaultValue={campaignData.description}
            className="textarea textarea-bordered w-full mt-2"
            rows="4"
            required
          ></textarea>
        </label>

        {/* Username and Email (Read-Only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-700 font-bold">Your Name</span>
            <input
              type="text"
              name="fullname"
              value={campaignData.fullname}
              className="input input-bordered w-full mt-2 bg-gray-100 cursor-not-allowed"
              readOnly
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-bold">Email Address</span>
            <input
              type="email"
              name="email"
              value={campaignData.email}
              className="input input-bordered w-full mt-2 bg-gray-100 cursor-not-allowed"
              readOnly
            />
          </label>
        </div>

        {/* Update Button */}
        <Button type="submit" color="blue" size="lg" className="w-full mt-6">
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateCampaign;
