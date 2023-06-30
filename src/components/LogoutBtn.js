"use client"

import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove('token');
    router.push("/login");
  }

  return (
    <div className="grid grid-cols-1 gap-4 place-items-end p-12 pt-0">
      <div className="font-futura_md_bt flex h-[50px] w-[133px] items-center justify-between gap-[17px] text-left font-medium text-white">
        <button className="flex h-[50px] w-[73px] flex-grow items-center justify-center text-[25px] leading-[50px] underline" onClick={logout}>
          <Image
            src={"/img/logout logo.svg"}
            alt="logo"
            width={43}
            height={43}
          />
          logout
        </button>
      </div>
    </div>
  );
};

export default LogoutBtn;
