import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const move = (e) => {
      glow.style.background = `radial-gradient(
        450px circle at ${e.clientX}px ${e.clientY}px,
        rgba(0,210,255,0.08),
        transparent 65%
      )`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
     className="pointer-events-none fixed inset-0 z-0"/>
  );
}