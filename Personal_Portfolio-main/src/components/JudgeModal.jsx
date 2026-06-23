import { X, Sparkles, Keyboard, Zap, Smartphone, Palette } from "lucide-react";

export default function JudgeModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] flex items-center justify-center px-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass border border-brand-primary/20 rounded-3xl max-w-2xl w-full p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-brand-primary" />
          <h2 className="text-3xl font-bold font-outfit">
            Crafted Beyond a Traditional Portfolio
          </h2>
        </div>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Every interaction in this portfolio was intentionally designed to
          create a fast, memorable and enjoyable experience—not just to display
          projects.
        </p>

        <div className="grid md:grid-cols-2 gap-5">

          <div className="glass rounded-xl p-5">
            <Keyboard className="text-brand-primary mb-3" />
            <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
            <p className="text-gray-400 text-sm">
              Navigate instantly using Ctrl/Cmd + K.
            </p>
          </div>

          <div className="glass rounded-xl p-5">
            <Zap className="text-brand-primary mb-3" />
            <h3 className="font-semibold mb-2">Performance First</h3>
            <p className="text-gray-400 text-sm">
              Lightweight React architecture with smooth interactions.
            </p>
          </div>

          <div className="glass rounded-xl p-5">
            <Smartphone className="text-brand-primary mb-3" />
            <h3 className="font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-400 text-sm">
              Optimized across desktop, tablet and mobile devices.
            </p>
          </div>

          <div className="glass rounded-xl p-5">
            <Palette className="text-brand-primary mb-3" />
            <h3 className="font-semibold mb-2">Thoughtful UX</h3>
            <p className="text-gray-400 text-sm">
              Loading screen, active navigation, progress tracking and polished
              micro-interactions.
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
  <div className="flex flex-wrap justify-center gap-3">

    <span className="px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20">
      ⚛ React
    </span>

    <span className="px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20">
      🎨 Tailwind CSS
    </span>

    <span className="px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20">
      ⚡ Vite
    </span>

    <span className="px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20">
      ♿ Accessible
    </span>

    <span className="px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20">
      📱 Responsive
    </span>

  </div>
</div>
      </div>
    </div>
  );
}