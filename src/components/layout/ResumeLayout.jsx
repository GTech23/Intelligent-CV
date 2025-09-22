import TextLogo from "../../components/common/TextLogo";
import Sidebar from "../ui/Sidebar";
import { Outlet } from "react-router-dom";
const ResumeLayout = () => {
  return (
    <>
      <section className="py-6 px-0 min-h-screen">
        <div className="p-4 bg-white fixed top-0  left-0 right-0 w-full z-1000">
          <TextLogo />
        </div>

        <Sidebar />
        <div className="ml-[320px] bg-[#f3f5eb] min-h-screen  mt-10 p-8">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default ResumeLayout;
