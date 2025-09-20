import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const HomeLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />

        <main className="flex-1 mt-20">
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default HomeLayout;
