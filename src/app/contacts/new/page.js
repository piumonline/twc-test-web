import AddContactBtn from "@/components/FirstContactButton";

const New = () => {
  return (
    <section className="">
      <div className="pt-10">
        <p className="font-FutuBold inline text-left text-[50px] text-white mb-[61px]">
          New Contact
        </p>
        <form>
          <div className="font-FutuLight mt-[61px] gap-[40px] flex flex-col xl:grid grid-rows-2 grid-flow-col text-[25px] text-[#083F46] ">
            <input
              className="flex h-[55px]  items-center rounded-[50px] bg-white py-[3px] pl-[41px]  xl:max-w-[477px] 2xl:max-w-none "
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
            <input
              className="flex h-[55px]  items-center rounded-[50px] bg-white py-[3px] pl-[41px] pr-[327px]  xl:max-w-[477px] 2xl:max-w-none "
              type="text"
              name="fullname"
              placeholder="full name"
            />
            <div className="text-white flex justify-between items-center gap-0 xl:max-w-[477px]">
              <p>Gender</p>
              <div>
                <input type="radio" value="Male" name="gender" id="male" />
                <label className="px-[12px]" htmlFor="male">
                  Male
                </label>
              </div>
              <div>
                <input type="radio" value="Female" name="gender" id="female" />
                <label className="px-[12px]" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <AddContactBtn />

      {/* <div className='flex h-[55px] items-center rounded-[50px] bg-white py-[3px] pl-[41px] pr-[327px] text-left  text-[#083F46]'   >
                <p className="h-[50px] w-[109px] text-[25px] leading-[50px]">
                    full name
                </p>
            </div> */}
    </section>
  );
};

export default New;
