import Logo from "@/components/Logo.js";
import LogoutBtn from "@/components/LogoutBtn.js";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="background_home ">
        <main className="flex h-screen flex-col overflow-auto xl:overflow-hidden">
          <Logo />
          {/* <div className="px-[204px]">
                <div className="bg-yellow-200 grow " > */}
          <div className="grow flex-col px-[204px] flex justify-center">
            <div className="flex-col text-left text-white">{children}</div>
          </div>
          <div className="fgrid">
            <LogoutBtn />
          </div>
        </main>
      </body>
    </html>
  );
}
