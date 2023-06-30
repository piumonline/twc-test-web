"use client"

import Image from "next/image";

const Logo = ({ currentPage }) => {
  return (
    <div>
      {currentPage == "auth" ? (
        <div className="cursor-pointer flex-row  pt-[72px] 2xl:top-[92px] px-[50px]">
          <Image
            src={"/" + "img/greenLogoTWC.svg"}
            alt="logo"
            width={170}
            height={55}
            className="mb-[6px] 2xl:h-[32px] 2xl:w-[96px]"
          />
          <Image
            className="mb-[6px] 2xl:h-[32px] 2xl:w-[96px]"
            src={"/" + "img/greenlogo.svg"}
            alt="logo"
            width={319}
            height={142}
          />
        </div>
      ) : (
        <div className="cursor-pointer flex-row  pt-[72px] 2xl:top-[92px] px-[204px]">
          <Image
            src={"/" + "img/logo.svg"}
            alt="logo"
            width={72.9}
            height={24.3}
            className="mb-[6px] 2xl:h-[32px] 2xl:w-[96px]"
          />
          <Image
            src={"/" + "img/contacts portal.svg"}
            alt="logo"
            width={136.76}
            height={60.7}
          />
        </div>
      )}
    </div>
  );
};

export default Logo;
