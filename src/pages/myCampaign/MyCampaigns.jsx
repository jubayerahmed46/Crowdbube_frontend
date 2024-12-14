import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import UpdateCampaign from "./UpdateCampaign";
import Swal from "sweetalert2";
import Loader from "../../components/Loader";

const MyCampaign = () => {
  const { user } = useAuth();
  const [campaigns, setCampaigns] = useState([]);
  const [updateCampaign, setUpdateCampaign] = useState({});
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    fetch(`https://crowdcubebackend.vercel.app/myCampaigns/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingPage(false);
      });
  }, [user]);

  const handleUpdate = (campaign) => {
    document.getElementById("my_modal_4").showModal();
    setUpdateCampaign(campaign);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete the Campaign",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowdcubebackend.vercel.app/myCampaign/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Contend-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => Swal.fire("Campaign Deleted", "", "success"));
        setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
      }
    });
  };

  if (loadingPage) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex text-center flex-col mb-6 items-center">
        <h2 className="md:text-3xl text-2xl font-bold mb-2">My Campaigns</h2>
        <p className="md:text-lg text-base sm:w-8/12">
          View and manage your added campaigns.
        </p>
      </div>
      <Card className="overflow-x-auto shadow-sm rounded-md border border-gray-300 dark:border-gray-800">
        <table className="w-full min-w-[640px] table-auto ">
          <thead className="bg-gray-200 dark:bg-myPurtiul/60 pt-5">
            <tr>
              <th className="p-4 text-left">
                <Typography className="font-bold text-gray-700 ">
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
                  Donation Amount
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
          <tbody className="dark:bg-sunset">
            {campaigns?.map((campaign) => {
              let { _id, title, category, amount, deadline } = campaign;
              return (
                <tr key={_id} className="border-b last:border-b-0">
                  <td className="p-4">
                    <Typography className=" text-gray-800 dark:text-dark">
                      {title.split(" ")[0] +
                        " " +
                        title.split(" ")[1] +
                        " " +
                        title.split(" ")[2]}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography className="text-gray-600 dark:text-dark text-sm">
                      {category}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography className="text-gray-600 dark:text-dark text-sm">
                      ${amount}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography className="text-gray-600 dark:text-dark text-sm">
                      {new Date(deadline).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => handleUpdate(campaign)}
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
              );
            })}
          </tbody>
        </table>
      </Card>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="modal-action flex-col">
            <UpdateCampaign updateCampaign={updateCampaign} />
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyCampaign;
