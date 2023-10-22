import Image from "next/image";
import Link from "next/link";
import { MobileNavbar, Toggle } from "..";

const Navbar = () => {
  return (
    <ul className="flex max-w-full p-5 justify-center bg-slate-100 drop-shadow-sm h-[60px] relative dark:bg-gray-900 dark:text-slate-100">
      <div className="flex max-w-7xl w-full">
        <section className="w-1/2">
          <li className="dark:flex w-24 opacity-80 hover:opacity-100 ease-out duration-300 hidden">
            <Link href="/">MELI</Link>
          </li>
          <li className="flex w-24 opacity-80 hover:opacity-100 ease-out duration-300 dark:hidden">
            <Link href="/">MELI</Link>
          </li>
        </section>
        <section className="hidden w-1/2 justify-evenly md:flex items-center">
          <li className="hover:underline">
            {/* <Link href={"/education"}>Education</Link> */}
          </li>
          <li className="hover:underline">
            {/* <Link href={"/skills"}>Skills</Link> */}
          </li>
          <li>
            <Toggle />
          </li>
        </section>
        <section className="flex lex w-1/2 justify-end md:hidden">
          <MobileNavbar />
        </section>
      </div>
    </ul>
  );
};

export { Navbar };
