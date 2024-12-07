import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-3 mt-5 bg-red-200 min-h-80">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
