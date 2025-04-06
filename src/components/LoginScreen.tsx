
import React from "react";
import { useVoting } from "../context/VotingContext";
import { Lock, Shield } from "lucide-react";

const LoginScreen: React.FC = () => {
  const { setCurrentStep } = useVoting();

  const handleLogin = () => {
    setCurrentStep('qrScan');
  };

  return (
    <div className="eci-card max-w-2xl mx-auto mt-20">
      <div className="flex flex-col items-center mb-6">
        {/* ECI Logo */}
        <div className="mb-4">
          <img
            src="https://eci.gov.in/uploads/monthly_2022_10/logo.png.58b8fbde2ff5437a0b67baa2c254ddab.png"
            alt="Election Commission of India Logo"
            className="h-32"
          />
        </div>
        
        <h1 className="eci-heading text-4xl">Secure Electronic Voting System</h1>
        <p className="eci-subheading text-gray-600">
          Developed for the Election Commission of India
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg w-full mb-8 text-center">
        <p className="mb-4">This voting machine operates completely offline for maximum security.</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex justify-center mb-2">
              <Lock className="h-8 w-8 text-eci-blue" />
            </div>
            <h3 className="font-semibold mb-1">Offline Security</h3>
            <p className="text-sm text-gray-600">Protected from online attacks</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex justify-center mb-2">
              <Shield className="h-8 w-8 text-eci-blue" />
            </div>
            <h3 className="font-semibold mb-1">Secure Storage</h3>
            <p className="text-sm text-gray-600">Encrypted local database</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleLogin}
        className="eci-button text-xl py-4 px-8"
      >
        CLICK HERE TO LOGIN
      </button>

      <div className="mt-8 text-sm text-gray-500 text-center">
        <p>© {new Date().getFullYear()} Election Commission of India</p>
        <p className="mt-1">EVM System v1.0</p>
      </div>
    </div>
  );
};

export default LoginScreen;
