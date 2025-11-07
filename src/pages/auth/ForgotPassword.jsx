import { Link } from "react-router-dom";
import SupportButton from "../../components/ui/SupportButton";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState("");
  const emailRef = useRef(null);

  const handleResetPassword = async () => {
    const email = emailRef.current.value.trim();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://intelligent-cv-backend.onrender.com/api/auth/request_reset",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "OTP sent to your email");
        setShowModal(true); // ✅ show OTP modal after success
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.log(err);
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    if (!otp.trim()) {
      toast.error("Please enter your OTP");
      return;
    }

    try{
      const response = await fetch(
        "https://intelligent-cv-backend.onrender.com/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: emailRef.current.value.trim(), otp: otp.trim() }),
        }
      )
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success(data.message || "OTP verified successfully!");
        setShowModal(false);
      } else {
        toast.error(data.message || "Invalid OTP");
      }

    
    }catch(err){
      console.log(err);
      toast.error("Network error");
    }

    console.log("OTP submitted:", otp);
    toast.success("OTP submitted successfully!");
    setShowModal(false);
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
              Submit your forgotten password
            </h2>
            <p className="text-md mb-8">
              Enter your login email below. We will send you an email with a
              link to reset your password. Email us at support@intelligentcv.com
              if you have difficulty accessing your account.
            </p>

            <form method="POST">
              <div>
                <input
                  ref={emailRef}
                  type="email"
                  className="py-2 text-lg px-4 border border-zinc-500 w-full rounded-md bg-white"
                  placeholder="Email"
                  required
                  id="email"
                  name="email"
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="bg-[#EA723C] rounded-lg cursor-pointer py-3 px-8 w-full my-6 text-white font-semibold text-lg"
                >
                  {loading ? "Processing..." : "Submit"}
                </button>
              </div>
            </form>

            <SupportButton />
          </div>
        </div>
      </div>

      {/* ✅ OTP Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-transparent">
          <div className="relative bg-white w-full max-w-md p-6 rounded-lg shadow-lg border border-gray-300">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>

            <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
             One Time Password (OTP)
            </h3>
            <p className="text-sm text-gray-600 mb-3 text-center">
             Enter the OTP sent to your email to reset your password.
            </p>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full border border-gray-400 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#EA723C]"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md bg-gray-300 text-black font-semibold hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleOtpSubmit}
                className="px-4 py-2 rounded-md bg-[#EA723C] text-white font-semibold hover:bg-[#d8642c]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
