import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function MainLayout() {
  return (
    <>
      <Nav />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, illum
      eveniet vero aspernatur alias et libero, ex nemo, veritatis laudantium
      quas dignissimos. Id minus tempore unde dolorem numquam ad quaerat
      suscipit, eaque atque illum modi rerum dolores, dicta facere consequatur.
      <Outlet />
      <div>Footer</div>
    </>
  );
}

export default MainLayout;
