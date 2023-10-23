import Image from "next/image";
import Link from "next/link";
import { MobileNavbar, Toggle } from "..";

const Navbar = () => {
  return (
    <ul className="flex max-w-full p-3 justify-center bg-slate-100 drop-shadow-sm h-[60px] relative dark:bg-gray-900 dark:text-slate-100">
      <div className="flex max-w-7xl w-full">
        <section className="w-1/2">
          <li className="flex w-80 items-center opacity-80 hover:opacity-100 ease-out duration-300">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/ud-assets/ten/dbdcrubyyf2j5mte0qu3"
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
            <p className="ml-2">ETL - MELI</p>
          </li>
        </section>
        <section className="hidden w-1/2 justify-evenly md:flex md:justify-end items-center">
          <li className="hover:underline">
            {/* <Link href={"/education"}>Education</Link> */}
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
