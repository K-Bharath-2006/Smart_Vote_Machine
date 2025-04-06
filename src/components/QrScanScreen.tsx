
import React, { useState, useEffect } from "react";
import { useVoting } from "../context/VotingContext";
import { QrCode } from "lucide-react";

const QrScanScreen: React.FC = () => {
  const { setCurrentStep, setVoterID, setVoterName } = useVoting();
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (scanning) {
      const timer = setTimeout(() => {
        // Simulate scan complete
        setScanning(false);
        setVoterID("ABCD1234XYZ");
        setVoterName("Rahul Sharma");
        setCurrentStep("biometric");
      }, 3000);

      // Progress animation
      const interval = setInterval(() => {
        setProgress(prev => (prev < 100 ? prev + 5 : prev));
      }, 150);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [scanning, setCurrentStep, setVoterID, setVoterName]);

  const handleScanStart = () => {
    setScanning(true);
    setProgress(0);
  };

  return (
    <div className="eci-card max-w-xl mx-auto mt-10">
      <h2 className="eci-heading">Step 1 of 4: Voter ID Verification</h2>
      <p className="eci-subheading">Please scan the QR code on your Voter ID card</p>
      
      <div className="eci-progress">
        <div 
          className="bg-eci-blue h-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="qr-scanner-window mb-6">
        {scanning && <div className="qr-scanner-line"></div>}
        {!scanning && (
          <div className="flex items-center justify-center h-full">
            <QrCode className="h-16 w-16 text-gray-400" />
          </div>
        )}
      </div>
      
      {!scanning ? (
        <button
          onClick={handleScanStart}
          className="eci-button"
        >
          Start Scanning
        </button>
      ) : (
        <div className="text-center text-lg text-eci-blue animate-pulse font-medium">
          Scanning QR Code...
        </div>
      )}
      
      <div className="mt-8 text-sm">
        <p className="font-medium text-center">Instructions:</p>
        <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-600">
          <li>Hold your Voter ID card with QR code facing the scanner</li>
          <li>Keep steady until scanning completes</li>
          <li>System will automatically proceed after verification</li>
        </ol>
      </div>
      
      <div className="mt-6 p-4 border border-yellow-300 bg-yellow-50 rounded text-sm text-yellow-800">
        <p className="flex items-center gap-2">
          <span className="font-medium">Note:</span> 
          Future integration with Aadhaar + Voter ID will enhance verification process
        </p>
      </div>
    </div>
  );
};

export default QrScanScreen;
