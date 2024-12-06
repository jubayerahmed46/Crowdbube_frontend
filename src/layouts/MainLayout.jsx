import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <div>navBar</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
}

export default MainLayout;
