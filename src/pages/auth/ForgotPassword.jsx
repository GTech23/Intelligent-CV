import { Link } from "react-router-dom";
import SupportButton from "../../components/ui/SupportButton";
const ForgotPassword = () => {
  return (
    <div>
      <title>Intelligent CV | Dashboard</title>
      <div className="bg-white p-3">
        <Link to="/" className="text-2xl font-light text-[#EA723C]">
          Intelligent <span className="font-bold">CV</span>
        </Link>
      </div>
      <div className="min-h-[90vh] bg-cyan-50 p-6">
        <div className=" flex w-full h-[80vh] items-center justify-center">
          <div className=" max-w-xl bg-white w-full min-h-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl mb-3 text-center font-bold">
              Submit your forgotten password
            </h2>
            <p className="text-md mb-8">
              Enter your login email below. We will send you an email with a
              link to reset your password. Email us at support@intelligentcv.com
              if you have difficulty accessing your account.
            </p>
            <form action="#">
              <div className="">
                <input
                  type="email"
                  className="py-2 text-lg px-4 border-1 border-zinc-500 w-full rounded-md bg-white"
                  placeholder="Email"
                  required
                  id="email"
                  name="email"
                />
              </div>

              <div>
                <button className="bg-[#EA723C] rounded-lg cursor-pointer py-3 px-8 w-full my-6 text-white font-semibold text-lg">
                  Submit
                </button>
              </div>
            </form>
            <SupportButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
