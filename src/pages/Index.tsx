
import React from "react";
import { VotingProvider, useVoting } from "../context/VotingContext";
import Header from "../components/Header";
import LoginScreen from "../components/LoginScreen";
import QrScanScreen from "../components/QrScanScreen";
import BiometricScreen from "../components/BiometricScreen";
import BallotScreen from "../components/BallotScreen";
import SuccessScreen from "../components/SuccessScreen";

const VotingMachine: React.FC = () => {
  const { currentStep } = useVoting();

  return (
    <div className="flex flex-col h-screen bg-[#e8f1f8]">
      {currentStep !== "login" && <Header />}
      
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          {currentStep === "login" && <LoginScreen />}
          {currentStep === "qrScan" && <QrScanScreen />}
          {currentStep === "biometric" && <BiometricScreen />}
          {currentStep === "ballot" && <BallotScreen />}
          {currentStep === "success" && <SuccessScreen />}
        </div>
      </main>
      
      {currentStep !== "login" && (
        <footer className="bg-white text-eci-navy py-3 border-t border-gray-200 mt-auto">
          <div className="max-w-5xl mx-auto px-4 text-center text-xs">
            <p className="font-medium">Secure Electronic Voting System • Election Commission of India</p>
            <p className="text-gray-500">
              This system operates completely offline for maximum security
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <VotingProvider>
      <VotingMachine />
    </VotingProvider>
  );
};

export default Index;
