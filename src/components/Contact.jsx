import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/aolgpeqb", userInfo);
      toast.success("your message has been sent");
    } catch (error) {
      toast.error("somthing went wrong");
      console.log(error);
    }
  };
  return (
    <div
      name="Contact"
      className="grid grid-rows-2  sm:max-h-[210vh] lg:grid-rows-2 md:grid-cols-2  pt-24 md:pl-32"
    >
      <div className="text-center p-6 md:w-[38vw]">
        <div className="dark:bg-gray-700 bg-gray-400 rounded-md dark:text-white p-8 ">
          <div>
            <h1 className="text-green-400 text-2xl  flex p-3 font-semibold">
              {" "}
              Let's work together
            </h1>
            <p className="pb-7  flex items-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iure nobis modi.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label
                for="first-name"
                className="mb-2 dark:text-gray-200  flex items-start"
              >
                First Name
              </label>
              <input
                {...register("firstname", { required: true })}
                type="text"
                id="firstname"
                placeholder="Enter Your first name"
                className="p-3 rounded-md bg-gray-800 text-white  focus:outline-none focus:ring focus:ring-green-500"
              />
              {errors.firstname && <span>This field is required</span>}
            </div>
            <div className="flex flex-col">
              <label
                for="lastname"
                className="mb-2 dark:text-gray-300   flex items-start"
              >
                Last Name
              </label>
              <input
                {...register("lastname", { required: true })}
                type="text"
                id="lastname"
                placeholder="Enter your last name"
                className="p-3 rounded-md bg-gray-800  text-gray-300   focus:outline-none focus:ring focus:ring-green-500"
              />
              {errors.lastname && <span>This field is required</span>}
            </div>
            <div className="flex flex-col col-span-1 md:col-span-2">
              <label
                for="email"
                className="mb-2 dark:text-gray-200 flex items-start"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                placeholder="Enter Your email"
                className="p-3 rounded-md bg-gray-800 text-white  focus:outline-none focus:ring focus:ring-green-500"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col col-span-1 md:col-span-2">
              <label
                for="message"
                className="mb-2 dark:text-gray-300 flex items-start"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                placeholder="Type your message here"
                rows="4"
                className="p-3 rounded-md bg-gray-800  text-gray-300 focus:outline-none focus:ring focus:ring-green-500"
              ></textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className=" border-2 border-black-500  hover:bg-green-600 dark:text-white py-3 px-6 rounded-2xl hover:scale-95 duration-150 font-semibold transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="  md:pt-44 md:pr-14 sm-[94vw] pt-32  place-items-center  ">
        <div class="darK:bg-gray-800 dark:text-white p-6 space-y-6">
          <div class="flex items-center space-x-4">
            <div class="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10l4-4m0 0l4 4m-4-4v12m7 0h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4m-6 0h6"
                />
              </svg>
            </div>
            <div>
              <p class="font-semibold flex">Phone</p>
              <p class="dark:text-gray-400">(+91) 6283789930</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12h2a2 2 0 012 2v4a2 2 0 01-2 2h-2m-4-4h4m-4-4H7m4-8h2a2 2 0 012 2v4a2 2 0 01-2 2h-2"
                />
              </svg>
            </div>
            <div>
              <p class="font-semibold flex">Email</p>
              <p class=" darK:text-gray-400">singhdaljeet62837@gmail.com</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 1.657-2.343 3-4 3s-4-1.343-4-3m0-2v8m8-8v8m2 0h6a2 2 0 002-2v-4a2 2 0 00-2-2h-6M6 16v6m6-6v6m-6-6a4 4 0 100-8 4 4 0 100 8m12 4a4 4 0 11-8 0"
                />
              </svg>
            </div>
            <div>
              <p class="font-semibold flex ">Address</p>
              <p class="dark:text-gray-400">Ladowali Road, jalandhar 144001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
