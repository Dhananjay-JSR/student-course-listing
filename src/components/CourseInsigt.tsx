import { Link } from "react-router-dom";
import { MemoizedEnrolledStudent } from "./RandStudents";

export default function CourseInsight({
  data,
}: {
  data: {
    id: string;
    name: string;
    instructor: string;
    duration: string;
    thumbnail: string;
    enrollmentStatus: string;
    students: string[];
    likes: string;
  };
}) {
  return (
    <div className="p-3 mb-4 flex flex-col justify-around">
      <img
        className="w-full rounded-2xl h-40"
        alt={`Study ${data.id}`}
        src={data.thumbnail}
      />
      <div className="text-white text-center text-base">{data.name}</div>
      <div className="text-center text-sm text-gray-400">{data.instructor}</div>
      <div className="flex my-2.5 justify-between items-center">
        <div className="bg-gradient-to-t from-violet-400 to-blue-500 w-fit px-2 py-0.5 rounded-lg font-medium">
          {data.duration}
        </div>
        <div>
          {data.enrollmentStatus == "Closed" ||
          data.enrollmentStatus == "InProgress" ? (
            <span className="bg-gray-400 text-white px-2 py-1 rounded-md">
              {data.enrollmentStatus}
            </span>
          ) : (
            <>
              <Link
                to={`/dashboard/course/${data.id}`}
                className="bg-blue-600 text-white relative font-medium px-2 py-1 rounded-md"
              >
                {data.enrollmentStatus}
                <span className="absolute -top-1.5 -right-1.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
                  </span>
                </span>
              </Link>{" "}
            </>
          )}
        </div>
      </div>
      <div>
        <div className="text-gray-400 text-xs text-center">
          enrolled students
        </div>
        <div className="mx-auto w-fit">
          {data.students.map(() => {
            return <MemoizedEnrolledStudent />;
          })}
        </div>
      </div>
      <div className="text-gray-300 flex justify-between">
        <span>Like Count</span>
        <div className="flex items-center gap-2 ">
          <div>{data.likes}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-heart-fill ${
              parseInt(data.likes) != 0 ? "fill-red-400" : "fill-gray-400"
            }`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
