import ToggleTheme from "@/components/theme/ToggleTheme";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center mt-6">
      <div className="flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full shadow-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 transition-all duration-300">
        {/* Logo */}
        <div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          GO + ReactJs
        </div>

        {/* Right side text */}
        <div className="text-zinc-600 dark:text-zinc-300 text-base">
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
