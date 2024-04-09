import { useState } from "react";
import { auth } from "../../config/firebase";

import {
  User,
  sendEmailVerification,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { TrimSection } from "./TrimSection";
import { useNavigate } from "react-router-dom";

interface updatedProfile {
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
}

function Account({ logout, setLogout, handleLogout }: TrimSection) {
  const user: User | null = auth.currentUser;
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newDisplayName, setNewDisplayName] = useState("");
  const navigate = useNavigate();

  //console.log(user);

  const handleUpdateChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      if (newEmail !== "") {
        updateEmail(user, newEmail)
          .then(() => {
            console.log("Email updated successfully");
            sendEmailVerification(user).then(() => {
              console.log("Email verification send");
            });
            return;
          })
          .catch((error) => {
            console.error("Error updating email:", error);
          });
      }

      if (newPassword !== "") {
        updatePassword(user, newPassword)
          .then(() => {
            console.log("Password updated successfully");
          })
          .catch((error) => {
            console.error("Error updating password", error);
          });
      }

      if (newDisplayName !== "") {
        const updatedProfile: updatedProfile = {};
        if (newDisplayName !== "") updatedProfile.displayName = newDisplayName;

        updateProfile(user, updatedProfile)
          .then(() => {
            console.log("Profile updated successfully");
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
        toast.success(
          "Profile Updated Successfully reload page if it doesnt display",
          {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
              fontSize: "1rem",
            },
          }
        );
      }
    } else {
      return;
    }
  };

  const handleLog = () => {
    setLogout(false);
    navigate("/login");
    handleLogout();
  };
  return (
    <>
      <div className="md:pl-10 pl-4 w-full pt-12 md:pt-0 pr-4 md:pr-0">
        <h3 className="text-2xl font-medium pb-8">Account Information</h3>
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="flex flex-col gap-8 md:basis-[30%] basis-[100%]">
            <div className="flex flex-col gap-2">
              <label className="text-xl font-normal">Username</label>
              <p>{user?.displayName}</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-normal">Email</label>
              <p>{user?.email}</p>
            </div>
            <div className="md:mt-24 mt-4">
              <button
                onClick={() => setLogout(true)}
                className="text-white bg-validRed rounded-md px-4 py-2 cursor-pointer hover:bg-white text-lg hover:text-validRed duration-300 border border-validRed"
              >
                Logout
              </button>
            </div>
          </div>
          <form
            className="flex flex-col gap-8 basis-[50%]"
            onSubmit={(e) => handleUpdateChange(e)}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-normal">Username</label>
              <input
                value={newDisplayName}
                type="text"
                name="displayName"
                onChange={(e) => setNewDisplayName(e.target.value)}
                className="border focus:outline-navBlack px-2 py-[2px] rounded-[4px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-normal">Email</label>
              <input
                type="email"
                name="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="border focus:outline-navBlack px-2 py-[2px] rounded-[4px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-normal">Password</label>
              <input
                type="password"
                name="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border focus:outline-navBlack px-2 py-[2px] rounded-[4px]"
              />
            </div>
            <div className="flex items-end justify-end">
              <input
                type="submit"
                value="Update Profile"
                className="text-white bg-blue rounded-md px-2 py-2 cursor-pointer hover:bg-white hover:text-blue duration-300 border border-blue"
              />
            </div>
          </form>
        </div>
      </div>
      {logout && (
        <div className="bg-blue rounded-lg px-20 py-12 fixed top-[30vh] md:left-[30vw] lg:left-[35vw] sm:left-[18vw] left-6 mr-7 md:mr-0 z-50 logout-box">
          <div className="flex flex-col gap-5">
            <p className="text-white text-xl text-center">
              Are you sure you want to logout
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleLog}
                className="text-textBlack text-[15px] bg-white px-12 py-2 rounded-lg transition"
              >
                Yes
              </button>
              <button
                onClick={() => setLogout(false)}
                className="text-white text-[15px] bg-navBlack px-12 py-2 rounded-lg transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Account;
