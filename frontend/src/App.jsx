import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
    const { authUser } = useAuthContext();

    return (
        <div className="p-0 h-screen w-screen">
            <Routes>
                <Route path="/" element={authUser ? <Home /> : <Landing />} />
                <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
                <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
            </Routes>
            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    );
}

export default App;
