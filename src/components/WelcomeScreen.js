"use client"

import React from "react";
import AddContactBtn from "@/components/AddContactButton";

const WelcomeScreen = () => {
  return (
    <div>
      <div className="flex-col text-left text-white">
        <div className="pt-12">
          <p className="inline font-FutuBold text-[50px] font-bold leading-[73px]">
            Welcome,
            <br />
          </p>
          <p className="inline font-FutuLight text-[35px] font-medium leading-[55px]">
            This is where your contacts will live. Click the button below to add
            a new contact.
          </p>
        </div>
        <AddContactBtn currentPage="welcome" />
      </div>
    </div>
  );
};

export default WelcomeScreen;
