import React from "react";

const EnrolledStudent = () => {
  const random = Math.random() * 100;
  return (
    <button
      onClick={() => {
        window.open("https://www.dhananjaay.dev");
      }}
      className={`bg-[#191d1e]  p-1.5 rounded-full -ml-3 first:ml-0 `}
    >
      <img
        className="rounded-full"
        src={`https://i.pravatar.cc/40?u={${random.toString()}}`}
      />
    </button>
  );
};

const MemoizedEnrolledStudent = React.memo(EnrolledStudent);

export { MemoizedEnrolledStudent };
