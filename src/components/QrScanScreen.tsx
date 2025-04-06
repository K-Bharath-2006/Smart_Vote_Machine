
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
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-eci-navy text-center mb-2">Step 1 of 4: Voter ID Verification</h2>
      <p className="text-gray-600 text-center mb-6">Please scan the QR code on your Voter ID card</p>
      
      <div className="h-2 bg-gray-200 rounded-full mb-8">
        <div 
          className="bg-blue-500 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center mb-6 bg-gray-50">
        {scanning && <div className="h-1 bg-blue-500 w-full absolute animate-pulse"></div>}
        {!scanning && (
          <div className="flex items-center justify-center h-full">
            <QrCode className="h-16 w-16 text-gray-400" />
          </div>
        )}
      </div>
      
      {!scanning ? (
        <button
          onClick={handleScanStart}
          className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-md w-full flex items-center justify-center"
        >
          Start Scanning
        </button>
      ) : (
        <div className="text-center text-lg text-blue-500 animate-pulse font-medium">
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
