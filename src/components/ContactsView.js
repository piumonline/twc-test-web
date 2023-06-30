import AddContactButton from "@/components/AddContactButton";

const ContactsView = ({ contacts }) => {
  console.log(contacts);
  return (
    <div className="flex gap-1 flex-col">
      <div className="mb-20 lg:mb-[23px] flex flex-col lg:flex-row justify-between h-16 items-center ">
        <h2 className="mb-6 lg:my-[23px] text-slate-50 md:text-5xl font-bold leading-8 font-FutuBold flex text-center items-center justify-center">
          Contacts
        </h2>
        <div>
          <AddContactButton currentPage="contacts" />
        </div>
      </div>
      <div className="bg-white md:rounded-3xl w-full  md:px-4 py-4 text-primary  h-[45vh]  overflow-y-auto ">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
            <table class="w-full text-sm text-left text-[#083F46]">
              <thead class="text-xstext-[#083F46] uppercase bg-white">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    full name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    gender
                  </th>
                  <th scope="col" class="px-6 py-3">
                    email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    phone
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr
                    class="bg-white border-b hover:text-[#083F46]"
                    key={index}
                  >
                    <td class="px-6 py-4 font-medium text-[#083F46] whitespace-nowrap">
                      {contact.name}
                    </td>
                    <td class="px-6 py-4">{contact.gender}</td>
                    <td class="px-6 py-4">{contact.email}</td>
                    <td class="px-6 py-4">{contact.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsView;
