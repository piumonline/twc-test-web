"use client";
import Logo from "@/components/Logo.js";
import LogoutBtn from "@/components/LogoutBtn.js";
import middleware from "@/middleware/middleware"; // middleware to protect routes
import { useState, useEffect } from "react";
import axios from "axios";
import WelcomeScreen from "@/components/WelcomeScreen";
import Cookies from "js-cookie";
import ContactsView from "@/components/ContactsView";

const Home = () => {
  const [contacts, setContacts] = useState([]); //use useState hook to save fetched data

  

  //get data from backend
    const getAllContact = async () => {
      try {
        const token = Cookies.get("token"); // Retrieve the JWT token from cookies
        const headers = { Authorization: `Bearer ${token}` }; // Set the Authorization header

        const response = await axios.get("http://localhost:8080/api/contacts", {
          headers,
        }); //send with authorization headers
        setContacts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      getAllContact();
    },[]); //update state when contacts change

  // Cookies.set('token', token, { expires: 1 }); // save token in cookie with expiry of 1 day

  return (
    <main className="background_home min-h-screen">
      <section className="flex h-screen flex-col">
        <Logo />
        <div className="grow flex-col px-[204px] flex justify-center">
          {/* if user has no contacts, show welcome screen, else show contacts view */}
          {Object.keys(contacts).length === 0 ? (
            <WelcomeScreen />
          ) : (
            <ContactsView contacts={contacts} />
          )}
        </div>
        <LogoutBtn />
      </section>
    </main>
  );
};

export default middleware(Home); //wrap Home component in middleware to protect route
