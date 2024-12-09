import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ErrPage() {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <main className="grid min-h-full place-items-center dark:bg-sunset bg-winter px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-myPrimary text-2xl">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold dark:text-dark tracking-tight  sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium  dark:text-dark sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => navigate(-1)}
              className=" bg-myPrimary hover:bg-[#ff5708ce] text-white/90 font-bold rounded-md md:px-4 px-2 md:py-2 py-1 text-lg "
            >
              Go back home
            </button>
            <button
              title="features coming soon"
              className=" bg-mySecondery hover:bg-mySecondery/90 text-white/90 font-bold rounded-md md:px-4 px-2 md:py-2 py-1 text-lg "
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
