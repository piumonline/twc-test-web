"use client";

import AddContactButton from "@/components/AddContactButton";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { useState } from "react";
import PopupWindow from "./PopupWindow ";

const ContactsView = ({ contacts }) => {

  const [editContactId, setEditContactId] = useState(null); //use state to save the id of the contact being edited
  const [showPopup, setShowPopup] = useState(false); //popup window state
  const [confirm, setConfirm] = useState(false); //confirm delete state
  const [row, setRow] = useState(""); //table view type state
  const [deletingContactName, setdeletingContactName] = useState(""); //contact state

  //function to toggle the popup window
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  //function to handle the pop up cancel button
  const handleCancel = () => {
    setShowPopup(false);
  };

  //function to handle the pop up confirm button
  const handleConfirm = () => {
    setConfirm(true);
    setShowPopup(false);
  };

  //handleEditClick is called when the user clicks the edit button
  const handleEditClick = (event, contact) => { 
    event.preventDefault();
    setEditContactId(contact._id);
  };

  //handleCancelClick is called when the user clicks the cancel button
  const handleCancelClick = () => { 
    setEditContactId(null);
  };

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
            <form>
              <table class="w-full text-sm text-left text-[#083F46]">
                <thead class="text-xstext-[#083F46] uppercase bg-white">
                  <tr>
                    <th></th>
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
   {/* map through the contacts array and render the ReadOnlyRow component
    if the editContactId is not equal to the contact id, otherwise render the EditableRow component */}
                  {contacts.map((contact, index) => ( 
                    <>
                      {editContactId === contact._id ? (
                        <EditableRow
                          contact={contact}
                          index={index}
                          handleCancelClick={handleCancelClick}
                          togglePopup={togglePopup}
                          setRow={setRow}
                          
                        />
                      ) : (
                        <ReadOnlyRow
                          contact={contact}
                          index={index}
                          handleEditClick={handleEditClick}
                          togglePopup={togglePopup}
                          setRow={setRow}
                          setdeletingContactName={setdeletingContactName}
                    
                        />
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
      {showPopup && <PopupWindow isVisible={showPopup} onCancel={handleCancel} onConfirm={handleConfirm} deletingContactName={deletingContactName} confirm={confirm} tableRow={row}/>}
    </div>
  );
};

export default ContactsView;
