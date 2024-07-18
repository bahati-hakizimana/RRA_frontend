import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
import { LockClosedIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import DarkMode from "../Navbar/DarkMode";

const AddInstitutions = () => {
  const [inputData, setInputData] = useState({ name: "", type: "" });
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("http://127.0.0.1:8000/institution/add_institution/", inputData).then((res) => {
        if (res.data) {
          alert("institution added successful");
          navigate("/admin/instutitions");
        }
      });
    } catch (err) {
      console.log("Error creating institution", err);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
        <small className=" mt-1.5 text-center">Add New Insurance</small>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handlerSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  onChange={e=> setInputData ({...inputData, name:e.target.value})}
                  required
                  //   value={formData.username}
                  //   onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ID
              </label>
              <div className="mt-2">
                <input
                  id="type"
                  name="type"
                  type="text"
                  autoComplete="type"
                  required
                  onChange={e=> setInputData ({...inputData, type:e.target.value})}
                  //   value={formData.username}
                  //   onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-purple-400 group-hover:text-indigo-400 aria-hidden:true " />
                </span>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddInstitutions;
