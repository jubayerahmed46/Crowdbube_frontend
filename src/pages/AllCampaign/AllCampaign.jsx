import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";

const TABLE_HEAD = [
  "Campaign Title",
  "Category",
  "Donation Amount",
  "Deadline",
  "Created By",
  "Actions",
];

export default function AllCampaign() {
  const [campaigns, setCampaigns] = useState([]);
  const data = useLoaderData();
  const [isSort, setIsSort] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setCampaigns(data);
    setLoadingPage(false);
  }, [data]);

  const handleSort = () => {
    ("sort");
    const sorted = [...campaigns].sort((a, b) => {
      return isSort ? a.amount - b.amount : b.amount - a.amount;
    });
    sorted;
    setCampaigns(sorted);

    if (isSort) {
      toast.success(<p className="text-sm">Sorted in ascending order</p>);
    } else {
      toast.success(<p className="text-sm">Sorted in descending order</p>);
    }

    setIsSort(!isSort);
  };

  if (loadingPage) {
    return <Loader />;
  }

  return (
    <div className="min-h-[400px]">
      <div className="flex text-center flex-col items-center">
        <h2 className=" md:text-3xl text-2xl font-bold mb-5">All Campaign</h2>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-[#ff5708ce] hover:bg-myPrimary text-white rounded-md mb-4 font-bold md:px-4 px-2 md:py-2 py-1 text-lg "
          onClick={handleSort}
        >
          Sort By Donation Amount
        </button>
      </div>
      <Card className="h-full w-full overflow-x-auto dark:bg-sunset dark:border border-gray-800/85 shadow-sm">
        <table className="w-full min-w-[640px] table-auto text-left">
          <thead className="bg-gray-200 dark:bg-myPurtiul/60 dark:text-white">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="p-4 pt-10 text-lg">
                  <Typography className="font-bold leading-none">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {campaigns?.map(
              ({ _id, title, category, amount, deadline, email }) => {
                return (
                  <tr
                    key={_id}
                    className="border-b last:border-b-0 dark:border-gray-600 dark:text-dark"
                  >
                    <td className="p-4">
                      <Typography variant="h6" className="font-bold ">
                        {title.split(" ")[0] + " " + title.split(" ")[1]}...
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600 dark:text-dark"
                      >
                        {category}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600 dark:text-dark"
                      >
                        ${amount}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600 dark:text-dark"
                      >
                        {new Date(deadline).toLocaleDateString()}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600 text-sm dark:text-dark"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <div>
                        <Link to={`/campaign/${_id}`}>
                          <button className="bg-myPrimary hover:bg-[#ff5708ce] text-white font-bold rounded-md md:px-3 px-2 py-1 text-sm">
                            See More
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
