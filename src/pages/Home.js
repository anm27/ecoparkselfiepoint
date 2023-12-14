import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import hidcoLogo from "../images/hidco-logo.png";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  return (
    <>
      <div className="bg-black pt-2 h-screen">
        <div className="grid justify-center gap-5 ">
          <h2 className="text-center text-white lg:text-5xl text-xl font-pacifico">
            ECO PARK
          </h2>
          <h1 className="text-left text-gradient-primary text-xl font-pacifico lg:w-3/5 lg:h-16 flex m-auto pl-3 lg:pl-0">
            Get featured on Eco Park Facebook and win free tickets just by
            uploading your reels or pics of Eco Park.
          </h1>
          <div className="grid justify-center">
            <label
              htmlFor="fileInput"
              className="w-full flex items-center cursor-pointer bg-gradient-primary font-bold font-dm-sans rounded text-white pr-2"
            >
              <div className="bg-cyan-500 py-4 pl-4 rounded-l border-r-2 mr-2">
                <FaCloudUploadAlt className="mr-4" size={32} />
              </div>
              Upload reels or photos
              <input
                id="fileInput"
                className="hidden"
                type="file"
                onChange={handleFileChange}
              />
            </label>
          </div>
          {selectedFile && (
            <p className="text-center text-white mt-3">
              Selected file: {selectedFile.name}
            </p>
          )}
          {/* <input
            className="bg-gradient-primary p-3 outline-0 text-white placeholder:text-white w-4/5 rounded-sm lg:w-1/2 m-auto"
            type="text"
            placeholder="Enter your fb profile link"
          /> */}
          <div className="flex items-center lg:w-1/2 w-4/5 m-auto bg-gradient-primary rounded-sm">
            <FaFacebookSquare
              size={40}
              color="white"
              className="px-2 pl-3 border-r-2"
            />
            <input
              className="bg-gradient-primary p-3 outline-0 text-white placeholder:text-white w-full rounded-r-sm m-auto"
              type="text"
              placeholder="Enter your facebook profile link"
            />
          </div>
          <p className="text-white text-center">Optional:</p>
          <div className="flex items-center lg:w-1/2 w-4/5 m-auto bg-gradient-primary rounded-sm">
            <TiSocialInstagram
              size={40}
              color="white"
              className="px-2 border-r-2"
            />
            <input
              className="bg-gradient-primary p-3 outline-0 text-white placeholder:text-white w-full rounded-r-sm m-auto"
              type="text"
              placeholder="Enter your instagram profile link"
            />
          </div>

          {/* Checkbox for agreeing to terms and conditions */}
          <div className="flex justify-center items-center w-4/5 m-auto mb-4">
            <input
              type="checkbox"
              id="agreeTermsCheckbox"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            <label
              htmlFor="agreeTermsCheckbox"
              className="flex items-center cursor-pointer text-white"
            >
              <div
                className={`w-6 h-6 border-2 rounded ${
                  agreeTerms
                    ? "bg-green-700 border-green-700"
                    : "border-gray-400"
                }`}
              >
                {agreeTerms && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                )}
              </div>
              <span className="ml-2">I agree to the terms and conditions</span>
            </label>
          </div>

          <div className="flex justify-center">
            <button className="btn-bg text-center px-3 py-1 text-xl text-white font-bold uppercase rounded">
              Submit
            </button>
          </div>
        </div>
        <div
          className={`flex flex-row items-center absolute justify-center w-full bottom-2`}
        >
          <h2 className={`text-sm text-white`}>Powered by : </h2>

          <img src={hidcoLogo} className="w-20 ml-2" alt="HIDCO" />
        </div>
      </div>
    </>
  );
}

export default Home;
