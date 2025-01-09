import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative flex flex-col items-center justify-center space-y-4">
        {/* Outer rotating rings */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-24 w-24 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></div>
          <div className="absolute h-20 w-20 rounded-full border-4 border-t-transparent border-green-500 animate-spin-reverse"></div>
        </div>


        {/* Text below the loader */}
        <p className="text-white text-lg font-semibold animate-fade">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;

