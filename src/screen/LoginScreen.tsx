import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactLogo from "../assets/react.svg";
import { updateDetails } from "../context/reducers/ProfileSlice";
export const ImageVariants = [
  "https://i.pravatar.cc/50?u=selectID1",
  "https://i.pravatar.cc/50?u=selectID2",
  "https://i.pravatar.cc/50?u=selectID3",
  "https://i.pravatar.cc/50?u=selectID4",
  "https://i.pravatar.cc/50?u=selectID5",
  "https://i.pravatar.cc/50?u=selectID6",
] as const;
export function LoginScreen() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof ImageVariants)[number] | null
  >(null);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <section className="  h-screen flex flex-col">
      <nav className="text-gray-300 flex justify-between items-center bg-[#17181a] w-full border-b border-gray-300 text-right  px-3 font-mono h-fit py-2">
        <img src={ReactLogo} />
        <span> Course-Demy</span>
      </nav>
      <div className="flex-grow grid place-content-center">
        <div className="w-72 h-96  py-4 flex flex-col justify-around items-center rounded-md bg-[#17181a]">
          <div className="text-sm font-semibold text-gray-100">
            Create Profile
          </div>
          {/* <img  /> */}
          <div>
            <button
              onClick={() => {
                setShowImagePicker(!showImagePicker);
              }}
              className="w-8 h-8 relative p-1 block mx-auto mb-2 border rounded-full"
            >
              {selectedImage == null ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor "
                  className="bi bi-person fill-gray-400 w-full h-full"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              ) : (
                <img
                  src={selectedImage}
                  className="w-full h-full rounded-full"
                />
              )}
              {showImagePicker && (
                <div className="absolute grid grid-cols-3  left-0 grid-rows-2 w-36 gap-3 bg-[#191d1e] p-3 rounded-md ">
                  {ImageVariants.map((data) => {
                    return (
                      <button
                        className="w-8 h-8 rounded-full"
                        onClick={() => {
                          setSelectedImage(data);
                          setShowImagePicker(false);
                        }}
                      >
                        <img
                          src={data}
                          className="w-full h-full rounded-full"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </button>

            <div
              className={`text-sm text-gray-400 ${
                selectedImage != null ? "invisible" : ""
              }`}
            >
              <span>Pick Profile Pic</span>{" "}
            </div>
          </div>
          <div>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={FirstName}
              className=" bg-[#202425] rounded-sm text-gray-400 text-sm py-1.5 px-2"
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={LastName}
              className=" bg-[#202425] rounded-sm text-gray-400 text-sm py-1.5 px-2"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={Email}
              type="email"
              className=" bg-[#202425] rounded-sm text-gray-400 text-sm py-1.5 px-2"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={Address}
              type="text"
              className=" bg-[#202425] rounded-sm text-gray-400 text-sm py-1.5 px-2"
              placeholder="Enter Address"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={Phone}
              type="tel"
              className=" bg-[#202425] rounded-sm text-gray-400 text-sm py-1.5 px-2"
              placeholder="Enter Phone"
            />
          </div>
          <button
            onClick={() => {
              console.log("Dispatching State");
              dispatch(
                updateDetails({
                  Address: Address,
                  Email: Email,
                  EnrolledCourses: [],
                  FirstName: FirstName,
                  LastName: LastName,
                  Phone: Phone,
                  ProfImage: selectedImage,
                })
              );
              console.log("Dispatched");
              navigate("/dashboard");
            }}
            className="mt-2 bg-[#323337] text-gray-300 px-2 py-1 rounded-md hover:scale-105 active:brightness-150 active:scale-125 transition-all"
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
}
