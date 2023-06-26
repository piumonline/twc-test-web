import LogoBlack from "@/components/Logo";

const Login = () => {
  return (
    <main className="background_login">
    <section className=" min-h-screen flex flex-col lg:flex-row">
      <div className="bg-eclipce bg-cover bg-left bg-no-repeat lg:w-3/5 grid content-center pl-[122px] shrink-0 grow-1">
        <div className="font-futura_md_bt flex h-[487px] w-[477px] flex-col gap-[38px] text-left ">
          <div className="h-[157px] w-[253px] flex-grow leading-none text-white">
            <p className="inline font-FutuBold text-[50px] font-bold leading-[73px]">
              Hi there,
              <br />
            </p>
            <p className="inline font-FutuLight text-[35px] font-medium leading-[55px]">
              Welcome to our Contract Portal
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-[38px]">
              <input
                className="flex h-[55px]  items-center rounded-[50px] bg-white py-[3px] pl-[41px] pr-[327px]  xl:max-w-[477px] 2xl:max-w-none "
                type="text"
                name="fullname"
                placeholder="full name"
              />

              <input
                className="flex h-[55px]  items-center rounded-[50px] bg-white py-[3px] pl-[41px] pr-[327px]  xl:max-w-[477px] 2xl:max-w-none "
                type="text"
                name="fullname"
                placeholder="full name"
              />
              <div className="flex items-center mt-[20px] ">
                <div className="flex h-12 w-[131px] items-center justify-center gap-2.5 rounded-[50px] px-2.5 py-[0] font-medium text-white [box-shadow-width:1px] [box-shadow:0px_0px_0px_1px_white_inset]">
                    <div>
                    <p className="h-[50px] w-[58px] text-[25px] leading-[50px]">
                        login
                    </p>
                    </div>
                </div>
                <p className=""> or Click here to Register</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-2/5 h-2/5 order-first lg:order-2 flex shrink-1 justify-center items-center pt-56">
      {/* <div className="bg-slate-400 lg:order-1"> */}
        <LogoBlack/>
      </div>
    </section>
    </main>
  );
};

export default Login;
