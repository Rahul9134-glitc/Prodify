import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'

const Register = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0F172A] p-4 antialiased selection:bg-blue-500/30 selection:text-blue-200">
      <RegisterForm />
    </div>
  );
};

export default Register;