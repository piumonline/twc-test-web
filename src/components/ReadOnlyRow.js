import React, { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";

const ReadOnlyRow = ({ contact, index, handleEditClick, togglePopup, confirm }) => {

  //delete contact
  const deleteContact = async (e, contact) => {
    console.log(contact._id);
    try {
      togglePopup();

      const token = Cookies.get("token");
      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.delete(
        `http://localhost:8080/api/contacts/${contact._id}`,
        { headers }
      );
      console.log(`${contact.name} deleted}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Code to run when the component mounts
    if (confirm){
      deleteContact(null, contact);
    }
  }, [confirm]); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <tr className="bg-white border-b hover:text-[#083F46]" key={index}>
        <td className="px-6 py-4 font-medium text-[#083F46] whitespace-nowrap">
          {contact.name}
        </td>
        <td className="px-6 py-4">{contact.gender}</td>
        <td className="px-6 py-4">{contact.email}</td>
        <td className="px-6 py-4">{contact.phone}</td>
        <td className="px-6 py-4">
          <button type="button" onClick={(e) => handleEditClick(e, contact)}>
            <Image src="/img/material-symbols_edit-rounded.svg" width={20} height={20} />
          </button>
        </td>
        <td className="px-6 py-4">
          <button type="button" onClick={(e) => deleteContact(e, contact)}>
            <Image src="/img/material-symbols_delete-outline.svg" width={20} height={20} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;
