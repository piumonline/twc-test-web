"use client";

import React from "react";
import Link from "next/link";

const AddContactButton = ({ currentPage }) => {
  return (
    <div>
      {/* <button className="mt-[76px] flex h-[48px] items-center justify-center gap-2.5 rounded-full border p-2.5 font-FutuLight text-[25px] text-white"> */}
      <Link href="/contacts/new">
        <button className=" flex h-[48px] items-center  rounded-full border p-2.5 px-6 font-FutuLight text-[25px] text-white">
          {currentPage == "contacts"
            ? "add new contact"
            : "add your first contact"}
        </button>
      </Link>
    </div>
  );
};

export default AddContactButton;
