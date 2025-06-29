import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();
        await login(username, password);
    };
    return (
        <div className="flex items-center justify-center min-h-screen w-screen">
            <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500 "> ChatX</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label pt-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="w-full input input-bordered h-18"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
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
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <Link to="/signup" className="btn btn-link p-1 hover:text-purple-300">
                            Don&apos;t Have An Account?
                        </Link>
                    </div>

                    <div>
                        <button className="btn btn-block nt-2 btn-active btn-ghost" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                        <small className="block text-xs text-gray-400 text-center mt-4 mb-1">
                            Test credentials:
                            <br />
                            user 1: <b>chirag58</b> pass: <b>123456</b>
                            <br />
                            user 2: <b>chirag69</b> pass: <b>123456</b>
                        </small>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
