import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-purple-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 p-10">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login
          <span className="text-blue-300 pl-4 font-bold">MyChat</span>
        </h1>

        <form>
          <div>
            <label className="label">
                <span className="text-base label-text text-gray-300">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
                <span className="text-base label-text text-gray-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>

          <Link to="/signup">Don't Have An Account</Link>

          <div className="py-4">
          <button className="btn btn-sm btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
