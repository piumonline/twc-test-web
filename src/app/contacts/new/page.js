"use client";

import middleware from "@/middleware/middleware"; // middleware to protect routes
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import ContactSubmitBtn from "@/components/ContactSubmitBtn";
import { useRouter } from "next/navigation";

const New = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // destructure name and value from target
    setFormValues((pre) => ({ ...pre, [name]: value })); // update state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);

    try {
      const token = Cookies.get("token"); // Retrieve the JWT token from cookies
      const headers = { Authorization: `Bearer ${token}` }; // Set the Authorization header

      const response = await axios.post(
        "http://localhost:8080/api/contacts",
        {
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          gender: formValues.gender,
          userId: formValues.userId,
        },
        { headers }
      ); // Include the headers object as the third parameter

      console.log("added");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="pt-10">
        <p className="font-FutuBold inline text-left text-[50px] text-white mb-[61px]">
          New Contact
        </p>
        <form onSubmit={handleSubmit}>
          <div className="font-FutuLight mt-[61px] gap-[40px] flex flex-col xl:grid grid-rows-2 grid-flow-col text-[25px] text-[#083F46] ">
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="full name"
              value={formValues.name}
              onChange={handleChange}
            />

            <input
              className="input-field"
              type="text"
              name="phone"
              placeholder="phone number"
              value={formValues.phone}
              onChange={handleChange}
            />
            <input
              className="input-field"
              type="text"
              name="email"
              placeholder="e-mail"
              value={formValues.email}
              onChange={handleChange}
            />
            <div className="text-white flex justify-between items-center gap-0 xl:max-w-[477px]">
              <p>Gender</p>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  className="mr-2 border-1 border-slate-50 bg-transparent mb-1 focus:ring-1 focus:ring-white text-secondary
                        "
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  className="mr-2 border-1 border-slate-50 bg-transparent mb-1 focus:ring-1 focus:ring-white text-secondary
                        "
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <ContactSubmitBtn />
        </form>
      </div>
    </section>
  );
};

export default middleware(New);
