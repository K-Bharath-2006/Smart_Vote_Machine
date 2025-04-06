
import React, { useState, useEffect } from "react";
import { useVoting } from "../context/VotingContext";
import { QrCode, Scan } from "lucide-react";

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
    <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto">
      <h2 className="text-xl font-bold text-eci-navy text-center mb-2">Step 1 of 4: Voter ID Verification</h2>
      <p className="text-gray-500 text-center mb-6">Please scan the QR code on your Voter ID card</p>
      
      <div className="h-2 bg-gray-100 rounded-full mb-8">
        <div 
          className="bg-eci-blue h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="qr-scanner-window mx-auto mb-6">
        {scanning && <div className="qr-scanner-line"></div>}
        {!scanning ? (
          <div className="flex items-center justify-center h-full">
            <QrCode className="h-16 w-16 text-gray-400" />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <Scan className="h-16 w-16 text-eci-blue animate-pulse" />
          </div>
        )}
      </div>
      
      {!scanning ? (
        <button
          onClick={handleScanStart}
          className="bg-eci-blue text-white py-3 px-8 rounded-md shadow-md w-full flex items-center justify-center"
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
    </div>
  );
};

export default QrScanScreen;
