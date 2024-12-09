import { Banner } from "./homeComp/Banner";
import HowCanFund from "./homeComp/HowCanFund";
import PeopleReviws from "./homeComp/PeopleReviws";
import RunningCanpaign from "./homeComp/RunningCanpaign";

function Home() {
  return (
    <>
      <Banner />
      <RunningCanpaign />
      <HowCanFund />
      <PeopleReviws />
    </>
  );
}

export default Home;
