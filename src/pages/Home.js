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

const CustomAlert2 = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center pb-10">
    <div className="btn-bg p-6 rounded-lg mx-2 lg:w-1/3 max-h-screen overflow-y-auto">
      <button className="text-white flex ml-auto mb-2" onClick={onClose}>
        <IoCloseSharp size={33} className="bg-black rounded-full p-1" />
      </button>
      {/* <p className="text-white text-xl">{message}</p> */}
      <h2 className="text-white text-2xl font-bold font-dm-sans text-gradient-black">
        Terms and Conditions of Eco Park Selfie/Reel Uploads
      </h2>
      <h2 className="text-white text-xl my-2 font-semibold">
        1. Acceptance of Terms
      </h2>
      <p className="text-white text-base">
        By accessing or using the selfie/reel upload feature on the Eco Park
        website, you agree to comply with and be bound by these terms and
        conditions. If you do not agree to these terms, please refrain from
        using this service.
      </p>
      <h2 className="text-white text-xl my-2 font-semibold">2. User Content</h2>
      <p className="text-white text-base mb-2">
        a. By submitting a selfie or reel, you grant Eco Park a non-exclusive,
        royalty-free, worldwide, perpetual license to use, reproduce,
        distribute, and display the content on its Facebook page and other
        promotional materials.
      </p>
      <p className="text-white text-base">
        b. You affirm that you have the right to grant such a license and that
        the content does not infringe on any third-party rights.
      </p>

      <h2 className="text-white text-xl my-2 font-semibold">
        3. Personal Information
      </h2>
      <p className="text-white text-base mb-2">
        Eco Park may collect and store personal information, including but not
        limited to, your Facebook and Instagram links. This information will be
        used solely for the purpose of tagging and promoting your content on
        social media.
      </p>

      <h2 className="text-white text-xl my-2 font-semibold">
        4. Facebook and Instagram Tagging
      </h2>
      <p className="text-white text-base mb-2">
        a. By providing your Facebook and Instagram links, you authorize Eco
        Park to tag you in the uploaded content on its Facebook page.
      </p>
      <p className="text-white text-base">
        b. Eco Park is not responsible for any consequences arising from the
        tagging process.
      </p>

      <h2 className="text-white text-xl my-2 font-semibold">
        5. User Responsibilities
      </h2>
      <p className="text-white text-base mb-2">
        a. Users are responsible for the content they submit and must ensure
        that it complies with all applicable laws and regulations.
      </p>
      <p className="text-white text-base">
        b. Eco Park reserves the right to remove, edit, or refuse to publish any
        content that violates these terms or is deemed inappropriate.
      </p>

      <h2 className="text-white text-xl my-2 font-semibold">6. Disclaimers</h2>
      <p className="text-white text-base mb-2">
        a. Eco Park is not responsible for the accuracy, completeness, or
        reliability of any user-generated content.
      </p>
      <p className="text-white text-base">
        b. Eco Park is not liable for any damages or losses resulting from the
        use of the selfie/reel upload feature.
      </p>

      <h2 className="text-white text-xl my-2 font-semibold">
        6. Modifications
      </h2>
      <p className="text-white text-base mb-2">
        Eco Park reserves the right to modify, suspend, or terminate the
        selfie/reel upload feature or these terms at any time without prior
        notice.
      </p>
    </div>
  </div>
);

const CustomAlert3 = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center pb-10">
    <div className="btn-bg p-6 rounded-lg mx-2 lg:w-1/3 max-h-screen overflow-y-auto">
      <button className="text-white flex ml-auto mb-2" onClick={onClose}>
        <IoCloseSharp size={33} className="bg-black rounded-full p-1" />
      </button>
      {/* <p className="text-white text-xl">{message}</p> */}
      <h2 className="text-white text-2xl font-bold font-dm-sans text-gradient-black">
        Steps to share your facebook profile url
      </h2>
      <h2 className="text-gradient-black text-xl my-2 font-semibold">
        1. Log In to Facebook:
      </h2>

      <p className="text-white text-base mb-2">
        a. Open your web browser and go to Facebook.
      </p>
      <p className="text-white text-base">
        b. Log in with your Facebook credentials if you are not already logged
        in.
      </p>

      <h2 className="text-gradient-black text-xl my-2 font-semibold">
        2. Go to Your Profile:
      </h2>
      <p className="text-white text-base mb-2">
        Once logged in, click on your name or profile picture in the top
        navigation to go to your profile.
      </p>

      <h2 className="text-gradient-black text-xl my-2 font-semibold">
        3. Find Your Facebook Profile URL:
      </h2>
      <p className="text-white text-base mb-2">
        Look at the address bar of your browser. The URL in the address bar is
        your Facebook profile URL. It typically looks like
        https://www.facebook.com/yourusername.
      </p>

      <h2 className="text-gradient-black text-xl my-2 font-semibold">
        4. Copy the URL:
      </h2>
      <p className="text-white text-base mb-2">
        Click on the address bar to select the URL, or right-click on it and
        choose "Copy" from the context menu.
      </p>

      <h2 className="text-gradient-black text-xl my-2 font-semibold">
        5. Share the URL:
      </h2>
      <p className="text-white text-base mb-2">
        You can now share your Facebook profile URL by pasting it into the Enter
        your facebook profile link input, a Facebook post, message, email, or
        any other platform where you want to share it.
      </p>
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

  const [showCustomAlert2, setShowCustomAlert2] = useState(false);

  const [showCustomAlert3, setShowCustomAlert3] = useState(false);

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

  const handleCloseCustomAlert2 = () => {
    setShowCustomAlert2(false);
  };

  const handleCloseCustomAlert3 = () => {
    setShowCustomAlert3(false);
  };

  return (
    <>
      {showCustomAlert && (
        <CustomAlert
          message="Thank you! If your reel/photo gets selected, one of our officers will send you free tickets on Facebook. Have a good life!"
          onClose={handleCloseCustomAlert}
        />
      )}

      {showCustomAlert2 && <CustomAlert2 onClose={handleCloseCustomAlert2} />}

      {showCustomAlert3 && <CustomAlert3 onClose={handleCloseCustomAlert3} />}

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

          <div>
            <h2
              className="text-white text-sm text-center cursor-pointer mb-4 underline hover:text-cyan-700"
              onClick={() => setShowCustomAlert3(true)}
            >
              Steps to share your facebook profile link/url
            </h2>
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
              onChange={(event) => setInstagramProfileLink(event.target.value)}
            />
          </div>

          {/* Checkbox for agreeing to terms and conditions */}
          <div className="flex justify-center items-center w-4/5 m-auto">
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
          <p
            className="text-white text-sm text-center cursor-pointer mb-4"
            onClick={() => setShowCustomAlert2(true)}
          >
            Read terms & conditions
          </p>
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
          className={`flex flex-row items-center absolute justify-center w-full bottom-0 py-2 bg-black`}
        >
          <h2 className={`text-sm text-white`}>Powered by : </h2>

          <img src={hidcoLogo} className="w-20 ml-2" alt="HIDCO" />
        </div>
      </div>
    </>
  );
}

export default Home;
