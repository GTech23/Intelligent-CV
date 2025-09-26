import { jwtDecode } from "jwt-decode";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  const userNameFromEmail = user?.email ? user.email.split("@")[0] : "User";
  const capitalizedUserName =
    userNameFromEmail.charAt(0).toUpperCase() + userNameFromEmail.slice(1);
  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">
              Welcome back, {capitalizedUserName}
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your account today.
            </p>
          </div>

          <button className="bg-[#EA723C] cursor-pointer text-white px-4 py-2 rounded">
            + Create Resume
          </button>
        </div>
      </main>
    </div>
  );
}
