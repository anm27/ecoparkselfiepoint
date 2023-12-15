import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import hidcoLogo from "../images/hidco-logo.png";
import { IoCloseSharp } from "react-icons/io5";

const CustomAlert = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="btn-bg p-6 rounded-lg mx-2 lg:w-1/3">
      <button className="text-white flex ml-auto mb-2" onClick={onClose}>
        <IoCloseSharp size={33} className="bg-black rounded-full p-1" />
      </button>
      <p className="text-white text-xl">{message}</p>
    </div>
  </div>
);

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fbProfileLink, setFbProfileLink] = useState("");
  const [instagramProfileLink, setInstagramProfileLink] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    selectedFile: "",
    fbProfileLink: "",
    instagramProfileLink: "",
    agreeTerms: "",
  });
  const [showCustomAlert, setShowCustomAlert] = useState(false);

  const handleSubmit = async () => {
    // Client-side validation
    let errors = {};
    if (!selectedFile) {
      errors.selectedFile = "*Please upload a reel or photo";
    }
    if (!fbProfileLink) {
      errors.fbProfileLink = "*Facebook profile link is required";
    }
    if (!agreeTerms) {
      errors.agreeTerms = "*Please agree to the terms and conditions";
    }
    setValidationErrors(errors);

    // If no errors, proceed with submission
    if (Object.keys(errors).length === 0) {
      try {
        // Create a FormData object to handle file upload
        const formData = new FormData();
        formData.append("file", selectedFile); // Assuming you have a 'file' key on the server

        // Append other form data to the FormData object
        formData.append("fbProfileLink", fbProfileLink);
        formData.append("instagramProfileLink", instagramProfileLink);

        // Make a POST request to the server
        const response = await fetch(
          "https://www.wbhidcoltd.com/ecoparkselfiepoint.php",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          setShowCustomAlert(true);
          //   alert(
          //     "Thank you! If your reel/photo gets selected, one of our officer will send you free tickets on facebook. Have a good life!"
          //   );
          console.log("Form submitted successfully!");
          // Reset form fields
          setSelectedFile(null);
          setFbProfileLink("");
          setInstagramProfileLink("");
          setAgreeTerms(false);
        } else {
          console.error(
            "Failed to submit form:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error during form submission:", error);
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleCloseCustomAlert = () => {
    setShowCustomAlert(false);
  };

  return (
    <>
      {showCustomAlert && (
        <CustomAlert
          message="Thank you! If your reel/photo gets selected, one of our officers will send you free tickets on Facebook. Have a good life!"
          onClose={handleCloseCustomAlert}
        />
      )}
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
          {validationErrors.selectedFile && (
            <p className="-mt-5 text-red-500 text-center">
              {validationErrors.selectedFile}
            </p>
          )}
          {selectedFile && (
            <p className="text-center text-white mt-3">
              Selected file: {selectedFile.name}
            </p>
          )}

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
              onChange={(event) => setFbProfileLink(event.target.value)}
            />
          </div>

          {validationErrors.fbProfileLink && (
            <p className="-mt-5 text-red-500 text-center">
              {validationErrors.fbProfileLink}
            </p>
          )}

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
              onChange={(event) => setInstagramProfileLink(event.target.value)}
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
          {validationErrors.agreeTerms && (
            <p className="-mt-5 text-red-500 text-center">
              {validationErrors.agreeTerms}
            </p>
          )}

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="btn-bg text-center px-3 py-1 text-xl text-white font-bold uppercase rounded"
            >
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
