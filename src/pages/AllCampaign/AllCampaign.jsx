import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_HEAD = [
  "Campaign Title",
  "Category",
  "Target Amount",
  "Deadline",
  "Created By",
  "Actions",
];

const TABLE_ROWS = [
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

export default function AllCampaign() {
  return (
    <div className="min-h-[400px]">
      <Card className="h-full w-full overflow-x-auto dark:bg-sunset dark:border border-gray-800/85 shadow-sm">
        <table className="w-full min-w-[640px] table-auto text-left">
          <thead className="bg-gray-200 dark:bg-gray-500/40 dark:text-white/50">
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
              ({ _id, title, category, goal, deadline, email }) => {
                return (
                  <tr
                    key={_id}
                    className="border-b last:border-b-0 dark:border-gray-600 dark:text-dark"
                  >
                    <td className="p-4">
                      <Typography variant="h6" className="font-bold ">
                        {title}
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
                        ${goal}
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
                        className="font-normal text-gray-600 dark:text-dark"
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
