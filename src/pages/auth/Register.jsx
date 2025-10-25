import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import SupportButton from "../../components/ui/SupportButton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  async function handleRegister() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://intelligent-cv-backend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );

      const payload = await response.json();
      setLoading(false);
      if (payload.success) {
        toast.success(payload.message);
        navigate("/dashboard/app/account/login", { replace: true });
      } else {
        toast.error(payload.details[0]);
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
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
              Create an account with us
            </h2>
            <form action="#">
              <div className="mb-4">
                <input
                  ref={usernameRef}
                  type="text"
                  className="py-2 text-lg px-4 border-1 border-zinc-500 w-full rounded-md bg-white"
                  placeholder="Username"
                  required
                  id="username"
                  name="username"
                />
              </div>
              <div className="mb-4">
                <input
                  ref={emailRef}
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
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  className="py-2 px-4 border-1 text-lg border-zinc-500 w-full rounded-md bg-white"
                  placeholder="Password"
                  required
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleRegister}
                  className="bg-[#EA723C] rounded-lg cursor-pointer py-3 px-8 w-full my-6 text-white font-semibold text-lg"
                >
                  {loading ? "Creating account..." : "Join"}
                </button>
              </div>
              <p className=" text-md font-semibold text-center text-[#EA723C]">
                Already have an account?{" "}
                <Link to="/dashboard/app/account/login" className="underline">
                  Log in
                </Link>
              </p>
              <p className="my-2 text-md text-center text-neutral-600">
                By creating an account you agree to our{" "}
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

export default Register;
