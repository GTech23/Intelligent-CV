import { toast } from "react-toastify";
import { useState, useEffect } from "react";
const BACKEND_BASE = "https://intelligent-cv-backend.onrender.com";

const DashboardProfile = () => {
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleUpdatePassword = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_BASE}/api/auth/password_update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(password),
      });
      const data = await response.json();
      {
        data.success ? toast.success(data.message) : toast.error(data.message);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      toast.error(e.message);
    }
  };

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_BASE}/api/auth/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setUserProfile(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setUserProfile([]);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#EA723C]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* --- Page Header --- */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage your profile information and security settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-orange-50 flex items-center justify-center text-[#EA723C] text-3xl font-bold mb-4 border-4 border-white shadow-sm">
              {userProfile?.data?.username?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-lg font-bold text-gray-900">
              {userProfile?.data?.username}
            </h2>
            <p className="text-sm text-gray-500">{userProfile?.data?.email}</p>

            <div className="mt-6 w-full pt-6 border-t border-gray-100 flex justify-between text-sm">
              <span className="text-gray-500">Email verification</span>
              {userProfile?.data?.isEmailVerified ? (
                <span className="font-medium text-green-900">Verified</span>
              ) : (
                <span className="font-medium text-red-500">Not verified</span>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Current Plan</h3>
              <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                {userProfile?.data?.currentPlan}
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              You are currently on the {userProfile?.data?.currentPlan} tier.
            </p>
            <button className="w-full py-2 bg-[#EA723C] hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
              Upgrade to Pro
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">
                Personal Information
              </h3>
            </div>
            <form className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={userProfile?.data?.username}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#EA723C]/20 focus:border-[#EA723C] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={userProfile?.data?.email}
                    disabled
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={true}
                  className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Change Password</h3>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  value={password.oldPassword}
                  onChange={(e) =>
                    setPassword({ ...password, oldPassword: e.target.value })
                  }
                  type="password"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#EA723C]/20 focus:border-[#EA723C] outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input
                    name="newPassword"
                    type="password"
                    id="newPassword"
                    value={password.newPassword}
                    onChange={(e) =>
                      setPassword({ ...password, newPassword: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#EA723C]/20 focus:border-[#EA723C] outline-none transition-all"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  onClick={handleUpdatePassword}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
