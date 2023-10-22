import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex max-w-full p-5 justify-center drop-shadow-md bg-slate-200 h-[80px] dark:bg-gray-800 dark:text-slate-100">
      <div className="flex flex-col max-w-7xl w-full">
        <section>
          <div className="mb-2">
            <p className="text-xs md:text-[14px]">Connect with me:</p>
          </div>
          <div></div>
        </section>
        <section>
          <p className="text-[10px] md:text-xs italic">
            The contents of this website are © 2023 under the terms of the MIT
            License - IONJC.{" "}
            <span className="not-italic">
              Powered by {' '}
              <span className="font-bold">
                <Link href="https://nextjs.org/">Next.js</Link>
              </span>
              .
            </span>
          </p>
        </section>
      </div>
    </footer>
  );
};

export { Footer };
