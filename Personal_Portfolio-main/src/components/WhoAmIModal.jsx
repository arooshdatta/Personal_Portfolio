import { X, Terminal } from "lucide-react";

export default function WhoAmIModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] flex items-center justify-center px-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl bg-[#0b0f14] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Terminal Header */}
        <div className="text-gray-500 text-xs mb-6">
Last login: Today • Portfolio Terminal v1.0
</div>
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#111827]">
          <div className="flex items-center gap-3">

            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <Terminal size={18} className="text-brand-primary" />

            <span className="text-sm text-gray-400">
              aroosh@portfolio:~
            </span>

          </div>

          <button onClick={onClose}>
            <X className="text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Terminal Body */}

        <div className="font-mono text-sm p-8 space-y-5">

          <div>
            <span className="text-green-400">$ </span>
            whoami
          </div>

          <div className="text-brand-primary">
            Aroosh Datta<br/>
            Software Engineer +
            Problem Solver +
            Open Source Enthusiast
          </div>

          <div>
            <span className="text-green-400">$ </span>
            education
          </div>

          <div className="text-gray-300">
            B.Tech Computer Science Engineering
            <br />
            VIT Bhopal University
          </div>

          <div>
            <span className="text-green-400">$ </span>
            interests
          </div>

          <div className="text-gray-300">
            • Distributed Systems
            <br />
            • Artificial Intelligence
            <br />
            • Open Source
            <br />
            • Full Stack Development
          </div>

          <div>
            <span className="text-green-400">$ </span>
            hobbies
          </div>

          <div className="text-gray-300">
            ⚽ Football
            <br />
            💻 Competitive Programming
            <br />
            🚀 Building Side Projects
          </div>

          <div>
            <span className="text-green-400">$ </span>status</div>
            <div className="text-gray-300">
            🚀 Building scalable software.<br/>
            📚 Constantly learning.<br/>
            🎯 Looking for impactful opportunities.
          </div>
          <div>
  <span className="text-green-400">$ </span>
  coffee
</div>

<div className="text-gray-300">
  ☕ 9999 cups consumed while debugging.
</div>
<div>
  <span className="text-green-400">$ </span>
  motto
</div>

<div className="text-brand-primary">
  "Build. Break. Learn. Repeat."
</div>

          <div className="text-brand-primary">
            Looking for Software Engineering Opportunities 🚀
          </div>

          <div className="pt-4">
  <span className="text-green-400">$ </span>
  <span className="animate-pulse">█</span>
</div>

        </div>

      </div>
    </div>
  );
}