import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../context/store";
import { useEffect, useState } from "react";
import { ImageVariants } from "./LoginScreen";
import { useQueries } from "@tanstack/react-query";
import { SERVER_URL } from "../utils/constant";

import moment from "moment";
import {
  UpdateCouseStatus,
  updateDetails,
} from "../context/reducers/ProfileSlice";

async function fetchCourseData(id: string) {
  return fetch(SERVER_URL + `/course/${parseInt(id)}`).then((res) =>
    res.json()
  );
}

export default function ProfileScreen() {
  const {
    Address,
    Email,
    EnrolledCourses,
    FirstName,
    LastName,
    Phone,
    ProfImage,
  } = useSelector((state: RootState) => state.StudentProfile);

  const [showImagePicker, setShowImagePicker] = useState(false);
  const CourseMetaData = EnrolledCourses.map((data) => data.id);
  const results = useQueries({
    queries: CourseMetaData.map((data) => {
      return {
        queryKey: ["courseData", data],
        queryFn: () => fetchCourseData(data.toString()),
      };
    }),
  });

  const dispatch = useDispatch();
  const [currentSelectedWeek, setCurrentSelectedWeek] = useState<null | number>(
    null
  );
  const [LocalselectedImage, setSelectedImage] = useState<
    (typeof ImageVariants)[number] | null
  >(ProfImage);
  const [localFirstName, setLocalFirstName] = useState(FirstName);
  const [localLastName, setLocalLastName] = useState(LastName);
  const [localEmail, setLocalEmail] = useState(Email);
  const [localAddress, setLocalAddress] = useState(Address);
  const [localPhone, setLocalPhone] = useState(Phone);

  const [diffDetected, setDiffDetected] = useState(false);

  useEffect(() => {
    if (
      localAddress == Address &&
      localEmail == Email &&
      localFirstName == FirstName &&
      localLastName == LastName &&
      localPhone == Phone &&
      LocalselectedImage == ProfImage
    ) {
      setDiffDetected(true);
    } else {
      setDiffDetected(false);
    }
  }, [
    localAddress,
    localEmail,
    localFirstName,
    localLastName,
    localPhone,
    LocalselectedImage,
    Address,
    Email,
    FirstName,
    LastName,
    Phone,
    ProfImage,
  ]);

  if (results.some((result) => result.isLoading)) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <section className="xl:overflow-y-auto ">
      <div className="relative">
        <div className="h-24 w-24 mx-auto  mt-3">
          {LocalselectedImage == null ? (
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
              src={LocalselectedImage}
              className="h-full w-full rounded-full"
            />
          )}
        </div>
        <button
          disabled={diffDetected}
          onClick={() => {
            dispatch(
              updateDetails({
                FirstName: localFirstName,
                LastName: localLastName,
                Email: localEmail,
                Address: localAddress,
                Phone: localPhone,
                ProfImage: LocalselectedImage,
                EnrolledCourses: EnrolledCourses,
              })
            );
          }}
          className={`  absolute top-0 right-0 rounded-sm px-1 py-1 font-medium hover:brightness-90 active:brightness-75 transition-all ${
            diffDetected ? " bg-gray-500 " : "bg-white"
          }`}
        >
          Save Profile
        </button>
      </div>
      <button
        onClick={() => {
          setShowImagePicker(!showImagePicker);
        }}
        className="h-8 relative p-1 my-4 bg-gray-400 rounded-md block mx-auto mb-2"
      >
        <span className="text-black font-medium">Update Profile Picture</span>

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
                  <img src={data} className="w-full h-full rounded-full" />
                </button>
              );
            })}
          </div>
        )}
      </button>
      <div className="grid md:grid-cols-2 gap-3 mt-4">
        <div className="flex gap-3">
          <span className="text-gray-300 w-32"> First Name</span>
          <input
            className="xl:w-64 w-56 px-3 py-0.5 rounded-md bg-gray-700 text-white"
            value={localFirstName ?? ""}
            onChange={(e) => {
              setLocalFirstName(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex gap-3">
          <span className="text-gray-300 w-32"> Last Name</span>
          <input
            className="xl:w-64 w-56 px-3 py-0.5 rounded-md bg-gray-700 text-white"
            value={localLastName ?? ""}
            onChange={(e) => {
              setLocalLastName(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex gap-3">
          <span className="text-gray-300 w-32"> Email</span>
          <input
            className="xl:w-64 w-56 px-3 py-0.5 rounded-md bg-gray-700 text-white"
            value={localEmail ?? ""}
            onChange={(e) => {
              setLocalEmail(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex gap-3">
          <span className="text-gray-300 w-32"> Address</span>
          <input
            className="xl:w-64 w-56 px-3 py-0.5 rounded-md bg-gray-700 text-white"
            value={localAddress ?? ""}
            onChange={(e) => {
              setLocalAddress(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex gap-3">
          <span className="text-gray-300 w-32"> Phone</span>
          <input
            className="xl:w-64 w-56 px-3 py-0.5 rounded-md bg-gray-700 text-white"
            value={localPhone ?? ""}
            onChange={(e) => {
              setLocalPhone(e.currentTarget.value);
            }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-white  mt-6 mb-1">Enrolled Courses </h2>
        <div>
          <table className="w-full">
            <thead>
              <tr className="text-white ">
                <th className="border-b">Number</th>
                <th className="border-b">Course Name</th>
                <th className="border-b">Instrutor Name</th>
                <th className="border-b">Remaining Week</th>
                <th className="border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {EnrolledCourses.map((data, index) => {
                const course: any = results.find(
                  (result) => result.data?.id == data.id
                )?.data;
                const enrolledDate = new Date(data.encrolledDate); // Convert to Date object
                const weeksDiff = moment(new Date()).diff(
                  moment(enrolledDate),
                  "weeks"
                );
                const RemainingDate =
                  parseInt(course?.duration.split("weeks")[0]) - weeksDiff;

                return (
                  <>
                    {" "}
                    <tr className="text-blue-300 ">
                      <td className="px-3 py-1">{index + 1}</td>
                      <td className="px-3 py-1">{course?.name}</td>
                      <td className="px-3 py-1">{course?.instructor}</td>
                      <td
                        className={` ${
                          RemainingDate < 0
                            ? " text-red-500 "
                            : " text-blue-300"
                        } px-3 py-1 `}
                      >
                        {RemainingDate}
                      </td>
                      <td className="px-3 py-1">
                        <button
                          onClick={() => {
                            if (currentSelectedWeek == index) {
                              setCurrentSelectedWeek(null);
                              return;
                            }
                            setCurrentSelectedWeek(index);
                          }}
                          className={`bg-blue-300 hover:bg-blue-500 transition-all text-black font-medium px-2 rounded-md ${
                            currentSelectedWeek == index &&
                            "bg-red-500 hover:bg-red-600 "
                          }`}
                        >
                          {currentSelectedWeek == index
                            ? "Close Report"
                            : "Update Status"}
                        </button>
                      </td>{" "}
                    </tr>
                    {currentSelectedWeek == index && (
                      <tr className="">
                        <td colSpan={6} className="">
                          <div className="text-sm flex  justify-center items-center my-1.5 text-gray-300 font-medium text-center">
                            Weekly Progress Report{" "}
                            <span className="text-[8px] w-32 inline-block">
                              (note to mark a week as completed click on
                              respective week)
                            </span>
                          </div>
                          <div className="flex gap-3 w-fit mx-auto">
                            {data.status.map((data, index) => {
                              return (
                                <div className="flex flex-col">
                                  <button
                                    onClick={() => {
                                      dispatch(
                                        UpdateCouseStatus({
                                          id: course?.id,
                                          status: !data,
                                          week: index,
                                        })
                                      );
                                    }}
                                    className={`w-10 h-6 block ${
                                      data == false
                                        ? "bg-red-500"
                                        : " bg-green-500"
                                    } `}
                                  ></button>
                                  <div className="text-gray-300">
                                    week {index + 1}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
