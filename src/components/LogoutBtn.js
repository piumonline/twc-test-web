import Image from "next/image";

const LogoutBtn = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-end p-12">
      <div className="font-futura_md_bt flex h-[50px] w-[133px] items-center justify-between  gap-[17px] text-left font-medium text-white">
        <Image src="img/logout logo.svg" alt="logo" width={43} height={43} />
        <p className="flex h-[50px] w-[73px] flex-grow items-center justify-center text-[25px] leading-[50px] underline">
          logout
        </p>
      </div>
    </div>
  );
};

export default LogoutBtn;
