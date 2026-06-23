import { useEffect, useState } from "react";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setFadeOut(true);

setTimeout(() => {
  onFinish();
}, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
   <div
  className={`fixed inset-0 z-[9999] bg-bg-dark flex flex-col items-center justify-center transition-opacity duration-500 ${
    fadeOut ? "opacity-0" : "opacity-100"
  }`}
>
      <h1 className="text-5xl font-bold font-outfit mb-2">
        <span className="text-brand-primary">&lt;/&gt;</span> AROOSH
      </h1>

      <p className="text-gray-400 mb-10 tracking-widest uppercase text-sm">
        Initializing Portfolio...
      </p>

      <div className="w-72 h-2 bg-white/10 rounded-full overflow-hidden">

        <div
          className="h-full bg-brand-primary transition-all duration-100"
          style={{ width: `${progress}%` }}
        />

      </div>

      <p className="mt-4 text-brand-primary text-sm">
        {progress}%
      </p>

    </div>
  );
};

export default LoadingScreen;