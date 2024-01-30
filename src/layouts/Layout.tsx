import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import type { RootState } from "../context/store";
import NavBtn from "../components/NavBtn";
import { ToggleComponent } from "../components/Toggle";
export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const NavBarData = ["DASHBOARD", "DISCOVER", "MESSAGES", "SETTINGS"] as const;

  const [selectedSideBar, setSelectedSideBar] =
    useState<(typeof NavBarData)[number]>("DASHBOARD");

  useEffect(() => {
    if (location.pathname.includes("course")) {
      setSelectedSideBar("DISCOVER");
    }
  }, [location]);

  // const NavBarData2 = ["Lesson 1.", "Lesson 2.", "Lesson 3."] as const;

  // const [selectedSideBar2, setSelectedSideBar2] =
  //   useState<(typeof NavBarData2)[number]>("Lesson 1.");

  const { FirstName, ProfImage, EnrolledCourses } = useSelector(
    (state: RootState) => state.StudentProfile
  );
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <>
      <section className="  xl:h-screen relative flex">
        <div
          className={`w-[230px]  xl:shadow-none  absolute xl:static z-40 transition-all  bg-[#17181a] min-h-screen h-full py-4 pl-6 pr-3 ${
            showSideBar
              ? " shadow-[0_0_0_10000px_rgba(0,0,0,.5)] "
              : "-translate-x-full xl:translate-x-0"
          }`}
        >
          <nav className="text-white mb-2 flex justify-between">
            Trainee
            <button
              onClick={() => {
                setShowSideBar(!showSideBar);
              }}
              className="text-white xl:hidden block p-2 rounded-full border h-10 w-10"
            >
              X
            </button>
          </nav>
          <div className="flex flex-col justify-between h-[calc(100%-38px)]">
            <div className="grid grid-rows-4 bg-[#202425] gap-1 rounded-md py-2.5">
              <NavBtn
                comparison={selectedSideBar === "DASHBOARD"}
                onClick={() => {
                  setSelectedSideBar("DASHBOARD");
                  navigate("/dashboard");
                }}
                title="Dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-controller"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z" />
                  <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27" />
                </svg>
              </NavBtn>
              <NavBtn
                comparison={selectedSideBar === "DISCOVER"}
                onClick={() => {
                  setSelectedSideBar("DISCOVER");
                  navigate("/dashboard/course");
                }}
                title="Discover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-compass"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                </svg>
              </NavBtn>
              <NavBtn
                comparison={selectedSideBar === "MESSAGES"}
                onClick={() => {
                  setSelectedSideBar("MESSAGES");
                }}
                title="Messages"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chat-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                </svg>
              </NavBtn>
              <NavBtn
                comparison={selectedSideBar === "SETTINGS"}
                onClick={() => {
                  setSelectedSideBar("SETTINGS");
                }}
                title="Settings"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </NavBtn>
            </div>

            <div className=" bg-[#202425]  rounded-md py-4 overflow-y-auto">
              <div className="flex items-center pl-5 gap-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-graph-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                  />
                </svg>
                <span className="font-medium">
                  Progress <span className="font-normal">Report</span>
                </span>
              </div>
              {EnrolledCourses != null &&
                EnrolledCourses.map((data, index) => {
                  return (
                    <div key={data.id} className="ml-5 my-1 text-gray-400">
                      <div className="text-sm">
                        Course {index + 1} Completion
                      </div>
                      <div className="text-xs mb-1 font-medium text-right w-[75%]">
                        {(
                          (data.status.filter((data) => data == true).length /
                            data.status.length) *
                          100
                        ).toFixed(2)}{" "}
                        %
                      </div>
                      <div
                        className="h-1 bg-gradient-to-r from-violet-400 via-green-400 to-red-400 rounded-full transition-all"
                        style={{
                          width: `${
                            (data.status.filter((data) => data == true).length /
                              data.status.length) *
                            100 *
                            0.75
                          }%`,
                        }}
                      ></div>
                    </div>
                  );
                })}
              {/* <div className="grid grid-rows-3 gap-1 mt-2.5">
                <NavBtn
                  comparison={selectedSideBar2 === "Lesson 1."}
                  className="text-xs py-1.5 before:from-green-300 before:via-green-100 before:to-green-700 "
                  onClick={() => {
                    setSelectedSideBar2("Lesson 1.");
                  }}
                  title="Lesson 1."
                />
                <NavBtn
                  className="text-xs py-1.5 before:from-green-300 before:via-green-100 before:to-green-700 "
                  onClick={() => {
                    setSelectedSideBar2("Lesson 2.");
                  }}
                  comparison={selectedSideBar2 === "Lesson 2."}
                  title="Lesson 2."
                />
                <NavBtn
                  className="text-xs py-1.5 before:from-green-300 before:via-green-100 before:to-green-700 "
                  onClick={() => {
                    setSelectedSideBar2("Lesson 3.");
                  }}
                  comparison={selectedSideBar2 === "Lesson 3."}
                  title="Lesson 3."
                />
              </div> */}
            </div>
            {/* <div>
              <div className="flex items-center gap-1 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gem fill-orange-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
                </svg>
                <span className="text-white">Achievements</span>
                <WindowHandler />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#323337] rounded-md px-2 py-2 grid gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-airplane-engines-fill fill-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0" />
                  </svg>
                  <div className="text-xs">
                    <span className="text-gray-400 font-medium">
                      1% progress
                      <span className="font-normal">
                        1 of 8 <span className="text-gray-400">completed</span>
                      </span>
                    </span>
                  </div>
                </div>

                <div className="bg-[#323337] rounded-md px-2 py-2 grid gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor "
                    className="bi bi-alt fill-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5m10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5" />
                  </svg>
                  <div className="text-xs">
                    <span className="text-gray-400 font-medium">
                      1% progress
                      <span className="font-normal">
                        1 of 8 <span className="text-gray-400">completed</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className=" xl:w-[calc(100%-230px)] w-full  py-4 flex h-screen flex-col px-6">
          <nav className="text-white mb-2 w-full flex flex-col-reverse xl:flex-row gap-3 xl:gap-0 justify-between">
            <div className="flex text-gray-300 justify-around xl:justify-start gap-3.5">
              <button>Courses</button>
              <button>Tutors</button>
              <button>Offers</button>
            </div>
            <div className="flex items-center justify-around">
              <ToggleComponent />
              <button className="bg-[#323337]  p-1.5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bell"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
              </button>
              <div className="flex items-center gap-6 ml-6">
                <span className="text-gray-400 select-none">
                  Hey,{" "}
                  <span className="text-white">{FirstName ?? "untitled"}</span>
                </span>
                <Link to={"profile"} className="relative">
                  {ProfImage == null ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person w-8 h-8 rounded-full"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                  ) : (
                    <>
                      <img
                        src={ProfImage}
                        alt="Hello"
                        className="w-8 h-8 rounded-full "
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        className="bi bi-plus-circle-fill absolute left-6 bottom-0 fill-yellow-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                      </svg>
                    </>
                  )}
                </Link>
              </div>
              <button
                onClick={() => {
                  setShowSideBar(!showSideBar);
                }}
                className="ml-10 xl:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </button>
            </div>
          </nav>
          <Outlet />
          {/* <FirstPreview /> */}
          {/* <CouseDetailScreen /> */}
        </div>
      </section>
    </>
  );
}
