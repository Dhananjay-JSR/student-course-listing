import React from "react";

const ProfileImage = () => {
  const random = Math.random() * 100;
  return (
    <div
      key={random.toString()}
      className="bg-[#202425]  flex items-center  p-3 rounded-md"
    >
      <div className="w-6  h-6">
        <img
          src={`https://i.pravatar.cc/50?u=${random.toString()}`}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col text-gray-400 ml-4">
        <span className="text-[12px] ">Dhananjay Senday</span>
        <span className="text-[10px]">programming</span>
      </div>
      <button className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor "
          className="bi bi-plus-circle bg-[#191d1e] rounded-full w-6 h-6 fill-blue-400"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>
    </div>
  );
};

const ProfileImageMemoized = React.memo(ProfileImage);

export default ProfileImageMemoized;
