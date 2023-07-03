"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";


const EditableRow = ({ contact, handleCancelClick, togglePopup, confirm, setRow }) => { 

  const [contactData, setContactData] = useState({ 
    name: contact.name,
    gender: contact.gender,
    email: contact.email,
    phone: contact.phone,
  });

  const handleOnChange = (event) => { // handleOnChange is called when the user types in the input field
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  //update contact
  const handleSaveClick = async (e, contact) => { 
    setRow("EditOnlyRow");
    togglePopup();

    try {
      const token = Cookies.get("token");
      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.put(
        `http://localhost:8080/api/contacts/${contact._id}`,
        {
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone,
          gender: contactData.gender,
        },
        { headers }
      );
      console.log("updated");
      handleCancelClick(e);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <tr className="bg-white border-b hover:text-[#083F46]">
      <td className="flex justify-center px-2">
        {contact.gender === "female" ? (<Image src="/img/girl.png" width={40} height={40} />):(
          <Image src="/img/boy.png" width={40} height={40} />
        )}
        
        </td>
      <td className="px-6 py-4">
        <input
          type="text"
          required="required"
          value={contactData.name}
          name="name"
          onChange={handleOnChange}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          required="required"
          value={contactData.gender}
          name="gender"
          onChange={handleOnChange}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          required="required"
          value={contactData.email}
          name="email"
          onChange={handleOnChange}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          required="required"
          value={contactData.phone}
          name="phone"
          onChange={handleOnChange}
        />
      </td>
      <td className="px-6 py-4">
        <button type="button" onClick={(e) => handleSaveClick(e, contact)}>
          save
        </button>
      </td>
      <td className="px-6 py-4">
        <button type="button" onClick={handleCancelClick}>
          cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
