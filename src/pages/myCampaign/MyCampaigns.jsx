import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";

const MyCampaign = () => {
  // Sample campaign data; replace with real data fetched from an API.
  const [campaigns, setCampaigns] = useState([
    {
      _id: 1,
      title: "Help for Education",
      category: "Education",
      goal: 10000,
      deadline: "2024-12-31",
    },
    {
      _id: 2,
      title: "Support Small Business",
      category: "Business",
      goal: 20000,
      deadline: "2024-11-30",
    },
  ]);

  const handleUpdate = (id) => {
    console.log("Update campaign with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete campaign with ID:", id);
    setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex text-center flex-col mb-6 items-center">
        <h2 className="md:text-3xl text-2xl font-bold mb-2">My Campaigns</h2>
        <p className="md:text-lg text-base sm:w-8/12">
          View and manage your added campaigns.
        </p>
      </div>
      <Card className="overflow-x-auto shadow-sm rounded-md">
        <table className="w-full min-w-[640px] table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">
                <Typography className="font-bold text-gray-700">
                  Title
                </Typography>
              </th>
              <th className="p-4 text-left">
                <Typography className="font-bold text-gray-700">
                  Category
                </Typography>
              </th>
              <th className="p-4 text-left">
                <Typography className="font-bold text-gray-700">
                  Target Amount
                </Typography>
              </th>
              <th className="p-4 text-left">
                <Typography className="font-bold text-gray-700">
                  Deadline
                </Typography>
              </th>
              <th className="p-4 text-center">
                <Typography className="font-bold text-gray-700">
                  Actions
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(({ _id, title, category, goal, deadline }) => (
              <tr key={_id} className="border-b last:border-b-0">
                <td className="p-4">
                  <Typography className="text-gray-800">{title}</Typography>
                </td>
                <td className="p-4">
                  <Typography className="text-gray-600">{category}</Typography>
                </td>
                <td className="p-4">
                  <Typography className="text-gray-600">${goal}</Typography>
                </td>
                <td className="p-4">
                  <Typography className="text-gray-600">
                    {new Date(deadline).toLocaleDateString()}
                  </Typography>
                </td>
                <td className="p-4 text-center">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleUpdate(_id)}
                      className=" bg-mySecondery hover:bg-[#3b823b] text-white font-bold rounded-md md:px-4 px-2 py-1 text-sm"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(_id)}
                      className=" bg-myPrimary hover:bg-[#ff5708ce] text-white font-bold rounded-md md:px-4 px-2 py-1 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default MyCampaign;
