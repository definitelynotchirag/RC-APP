import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500 "> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label pt-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-18"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-18"
            />
          </div>

          {/* <a
            href="#"
            className="text-sm pt-3 pb-3 hover:underline hover:text-blue-600 nt-2 inline-block"
          >
            {"Don't"} Have An Account?
          </a> */}
          <div>

          <button class="btn btn-link p-1 hover:text-purple-300">Don't Have An Account?</button>
          </div>

          <div>
            <button className="btn btn-block nt-2 btn-active btn-ghost">Login</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
