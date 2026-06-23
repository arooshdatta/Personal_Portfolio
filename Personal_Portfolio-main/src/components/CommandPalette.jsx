import { Command } from "cmdk";
import { useEffect, useState } from "react";

const commands = {
  
  home: () =>
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" }),

  about: () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }),

  skills: () =>
    document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" }),

  projects: () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }),

  experience: () =>
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }),

  achievements: () =>
    document.querySelector("#achievements")?.scrollIntoView({ behavior: "smooth" }),

  contact: () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }),

  github: () =>
    window.open("https://github.com/arooshdatta/Personal_Portfolio", "_blank"),

  linkedin: () =>
    window.open("https://www.linkedin.com/in/aroosh-datta-8836403b5", "_blank"),

  leetcode: () =>
    window.open("https://leetcode.com/u/Aroosh_Datta/", "_blank"),

  resume: () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", down);

    return () => window.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] flex items-start justify-center pt-32"
      onClick={() => setOpen(false)}
    >
      <Command
        className="w-[650px] max-w-[90%] bg-[#0c111b] border border-cyan-500/20 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Command.Input
          autoFocus
          placeholder="Type a command..."
          className="w-full bg-transparent outline-none p-5 text-lg border-b border-white/10"
        />

       <Command.List className="max-h-96 overflow-y-auto">
  {Object.entries(commands).map(([label, action]) => (
    <Command.Item
      key={label}
      onSelect={() => {
        action();
        setOpen(false);
      }}
      className="px-5 py-4 cursor-pointer hover:bg-cyan-500/10 capitalize"
    >
      {label}
    </Command.Item>
  ))}
</Command.List>

      </Command>
    </div>
  );
}