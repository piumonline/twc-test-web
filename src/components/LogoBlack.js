import Image from "next/image";

const LogoBlack = () => {
  return (
    <div className="cursor-pointer flex-row  pt-[72px] 2xl:top-[92px] px-[204px]">
      {/* <div className="cursor-pointer flex-row  pt-[72px] left-[204px] 2xl:top-[92px] "> */}
      <Image
        src={"/"+"img/Group1.svg"}
        alt="logo"
        width={72.9}
        height={24.3}
        className="mb-[6px] 2xl:h-[32px] 2xl:w-[96px]"
      />

    </div>
  );
};

export default LogoBlack;
