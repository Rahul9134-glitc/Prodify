import { Navigate } from "react-router-dom";
import AuthNavbar from "../components/auth/AuthNavbar";
import HeroSection from "../components/auth/HeroSection";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0B1023]">
      <AuthNavbar />

      <div className="flex h-screen">
        <HeroSection />

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;