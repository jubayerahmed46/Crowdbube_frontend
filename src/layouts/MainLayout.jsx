import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Nav />
      <div className=" dark:bg-sunset bg-winter dark:*:text-dark text-light">
        <div className="container mx-auto p-3   min-h-80">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
