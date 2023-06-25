import Logo from "../components/Logo.js";
import AddContactBtn from "@/components/AddContactBtn.js";
import LogoutBtn from "@/components/LogoutBtn.js";

// px-[204px]
export default function Home() {
  return (
    <main className="background_home min-h-screen">
      <section className="flex h-screen flex-col">
        <div className="flex-1 px-[204px]">
          <Logo />
        </div>
        <div className="flex-2 grow flex-col px-[204px]">
          <div className="align-center flex flex-col text-left leading-none text-white xl:h-[180px] xl:w-[950px] 2xl:w-auto">
            <div className="mt-[76px]">
              <p className="inline font-FutuBold text-[50px] font-bold leading-[73px]">
                Welcome,
                <br />
              </p>
              <p className="inline font-FutuLight text-[35px] font-medium leading-[55px]">
                This is where your contacts will live. Click the button below to
                add a new contact.
              </p>
            </div>
            <AddContactBtn />
          </div>
        </div>

        <div className="flex-1">
          <LogoutBtn />
        </div>
      </section>
    </main>
  );
}
