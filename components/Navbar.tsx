
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-green-100">

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a
          href="/"
          className="
            font-bold
            text-2xl
            text-emerald-600
            hover:text-emerald-700
            transition
          "
        >
           Abbas.dev
        </a>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-700">

          <a
            href="#about"
            className="hover:text-emerald-600 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-emerald-600 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-emerald-600 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-emerald-600 transition"
          >
            Contact
          </a>

          <div className="h-5 w-px bg-green-200" />

          <a
            href="https://github.com/iamshaikabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-3
              py-1.5
              rounded-lg
              bg-slate-900
              text-white
              hover:scale-105
              transition
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shaik-abbas-a5a723287/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-3
              py-1.5
              rounded-lg
              bg-emerald-600
              text-white
              hover:bg-emerald-700
              transition
            "
          >
            LinkedIn
          </a>

        </div>

      </div>

    </nav>
  );
}

