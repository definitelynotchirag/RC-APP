import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "../../landing-animations.css";

export default function Landing() {
    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/bg3.jpeg')" }}
        >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg transition-all duration-500 animate-slide-down">
                    Welcome to <span className="text-blue-500 "> ChatX</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-slow">
                    Connect, chat, and share moments instantly. Experience seamless real-time messaging with a
                    beautiful, minimal interface.
                </p>
                <Link
                    to="/signup"
                    className="inline-flex items-center px-6 py-3 bg-white/90 hover:bg-white text-black font-semibold rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 animate-pop"
                >
                    Get Started
                    <ArrowRightIcon className="w-6 h-6 ml-2" />
                </Link>
            </main>
            <footer className="absolute bottom-4 w-full flex justify-center z-10 animate-fade-in-slow">
                <span className="text-gray-300 text-sm">© {new Date().getFullYear()} RC-APP. All rights reserved.</span>
            </footer>
        </div>
    );
}
