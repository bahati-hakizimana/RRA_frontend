import React, { useState, useRef, useCallback } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const EmployeeEditInsuranceMember = () => {
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    martal_status: "",
    gender: "",
    insurance: "",
    address: "",
  });

  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
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

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  }, [webcamRef]);

  const retakeImage = () => {
    setCapturedImage(null);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
        <small className="mt-1.5 text-center">Add New Insurance</small>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Firstname
              </label>
              <div className="mt-2">
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  autoComplete="first_name"
                  onChange={e=> setInputData ({...inputData, first_name:e.target.value})}
                  required
                  //   value={formData.username}
                  //   onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>


            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Lastname
              </label>
              <div className="mt-2">
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  autoComplete="last_name"
                  onChange={e=> setInputData ({...inputData, last_name:e.target.value})}
                  required
                  //   value={formData.username}
                  //   onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>


            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="phone"
                  onChange={e=> setInputData ({...inputData, phone:e.target.value})}
                  required
                  //   value={formData.username}
                  //   onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>


            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <input
                  id="gender"
                  name="gender"
                  type="text"
                  autoComplete="gender"
                  onChange={e=> setInputData ({...inputData, gender:e.target.value})}
                  required
                  //   value={formData.username}
                  //   onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>


            <div>
              <label
                htmlFor="martal_status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Martal Status
              </label>
              <div className="mt-2">
                <input
                  id="martal_status"
                  name="martal_status"
                  type="text"
                  autoComplete="martal_status"
                  onChange={e=> setInputData ({...inputData, martal_status:e.target.value})}
                  required
                  //   value={formData.username}
                  //   onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>

            <div>
              <label
                htmlFor="insurance"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Insurancne
              </label>
              <div className="mt-2">
                <input
                  id="insurance"
                  name="insurance"
                  type="text"
                  autoComplete="insurance"
                  onChange={e=> setInputData ({...inputData, insurance:e.target.value})}
                  required
                  //   value={formData.username}
                  //   onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>


            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <textarea
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  onChange={e=> setInputData ({...inputData, address:e.target.value})}
                  //   value={formData.username}
                  //   onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            {/* Webcam Capture Section */}
            <div className="mt-4">
              {!capturedImage ? (
                <div>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="w-full rounded-md shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={captureImage}
                    className="mt-2 w-full rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600"
                  >
                    Capture Image
                  </button>
                </div>
              ) : (
                <div>
                  <img src={capturedImage} alt="Captured" className="w-full rounded-md shadow-sm" />
                  <button
                    type="button"
                    onClick={retakeImage}
                    className="mt-2 w-full rounded-md bg-red-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500"
                  >
                    Retake Image
                  </button>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-purple-400 group-hover:text-indigo-400 aria-hidden:true" />
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

export default EmployeeEditInsuranceMember;
