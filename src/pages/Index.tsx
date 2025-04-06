
import React from "react";
import { VotingProvider, useVoting } from "../context/VotingContext";
import Header from "../components/Header";
import LoginScreen from "../components/LoginScreen";
import QrScanScreen from "../components/QrScanScreen";
import BiometricScreen from "../components/BiometricScreen";
import BallotScreen from "../components/BallotScreen";
import ConfirmationScreen from "../components/ConfirmationScreen";
import SuccessScreen from "../components/SuccessScreen";

const VotingMachine: React.FC = () => {
  const { currentStep } = useVoting();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      
      <main className="eci-container">
        {currentStep === "login" && <LoginScreen />}
        {currentStep === "qrScan" && <QrScanScreen />}
        {currentStep === "biometric" && <BiometricScreen />}
        {currentStep === "ballot" && <BallotScreen />}
        {currentStep === "confirmation" && <ConfirmationScreen />}
        {currentStep === "success" && <SuccessScreen />}
      </main>
      
      <footer className="bg-eci-navy text-white py-3 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm">
          <p>Secure Electronic Voting System • Election Commission of India</p>
          <p className="text-xs text-gray-400 mt-1">
            This system operates completely offline for maximum security
          </p>
        </div>
      </footer>
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
