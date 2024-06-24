import React, { useState } from "react";
import Loginbg from "../assets/portalLoginin.png";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import spinner from "../assets/spinner.gif";
import { login } from "../api/ServerCalls";
const Portal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useUser();
  const nav = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const userInfo = {
      username,
      password,
    };
    const r = await login(userInfo);
    if (r !== null) {
      updateUser(r.user);
      nav("/dashboard");
    } else {
      setIsLoading(false);
    }

  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen"
        style={{
          backgroundImage: `url(${Loginbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center  bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <img src={spinner} alt="Loading..." />
        </div>
      )}
    </>
  );
};

export default Portal;
