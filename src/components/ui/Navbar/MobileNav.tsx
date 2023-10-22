"use client";
import { MouseEventHandler, useRef } from "react";

const MobileNavbar = () => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownToggleRef = useRef<HTMLButtonElement | null>(null);

  const handleClickOutside = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle("hidden");
    }
  };

  return (
    <div className="flex flex-col">
      <button
        data-dropdown-toggle="dropdown"
        className="flex justify-end text-white focus:ring-4 focus:outline-none focus:ring-blue-30"
        type="button"
        aria-haspopup="true"
        ref={dropdownToggleRef}
        onClick={handleClickOutside}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className="z-100 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 h-screen dark:bg-gray-700"
        ref={dropdownRef}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { MobileNavbar };
