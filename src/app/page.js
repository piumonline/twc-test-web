import Logo from "@/components/Logo.js";
import AddContactBtn from "@/components/FirstContactButton.js";
import LogoutBtn from "@/components/LogoutBtn.js";

export default function Home() {
  return (
    <main className="background_home min-h-screen">
      <section className="flex h-screen flex-col">
        <Logo />
        <div className="grow flex-col px-[204px] flex justify-center">
          <div className="flex-col text-left text-white">
            <div className="pt-12">
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
        <LogoutBtn />
      </section>
    </main>
  );
}
