import { useState } from "react";
import { toast } from "react-toastify";

const BACKEND_BASE = "https://intelligent-cv-backend.onrender.com";

const Settings = () => {
  // Mock State for Settings (In a real app, fetch these from DB)
  const [notifications, setNotifications] = useState({
    emailNews: true,
    jobAlerts: false,
    securityAlerts: true,
  });

  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    searchIndexing: false,
  });

  const [isDeleting, setIsDeleting] = useState(false);

  // --- Handlers ---

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    // In real app: API call to save preference would go here
    toast.info("Preference updated locally");
  };

  const handlePrivacyChange = (key) => {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }));
    toast.info("Privacy setting updated locally");
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you strictly sure? This will permanently delete your account and all created resumes. This action cannot be undone."
    );

    if (!confirmed) return;

    const doubleCheck = window.prompt('Type "DELETE" to confirm.');
    if (doubleCheck !== "DELETE") return;

    setIsDeleting(true);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BACKEND_BASE}/api/user/delete-account`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        toast.success("Account deleted successfully.");
        localStorage.clear();
        window.location.href = "/login"; // Force redirect
      } else {
        const data = await res.json();
        throw new Error(data.message || "Failed to delete account");
      }
    } catch (error) {
      toast.error(error.message);
      setIsDeleting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* --- Header --- */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">App Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage your preferences, privacy, and account status.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* 1. Notifications Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              Notifications
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <ToggleRow
              label="Marketing Newsletters"
              description="Receive updates about new features and templates."
              checked={notifications.emailNews}
              onChange={() => handleNotificationChange("emailNews")}
            />

            <ToggleRow
              label="Job Alerts"
              description="Get notified when jobs matching your resumes appear (Coming Soon)."
              checked={notifications.jobAlerts}
              onChange={() => handleNotificationChange("jobAlerts")}
            />

            <ToggleRow
              label="Security Alerts"
              description="Get notified about logins from new devices."
              checked={notifications.securityAlerts}
              onChange={() => handleNotificationChange("securityAlerts")}
            />
          </div>
        </div>

        {/* 2. Privacy Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Privacy
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <ToggleRow
              label="Public Profile"
              description="Allow others to view your shared resume links without logging in."
              checked={privacy.publicProfile}
              onChange={() => handlePrivacyChange("publicProfile")}
            />
            <ToggleRow
              label="Search Engine Indexing"
              description="Allow search engines (Google, Bing) to list your public resumes."
              checked={privacy.searchIndexing}
              onChange={() => handlePrivacyChange("searchIndexing")}
            />
          </div>
        </div>

        {/* 3. Danger Zone */}
        <div className="bg-red-50 rounded-2xl shadow-sm border border-red-100 overflow-hidden">
          <div className="p-6 border-b border-red-100 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-red-900">Danger Zone</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-red-700 mb-4">
              Deleting your account is permanent. All your resumes, cover
              letters, and personal data will be wiped immediately.
            </p>
            <button
              onClick={handleDeleteAccount}
              disabled={isDeleting}
              className="px-4 py-2 bg-white border border-red-200 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors focus:ring-2 focus:ring-red-500/20 disabled:opacity-50"
            >
              {isDeleting ? "Deleting..." : "Delete Account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Component: Toggle Switch ---
const ToggleRow = ({ label, description, checked, onChange }) => (
  <div className="flex items-center justify-between">
    <div className="pr-4">
      <h4 className="text-sm font-medium text-gray-900">{label}</h4>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>
    <button
      onClick={onChange}
      type="button"
      className={`${
        checked ? "bg-[#EA723C]" : "bg-gray-200"
      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#EA723C] focus:ring-offset-2`}
      role="switch"
      aria-checked={checked}
    >
      <span
        aria-hidden="true"
        className={`${
          checked ? "translate-x-5" : "translate-x-0"
        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
      />
    </button>
  </div>
);

export default Settings;
