"use client";

import Logo from "@/components/Logo";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Register = () => {
  const [formValues, setFormValues] = useState({
    // state for form values
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({}); // state for errors
  const [isSubmit, setIsSubmit] = useState(false); // state for submit

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target; // destructure name and value from target
    setFormValues((pre) => ({ ...pre, [name]: value })); // update state
  };

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setErrors(validate(formValues)); // set errors if there is any
  };

  // useEffect to submit form if there is no errors
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(formValues);
      // submit form values to api
      const registerUser = async () => {
        try {
          const response = await axios.post("/register", {
            email: formValues.email,
            password: formValues.password,
          });
          console.log("user created");
        } catch (error) {
          console.error(error);
        }
      };

      registerUser();
    }
  }, [errors]);

  // form validation handler
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; // regex for email validation
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "Please confirm your password";
    }
    if (values.password !== values.confirm_password) {
      errors.confirm_password = "Password does not match";
    }
    return errors;
  };

  return (
    <main className="background_login">
      <section className=" min-h-screen flex flex-col lg:flex-row">
        <div className="bg-eclipce bg-cover bg-left bg-no-repeat lg:w-3/5 grid content-center pl-[122px] shrink-0 grow-1">
          <div className="flex h-[487px] w-[477px] flex-col gap-[38px] text-left ">
            <div className="h-[157px] flex-grow leading-none text-white">
              <p className="inline font-FutuBold text-[50px] font-bold leading-[73px]">
                Register Now
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[38px] font-FutuLight text-[25px] text-[#083F46] ">
                <div>
                  <input
                    className=" input-field  w-[500px]  "
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="e-mail"
                  />
                  <p className="text-white mx-10 text-sm">{errors.email}</p>
                </div>

                <div>
                  <input
                    className=" input-field w-[500px]    "
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="password"
                  />
                  <p className="text-white mx-10 text-sm">{errors.password}</p>
                </div>

                <div>
                  <input
                    className="input-field w-[500px] "
                    type="password"
                    name="confirm_password"
                    value={formValues.confirm_password}
                    onChange={handleChange}
                    placeholder="confirm password"
                  />
                  <p className="text-white mx-10 text-sm">
                    {errors.confirm_password}
                  </p>
                </div>

                <div className="flex items-center mt-[20px] ">
                  <div className="flex h-12 w-[131px] items-center justify-center gap-2.5 rounded-[50px] px-2.5 py-[0] font-medium text-white [box-shadow-width:1px] [box-shadow:0px_0px_0px_1px_white_inset]">
                    <div>
                      <button
                        className="h-[50px] text-[25px] leading-[50px]"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <Link href="/login">
                  <p className="text-white underline underline-offset-4 px-4 font-FutuLight text-[22px]">
                    {" "}
                    &lt; Back to Login
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-2/5 h-2/5 order-first lg:order-2 flex shrink-1 justify-center items-center pt-56">
          {/* <div className="bg-slate-400 lg:order-1"> */}
          <Logo currentPage="auth" />
        </div>
      </section>
    </main>
  );
};

export default Register;
