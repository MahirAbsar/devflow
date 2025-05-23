import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed w-full gap-5 z-50 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src={"/images/site-logo.svg"}
          width={23}
          height={23}
          alt="DevFlow Logo"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 max-sm:hidden dark:text-light-900">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Gobal Search</p>
      <div className="flex-between gap-5"><ThemeToggle /></div>
    </nav>
  );
};
export default Navbar;
