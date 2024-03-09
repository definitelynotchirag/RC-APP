import React from "react";
import GenderComponent from "./GenderComponent";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label pt-6 p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              class="input input-sm input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label pt-3 p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe69"
              class="input input-sm input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label pt-3 p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="a-very-secret-pass"
              class="input input-sm input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label pt-3 p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="again-very-secret-pass"
              class="input input-sm input-bordered input-primary w-full max-w-xs"
            />
          </div>

          {/*GENDER CHECKBOX GOES HERE*/}
          
          <GenderComponent />
          <div>
            <button class="btn btn-link p-1 hover:text-purple-300">
              Already Have An Account?
            </button>
          </div>

          <button class="btn btn-block btn-active btn-ghost">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
