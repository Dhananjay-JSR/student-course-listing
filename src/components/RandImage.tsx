import React from "react";

const ImageGen = () => {
  const random = Math.random() * 100;
  return (
    <button
      key={random.toString()}
      onClick={() => {
        window.open("https://github.com/Dhananjay-JSR/student-course-listing");
      }}
      className="bg-gradient-to-t from-violet-500 to-blue-500 w-fit  p-0.5 rounded-full "
    >
      <img
        className="rounded-full"
        src={`https://i.pravatar.cc/40?u={${random.toString()}}`}
      />
    </button>
  );
};

const MemoizedImageGen = React.memo(ImageGen);

export default MemoizedImageGen;
