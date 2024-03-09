import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div className="p-4 flex h-screen items-center justify-center">
      {/* <SignUp />
      <Login /> */}
      <Home />
    </div>
  );
}

export default App;
