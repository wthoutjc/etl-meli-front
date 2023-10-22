"use client";
import Image from "next/image";
import { useModalStore } from "@/zustand";

const Modal = () => {
  const { modal, hideModal } = useModalStore();
  const { show } = modal;

  return (
    <div
      className={`w-screen h-screen absolute bg-slate-800 z-50 ${
        show ? "flex flex-col justify-center items-center" : "hidden"
      }`}
      onClick={hideModal}
    >
      <div className="flex flex-col justify-start">
        <button onClick={hideModal} className="hover:opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <Image
          onClick={(e)=>e.stopPropagation()}
          className="object-cover rounded-full w-full h-full"
          src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/portfolio/mbxscisbe6yacaa7lkky"
          alt="ionjc"
          width={1000}
          height={800}
        />
      </div>
    </div>
  );
};

export { Modal };
