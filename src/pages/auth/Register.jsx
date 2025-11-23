import { Link } from "react-router-dom";
import { useState } from "react";
import SupportButton from "../../components/ui/SupportButton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onTouched",
    defaultValues: { username: "", email: "", password: "" },
  });
  async function onSubmit(data) {
    setLoading(true);
    try {
      const response = await fetch(
        "https://intelligent-cv-backend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const payload = await response.json();
      if (payload.success) {
        toast.success(payload.message);
        reset();
        navigate("/dashboard/app/account/login", { replace: true });
      } else {
        toast.error(payload.message);
      }
    } catch (err) {
      toast.error(err.message || "An error occurred");
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
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mb-4">
                <input
                  type="text"
                  className="py-2 text-lg px-4 border-1 border-zinc-500 w-full rounded-md bg-white"
                  placeholder="Username"
                  id="username"
                  name="username"
                  aria-invalid={errors.username ? "true" : "false"}
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 8,
                      message: "Username must be at least 8 characters",
                    },
                    maxLength: {
                      value: 15,
                      message: "Username must be at most 15 characters",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="py-2 text-lg px-4 border-1 border-zinc-500 w-full rounded-md bg-white"
                  placeholder="Email"
                  id="email"
                  name="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 font-bold text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="py-2 px-4 border-1 text-lg border-zinc-500 w-full rounded-md bg-white"
                  placeholder="Password"
                  aria-invalid={errors.password ? "true" : "false"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 font-bold text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={!isValid || loading}
                  className={`bg-[#EA723C] rounded-lg py-3 px-8 w-full my-6 text-white font-semibold text-lg ${
                    loading || !isValid ? "opacity-60 cursor-not-allowed" : ""
                  }`}
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
                <Link to="/privacy" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
