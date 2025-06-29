import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
import GenderComponent from "./GenderComponent";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignUp();

    const handleCheckboxChange = gender => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async e => {
        e.preventDefault(); //Prevent the default form submission
        await signup(inputs); //Log the inputs to the console
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen m-0 p-0">
            <div className="w-full max-w-sm p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    SignUp
                    <span className="text-blue-500"> ChatX</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label pt-6 p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="input input-sm input-bordered input-primary w-full max-w-xs"
                            value={inputs.fullName} //Set the value of the input to the value of the state
                            onChange={
                                e => setInputs({ ...inputs, fullName: e.target.value }) //Set the state to the value of the input
                            }
                        />
                    </div>

                    <div>
                        <label className="label pt-3 p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="johndoe69"
                            className="input input-sm input-bordered input-primary w-full max-w-xs"
                            value={inputs.username}
                            onChange={e => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="label pt-3 p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="text"
                            placeholder="a-very-secret-pass"
                            className="input input-sm input-bordered input-primary w-full max-w-xs"
                            value={inputs.password}
                            onChange={e => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="label pt-3 p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input
                            type="text"
                            placeholder="again-very-secret-pass"
                            className="input input-sm input-bordered input-primary w-full max-w-xs"
                            value={inputs.confirmPassword}
                            onChange={e => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/*GENDER CHECKBOX GOES HERE*/}

                    <GenderComponent onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <div>
                        <Link to="/login" className="btn btn-link p-1 hover:text-purple-300">
                            Already Have An Account?
                        </Link>
                    </div>

                    <button className="btn btn-block btn-active btn-ghost" disabled={loading}>
                        {loading ? <span className="loading loading spinner"></span> : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

//STARTER SIGNUP CODE

// import React from "react";
// import { Link } from "react-router-dom";
// import GenderComponent from "./GenderComponent";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label pt-6 p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               class="input input-sm input-bordered input-primary w-full max-w-xs"
//             />
//           </div>

//           <div>
//             <label className="label pt-3 p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="johndoe69"
//               class="input input-sm input-bordered input-primary w-full max-w-xs"
//             />
//           </div>

//           <div>
//             <label className="label pt-3 p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="a-very-secret-pass"
//               class="input input-sm input-bordered input-primary w-full max-w-xs"
//             />
//           </div>

//           <div>
//             <label className="label pt-3 p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="again-very-secret-pass"
//               class="input input-sm input-bordered input-primary w-full max-w-xs"
//             />
//           </div>

//           {/*GENDER CHECKBOX GOES HERE*/}

//           <GenderComponent />
//           <div>
//             <Link
//               to="/login"
//               className="btn btn-link p-1 hover:text-purple-300"
//             >
//               Already Have An Account?
//             </Link>
//           </div>

//           <button class="btn btn-block btn-active btn-ghost">SignUp</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
