import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { UnEnrollCourse, EnrollCourse } from "../context/reducers/ProfileSlice";
import { RootState } from "../context/store";
import { REFETCH_INTERVAL, SERVER_URL } from "../utils/constant";

const comments = [
  "This is a great post!",
  "I really enjoyed this.",
  "This was really helpful.",
  "Thanks for sharing!",
  "Great read.",
];

// Function to generate a random comment
function getRandomComment() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
}

export default function CourseViewer() {
  const Course = useLoaderData() as {
    courseId: string;
  };
  const { isPending, data } = useQuery({
    queryKey: ["course", Course.courseId],
    refetchInterval: REFETCH_INTERVAL,
    queryFn: () =>
      fetch(SERVER_URL + `/course/${parseInt(Course.courseId)}`).then((res) =>
        res.json()
      ),
  });
  const dispatch = useDispatch();
  const { EnrolledCourses } = useSelector(
    (state: RootState) => state.StudentProfile
  );
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(SERVER_URL + `/like/${Course.courseId}`, {
        method: "POST",
      });
    },
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ["course", Course.courseId],
      });
      const previousCourse = queryClient.getQueryData([
        "course",
        Course.courseId,
      ]);
      queryClient.setQueryData(["course", Course.courseId], (old: any) => {
        return {
          ...old,
          likes: old.likes + 1,
        };
      });
      return { previousCourse };
    },
    onError: (_err, _newCourse, context: any) => {
      queryClient.setQueryData(
        ["course", Course.courseId],
        context.previousCourse
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["course", Course.courseId],
      });
    },
  });

  return (
    <>
      {isPending ? (
        <div>
          <div className="animate-pulse">
            <div className="bg-gray-600 flex h-56 w-full p-2 rounded-lg"></div>
          </div>
          <div className="grid gap-4 w-72 mt-12">
            <div className="bg-gray-600 h-4  rounded-md"></div>
            <div className="bg-gray-600 h-4 rounded-md"></div>
            <div className="bg-gray-600 h-4 rounded-md"></div>
          </div>
        </div>
      ) : (
        <div className="overflow-y-auto">
          <div className="bg-[#17181a] flex h-56 w-full p-2 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-auto rounded-lg"
            />
            <div className="overflow-hidden h-full w-full">
              <div className="px-2 text-white  flex flex-col h-full pr-12 justify-evenly">
                <p className="text-gray-300">{data.description}</p>
                <div className="flex justify-between">
                  <div className="text-sm flex items-center gap-2">
                    <span>
                      Taught by{" "}
                      <span className="underline">{data.instructor}</span>
                    </span>
                    <img
                      src="https://i.pravatar.cc/50"
                      className="rounded-full w-8 h-8"
                    />
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <span>
                      Mode <span className="underline">{data.location}</span>
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="mt-2 flex items-end gap-3">
                    <p className=" text-xl ">Duration</p>
                    <span className="text-gray-400">{data.duration}</span>
                  </div>
                  {EnrolledCourses.find(
                    (cour) => cour.id == parseInt(Course.courseId)
                  ) ? (
                    <>
                      {" "}
                      <button
                        onClick={() => {
                          dispatch(UnEnrollCourse(data.id));
                        }}
                        className="bg-red-400 relative rounded-md font-medium px-2 py-1.5"
                      >
                        Unenroll
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(
                          EnrollCourse({
                            id: data.id,
                            numberofWeeks: data.syllabus.length,
                            duration: data.duration,
                            encrolledDate: new Date().toLocaleDateString(),
                          })
                        );
                      }}
                      className="bg-blue-600  relative rounded-md font-medium px-2 py-1.5"
                    >
                      ENROLL NOW
                      {/* <span className="absolute -top-1.5 -right-1.5"> */}
                      {/* <span className="relative flex h-3 w-3"> */}
                      <span className="animate-[ping_3s_cubic-bezier(0,_0,_0.2,_1)_infinite] absolute inline-flex h-full w-full rounded-full left-0  top-0 bg-blue-300 opacity-75"></span>
                      {/* <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-400"></span> */}
                      {/* </span> */}
                      {/* </span> */}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <h1 className="text-2xl first-letter:font-bold  text-gray-400 first-letter:text-3xl first-letter:text-white">
              {data.name}
            </h1>
            <div className="relative">
              <div className="underline mb-2 text-lg text-white mt-4">
                Pre-requisites
              </div>
              <ul className="list-disc">
                {data.prerequisites.map((data: any) => {
                  return <li className="text-gray-400">{data}</li>;
                })}
              </ul>
              <div className="absolute top-1/2 -translate-y-1/2 flex flex-col text-white items-center right-0">
                <button
                  onClick={() => {
                    // Update Likes
                    mutation.mutate();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi hover:scale-105 active:scale-150 transition-all ease-in-out bi-heart-fill fill-red-500"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                </button>
                <div>
                  {data.likes} <span className="text-gray-400">likes</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="underline mb-2 text-lg text-white mt-4">
                Syllabus
              </div>
              <div className="border  rounded-md p-2">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left px-1 border-b text-gray-300">
                        Week
                      </th>
                      <th className="text-left px-1 border-b text-gray-300">
                        Topic
                      </th>
                      <th className="text-left px-1 border-b text-gray-300">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.syllabus.map((data: any) => {
                      return (
                        <tr>
                          <td className="text-gray-400 px-1">{data.week}</td>
                          <td className="text-gray-400 px-1">{data.topic}</td>
                          <td className="text-gray-400 px-1">{data.content}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="">
              <div className="underline mb-2 text-lg text-white mt-4">
                Look What students have to say about this course
              </div>
              <div className="grid grid-cols-3 gap-4">
                {data.students.map((data: any) => {
                  const random = Math.random() * 100;
                  return (
                    <div className="bg-[#202425] rounded-md p-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://i.pravatar.cc/50?u=${random}`}
                          className="rounded-full w-8 h-8"
                        />
                        <div className="flex flex-col text-gray-400">
                          <span className="text-sm">{data.name}</span>
                          <span className="text-xs">{data.email}</span>
                        </div>
                      </div>
                      <div className="text-gray-400 mt-2">
                        {/* generate random text centent  using js*/}
                        {getRandomComment()}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
