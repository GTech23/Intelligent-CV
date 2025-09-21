import { Link } from "react-router-dom";
import SupportButton from "../../components/ui/SupportButton";
const Login = () => {
  return (
    <div>
      <title>Intelligent CV | Dashboard</title>
      <div className="bg-white p-3">
        <Link to="/" className="text-2xl font-light text-[#EA723C]">
          Intelligent <span className="font-bold">CV</span>
        </Link>
      </div>
      <div className="min-h-[90vh] bg-cyan-50 p-6">
        <div className=" flex w-full h-full items-center justify-center">
          <div className=" max-w-lg w-full min-h-50 p-4">
            <h2 className="text-3xl mb-8 text-center font-bold">
              Access your account
            </h2>
            <form action="#">
              <div className="mb-4">
                <input
                  type="email"
                  className="py-2 text-lg px-4 border-1 border-zinc-500 w-full rounded-md bg-white"
                  placeholder="Email"
                  required
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="py-2 px-4 border-1 text-lg border-zinc-500 w-full rounded-md bg-white"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input
                    className="inline-block p-3 w-4 h-4 accent-[#EA723C]"
                    type="checkbox"
                    id="remember-me"
                  />
                  <label htmlFor="remember-me">Remember me</label>
                </div>

                <Link
                  to="/dashboard/app/account/forgot-password"
                  className="text-sm underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div>
                <button className="bg-[#EA723C] rounded-lg cursor-pointer py-3 px-8 w-full my-6 text-white font-semibold text-lg">
                  Log in
                </button>
              </div>
              <p className=" text-md font-semibold text-center text-[#EA723C]">
                Don't have an account?{" "}
                <Link to="/dashboard/app/account/create" className="underline">
                  Create one
                </Link>
              </p>
              <p className="my-2 text-md text-center text-neutral-600">
                By clicking on "Log in" you agree to our{" "}
                <Link to="/terms" className="underline">
                  Terms & conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
            <SupportButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
