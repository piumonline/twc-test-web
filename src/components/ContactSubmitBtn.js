import React from "react";
import Link from "next/link";

const ContactSubmitBtn = ({ currentPage }) => {
  return (
    <div>
      {/* <button className="mt-[76px] flex h-[48px] items-center justify-center gap-2.5 rounded-full border p-2.5 font-FutuLight text-[25px] text-white"> */}

      <button
        className=" flex h-[48px] items-center  rounded-full border p-2.5 px-6 font-FutuLight text-[25px] text-white mt-10"
        type="submit"
      >
        add your first contact
      </button>
    </div>
  );
};

export default ContactSubmitBtn;
