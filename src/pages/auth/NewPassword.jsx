import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const NewPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef(null);

  const resetToken = localStorage.getItem("resetToken");

  const handleResetPassword = async () => {
    const password = passwordRef.current.value.trim();
    if (!password) {
      toast.error("Please enter a password");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "https://intelligent-cv-backend.onrender.com/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ resetToken, newPassword: password }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid reset token");
      }

      const data = await response.json();
      toast.success(data.message || "Password reset successfully");
      localStorage.removeItem("email");
      localStorage.removeItem("otp");
      localStorage.removeItem("resetToken");
      navigate("/dashboard/app/account/login");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <title>Intelligent CV | Dashboard</title>

      {/* Header */}
      <div className="bg-white p-3">
        <Link to="/" className="text-2xl font-light text-[#EA723C]">
          Intelligent <span className="font-bold">CV</span>
        </Link>
      </div>

      <div className="min-h-[90vh] bg-cyan-50 p-6">
        <div className="flex w-full h-[80vh] items-center justify-center">
          <div className="max-w-xl bg-white w-full min-h-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl mb-3 text-center font-bold">
              Enter a new password
            </h2>
            <p className="text-md mb-8 text-center">
              Kindly enter your new password to continue
            </p>

            <form onSubmit={handleResetPassword}>
              <div>
                <input
                  ref={passwordRef}
                  type="password"
                  className="py-2 text-lg px-4 border border-zinc-500 w-full rounded-md bg-white"
                  placeholder="Password"
                  required
                  id="password"
                  name="password"
                />
              </div>

              <div>
                <button
                  disabled={loading}
                  type="button"
                  onClick={handleResetPassword}
                  className={`bg-[#EA723C] rounded-lg cursor-pointer py-3 px-8 w-full my-6 text-white font-semibold text-lg ${
                    loading ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  {loading ? "Processing..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
