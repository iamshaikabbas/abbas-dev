
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <h1 className="font-bold text-xl text-blue-600">
          Abbas.dev
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}
