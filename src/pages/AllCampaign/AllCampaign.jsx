import { Card, Typography } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

const TABLE_HEAD = [
  "Campaign Title",
  "Category",
  "Target Amount",
  "Deadline",
  "Created By",
  "Actions",
];

export default function AllCampaign() {
  const TABLE_ROWS = useLoaderData();
  return (
    <div className="min-h-[400px]">
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
            {TABLE_ROWS.map(
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
