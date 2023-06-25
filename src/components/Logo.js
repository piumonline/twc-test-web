import Image from "next/image";

const Logo = () => {
  return (
    <div className="cursor-pointer flex-row  pt-[72px] 2xl:top-[92px] ">
      {/* <div className="cursor-pointer flex-row  pt-[72px] left-[204px] 2xl:top-[92px] "> */}
      <Image
        src="img/logo.svg"
        alt="logo"
        width={72.9}
        height={24.3}
        className="mb-[6px] 2xl:h-[32px] 2xl:w-[96px]"
      />
      <Image
        src="img/contacts portal.svg"
        alt="logo"
        width={136.76}
        height={60.7}
      />
    </div>
  );
};

export default Logo;
