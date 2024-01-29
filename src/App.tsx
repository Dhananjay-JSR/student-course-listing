import { useEffect, useState } from "react";
import { mockData } from "./utils/MockData";
import FuzzySearch from "fuzzy-search";
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
// import { mockData } from "../server/index";
function App() {
  const [count, setCount] = useState(0);
  const NavBarData = ["DASHBOARD", "DISCOVER", "MESSAGES", "SETTINGS"] as const;
  const [selectedSideBar, setSelectedSideBar] =
    useState<(typeof NavBarData)[number]>("DASHBOARD");

  const NavBarData2 = ["Lesson 1.", "Lesson 2.", "Lesson 3."] as const;

  const [selectedSideBar2, setSelectedSideBar2] =
    useState<(typeof NavBarData2)[number]>("Lesson 1.");
  return (
    <>
      <section className="  h-screen flex">
        <div className="w-[230px] bg-[#17181a] min-h-screen h-full py-4 pl-6 pr-3">
          <nav className="text-white mb-2">Trainee</nav>
          <div className="flex flex-col justify-between h-[calc(100%-38px)]">
            <div className="grid grid-rows-4 bg-[#202425] gap-1 rounded-md py-2.5">
              <NavBtn
                comparison={selectedSideBar === "DASHBOARD"}
                onClick={() => {
                  setSelectedSideBar("DASHBOARD");
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
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </NavBtn>
            </div>

            <div className=" bg-[#202425]  rounded-md py-4">
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
                    fill-rule="evenodd"
                    d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                  />
                </svg>
                <span className="font-medium">
                  Progress <span className="font-normal">75%</span>
                </span>
              </div>
              <div className="grid grid-rows-3 gap-1 mt-2.5">
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
              </div>
            </div>
            <div>
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
            </div>
          </div>
        </div>
        <div className="w-[calc(100%-230px)] py-4 flex flex-col px-6">
          <nav className="text-white mb-2 w-full flex justify-between">
            <div className="flex text-gray-300 gap-3.5">
              <button>Courses</button>
              <button>Tutors</button>
              <button>Offers</button>
            </div>
            <div className="flex items-center">
              <Toggle />
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
                <span className="text-gray-400">
                  Hey, <span className="text-white">Dhananjay</span>
                </span>
                <button className="relative">
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
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
                </button>
              </div>
            </div>
          </nav>
          <FirstPreview />
          {/* <CouseDetailScreen /> */}
        </div>
      </section>
    </>
  );
}

function CouseDetailScreen() {
  const MOCKERY = mockData[0];
  return (
    <div className="overflow-y-auto">
      <div className="bg-[#17181a] flex h-56 w-full p-2 rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-auto rounded-lg"
        />
        <div className="px-2 text-white flex flex-col justify-evenly">
          <p className="text-gray-300">{MOCKERY.description}</p>
          <div className="flex justify-between">
            <div className="text-sm flex items-center gap-2">
              <span>
                Taught by{" "}
                <span className="underline">{MOCKERY.instructor}</span>
              </span>
              <img
                src="https://i.pravatar.cc/50"
                className="rounded-full w-8 h-8"
              />
            </div>
            <div className="text-sm flex items-center gap-2">
              <span>
                Mode <span className="underline">{MOCKERY.location}</span>
              </span>
            </div>
          </div>
          <div className="mt-2 flex items-end gap-3">
            <p className=" text-xl ">Duration</p>
            <span className="text-gray-400">{MOCKERY.duration}</span>
          </div>
        </div>
      </div>
      <div className="px-5">
        <h1 className="text-2xl first-letter:font-bold  text-gray-400 first-letter:text-3xl first-letter:text-white">
          {MOCKERY.name}
        </h1>
        <div className="relative">
          <div className="underline mb-2 text-lg text-white mt-4">
            Pre-requisites
          </div>
          <ul className="list-disc">
            {MOCKERY.prerequisites.map((data) => {
              return <li className="text-gray-400">{data}</li>;
            })}
          </ul>
          <div className="absolute top-1/2 -translate-y-1/2 flex flex-col text-white items-center right-0">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi hover:scale-105 active:scale-150 transition-all ease-in-out bi-heart-fill fill-red-500"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
              </svg>
            </button>
            <div>
              {MOCKERY.likes} <span className="text-gray-400">likes</span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="underline mb-2 text-lg text-white mt-4">Syllabus</div>
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
                {MOCKERY.syllabus.map((data) => {
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
            {MOCKERY.students.map((data) => {
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
  );
}

function FirstPreview() {
  return (
    <div className="flex-grow flex  overflow-hidden">
      <section className="w-2/3 px-3 overflow-y-auto flex flex-col justify-evenly">
        <div className=" flex items-center gap-8">
          <SectionTitle title={["Watch", "Now"]} />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-circle fill-red-400"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
              />
            </svg>
          </button>
          <WindowHandler />
        </div>
        <div className="text-xs text-gray-300">Studying streams</div>
        <div className="flex justify-between w-full mt-4">
          {Array.from({
            length: 10,
          }).map((_, index) => {
            const random = Math.random() * 100;
            return (
              <button
                onClick={() => {
                  window.open("https://www.dhananjaay.dev");
                }}
                className="bg-gradient-to-t from-violet-500 to-blue-500  p-0.5 rounded-full "
              >
                <img
                  className="rounded-full"
                  src={`https://i.pravatar.cc/40?u={${random.toString()}}`}
                />
              </button>
            );
          })}
        </div>
        <div className="mt-4">
          <div className="flex">
            <SectionTitle title={["Popular", "Today"]} />

            <WindowHandler />
          </div>
          <div className="mt-3.5 grid grid-cols-2 gap-4">
            <div className="">
              <div className="bg-[#202425] rounded-lg p-5">
                <SVGOne />
              </div>
              <button className="text-xs mt-2 px-3 text-gray-400 flex justify-between  w-full text-left">
                <span className="underline">Learn Marking Today </span>
                <span className="text-right no-underline">
                  CLICK NOW! {">"}
                </span>
              </button>
            </div>
            <div className="">
              <div className="bg-[#202425] rounded-lg p-5">
                <SVGTwo />
              </div>
              <button className="text-xs mt-2 px-3 text-gray-400 flex justify-between  w-full text-left">
                <span className="underline">Make your dream true</span>
                <span className="text-right no-underline">
                  CLICK NOW! {">"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex">
            <SectionTitle title={["Top", "Tutor"]} />

            <WindowHandler />
          </div>
          <div className="grid grid-cols-2 gap-4 grid-rows-2">
            {Array.from({
              length: 4,
            }).map(() => {
              const random = Math.random() * 100;
              return (
                <div className="bg-[#202425]  flex items-center  p-3 rounded-md">
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
            })}
          </div>
        </div>
      </section>
      <section className="w-1/3 px-3 overflow-y-auto">
        <div>
          <div className="flex">
            <SectionTitle title={["Search", "tutorials"]} />
            <WindowHandler />
          </div>
          <div className="flex mt-2">
            <input
              placeholder="Find the best tutorials "
              className="w-full mr-4 bg-[#202425] rounded-lg pl-3 text-sm text-white"
              type="text"
            />
            <button className="px-3 bg-[#323337] text-gray-300 py-1.5 rounded-lg">
              Search
            </button>
          </div>
        </div>

        {mockData.map((data, index) => {
          return (
            <div key={`${data.id}-${index}`} className="p-3 mb-4">
              <img
                className="w-full rounded-2xl"
                alt={`Study ${data.id}`}
                src={`${data.courseImg},education,${index}`}
              />
              <div className="text-white text-center text-lg">{data.name}</div>
              <div className="text-center text-sm text-white">
                {data.instructor}
              </div>
              <div className="flex my-2.5 justify-between items-center">
                <div className="bg-gradient-to-t from-violet-400 to-blue-500 w-fit px-2 py-0.5 rounded-lg font-medium">
                  {data.duration}
                </div>
                <div>
                  {data.enrollmentStatus == "Closed" ||
                  data.enrollmentStatus == "InProgress" ? (
                    <span className="bg-red-600 text-white px-2 py-1 rounded-md">
                      {data.enrollmentStatus}
                    </span>
                  ) : (
                    <>
                      <button className="bg-green-400 relative font-medium px-2 py-1 rounded-md">
                        {data.enrollmentStatus}
                        <span className="absolute -top-1.5 -right-1.5">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-400"></span>
                          </span>
                        </span>
                      </button>
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
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

function SVGTwo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width="854.55666"
      className="w-full h-auto"
      height="577.89722"
      viewBox="0 0 854.55666 577.89722"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect x="151.55666" y="268" width="110" height="123" fill="#ccc" />
      <polygon
        points="95.557 576 39.557 576 33.557 528 101.557 528 95.557 576"
        fill="#e6e6e6"
      />
      <path
        d="M380.72875,702.28371,378.839,728.11866a8.22428,8.22428,0,0,0,8.69988,8.80928l13.26993-.80373a4.19488,4.19488,0,0,0,3.8153-5.2044L397.25817,701.457Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#e6e6e6"
      />
      <path
        d="M491.72431,717.56077c15.6176,3.6534,26.77411,8.84633,34.103,15.87434a15.03539,15.03539,0,0,0,9.62359,4.1254c4.59653.24174,8.35492-.27349,11.17944-1.53511h.00045a4.43019,4.43019,0,0,0,2.62469-3.65076,4.50814,4.50814,0,0,0-1.88846-4.16687l-37.03954-26.3546-15.73318,6.294-3.67016,3.67016a3.63415,3.63415,0,0,0,.8002,5.74346Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#e6e6e6"
      />
      <path
        d="M443.66188,295.74594l-105.87329-.98031c.26623-15.42064,3.85407-30.56331,11.69669-44.11378,5.15076-8.89946,5.03948-18.58474,3.7982-26.7444-1.91555-12.592,2.53886-25.47548,12.43708-33.49119a39.916,39.916,0,0,1,26.84266-8.88134l2.0558.08566a40.00777,40.00777,0,0,1,32.87054,19.76983,33.32736,33.32736,0,0,1,3.96134,20.30073c-.67106,6.60129.93466,13.26982,4.6906,20.00186C442.62144,256.47558,444.02465,275.3918,443.66188,295.74594Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#2f2e41"
      />
      <path
        d="M514.49653,703.22772l-20.77878,5.42055-101.1836-220.4357,6.324,215.01515H378.07935c-22.2035-101.15879-62.29053-217.90681-44.26782-254.76585l107.50757-6.324Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#7e77ef"
      />
      <circle cx="218.90906" cy="69.68505" r="28.00618" fill="#ffb9b9" />
      <path
        d="M416.0232,282.23167l-46.07467-2.71028c4.51541-10.36377,6.31912-20.34363,4.51712-29.813H408.7958C408.718,256.979,412.33611,269.55581,416.0232,282.23167Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#ffb9b9"
      />
      <polygon
        points="272.211 289.217 171.028 296.445 181.417 117.115 199.034 112.146 218.909 116.663 238.784 106.725 251.432 111.243 272.211 289.217"
        fill="#7e77ef"
      />
      <path
        d="M360.91428,579.45849l-69.112-15.80994c20.5506-68.14818,57.57349-224.05122,45.623-279.61l36.137-16.26165Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#e6e6e6"
      />
      <path
        d="M327.48755,382.51184l-26.19932-16.26165,22.3434-65.4394a30.87113,30.87113,0,0,1,13.49426-16.02839l7.52674-4.35758-4.51713,65.95Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#e6e6e6"
      />
      <path
        d="M505.01057,564.552c-21.81327,12.62013-76.33909,19.65509-100.28018,10.8411-1.76169-61.57277-5.21664-235.739,5.87226-309.42306l39.7507,16.26165-3.6137,48.78495C427.73558,372.74951,482.91928,518.10538,505.01057,564.552Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#e6e6e6"
      />
      <polygon
        points="329.127 213.33 304.734 205.199 272.211 168.158 277.632 121.18 331.837 197.068 329.127 213.33"
        fill="#e6e6e6"
      />
      <path
        d="M425.40285,409.54533a6.78537,6.78537,0,0,0,8.10524,5.11221l20.706-4.68917-2.99259-13.21656-20.70643,4.68828a6.77693,6.77693,0,0,0-5.11221,8.10524Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#ffb9b9"
      />
      <path
        d="M416.0232,223.509c-15.55574-6.3965-30.9192-6.85936-46.07467-.90342l-6.324-22.58563h57.8192Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#2f2e41"
      />
      <path
        d="M444.02938,394.25637l11.74452,21.6822c19.7541-5.50955,36.87412-22.87878,53.30208-43.3644l-4.51713-14.4548-28.00617,7.2274Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#e6e6e6"
      />
      <path
        d="M435.44684,349.53683h-3.6137c0-51.11057-10.52349-86.7288-20.77877-86.7288l-.90343-3.6137c9.197,0,15.06047,14.824,18.35964,27.26023C432.9836,303.31394,435.44684,325.71693,435.44684,349.53683Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#3f3d56"
      />
      <path
        d="M352.33174,336.88888H348.718c0-46.80915,10.59628-75.8877,26.19933-75.8877l-.90343,3.6137C363.22136,264.61488,352.33174,286.96274,352.33174,336.88888Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#3f3d56"
      />
      <circle cx="260.91832" cy="189.38886" r="9.03425" fill="#3f3d56" />
      <path
        d="M337.87694,358.57108h-3.6137c0-12.95189,7.29489-23.48905,16.26165-23.48905v3.6137C343.5507,338.69573,337.87694,347.61176,337.87694,358.57108Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#3f3d56"
      />
      <path
        d="M366.78654,358.57108h-3.6137c0-10.95932-5.67376-19.87535-12.64795-19.87535V335.082C359.49165,335.082,366.78654,345.61919,366.78654,358.57108Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#3f3d56"
      />
      <circle cx="192.25802" cy="198.42311" r="3.6137" fill="#3f3d56" />
      <circle cx="163.34842" cy="198.42311" r="3.6137" fill="#3f3d56" />
      <polygon
        points="118.177 165.193 140.724 169.219 192.258 242.495 164.88 236.053 118.177 165.193"
        fill="#7e77ef"
      />
      <path
        d="M286.8996,325.34727a1.91768,1.91768,0,0,0-1.5735,2.971l48.17135,73.08788a1.91143,1.91143,0,0,0,1.16016.81035l22.4127,5.27321a1.91439,1.91439,0,0,0,2.00447-2.9648L306.1856,329.32314a1.90335,1.90335,0,0,0-1.22941-.783l-17.69531-3.16023A2.07607,2.07607,0,0,0,286.8996,325.34727Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#3f3d56"
      />
      <path
        d="M316.94907,377.60432l1.33881,13.48521,21.12638-2.09711a6.77573,6.77573,0,0,0-1.33837-13.48521Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#ffb9b9"
      />
      <path
        d="M298.57839,376.04229a17.42694,17.42694,0,0,0,17.40637,17.31065h3.47387l2.529-21.07565-20.93979-7.53839Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#e6e6e6"
      />
      <rect x="442.55666" width="412" height="217" fill="#e6e6e6" />
      <path
        d="M627.27833,366.05139h388v-193h-388Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#fff"
      />
      <rect x="484.55666" y="40" width="138" height="138" fill="#3f3d56" />
      <circle cx="589.55666" cy="99" r="4" fill="#7e77ef" />
      <circle cx="574.55666" cy="85" r="4" fill="#7e77ef" />
      <path
        d="M745.27833,260.05139a7.95011,7.95011,0,0,0-4.16785,1.181,25.12434,25.12434,0,0,0-3.86474-4.53583c.01708-.21344.03259-.42731.03259-.64514a7.99417,7.99417,0,0,0-13.54682-5.7569,24.50673,24.50673,0,0,0-6.46264-.05639c.00146-.06269.00946-.12366.00946-.18671a8,8,0,1,0-13.2594,6.01813,25.14047,25.14047,0,0,0-3.62439,3.83362,7.99939,7.99939,0,1,0-5.11621,14.14825l.02533-.00128c-.01313.33258-.02533.66546-.02533,1.00128a25.045,25.045,0,0,0,.72363,5.973,14.99382,14.99382,0,1,0,19.56885,18.57819,24.97131,24.97131,0,0,0,16.34241-2.42426,8.00091,8.00091,0,1,0,10.492-10.492,24.85715,24.85715,0,0,0,2.84784-10.63617l.02527.00128a8,8,0,0,0,0-16Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#7e77ef"
      />
      <rect x="530.55666" y="37" width="40" height="6" fill="#e6e6e6" />
      <rect x="660.55666" y="40" width="138" height="138" fill="#3f3d56" />
      <circle cx="755.75666" cy="131.8" r="1.8" fill="#7e77ef" />
      <circle cx="749.00666" cy="125.5" r="1.8" fill="#7e77ef" />
      <path
        d="M920.82833,292.85139a3.57749,3.57749,0,0,0-1.87553.53144,11.30621,11.30621,0,0,0-1.73914-2.04113c.00769-.096.01467-.19228.01467-.29031a3.59737,3.59737,0,0,0-6.09607-2.5906,11.02775,11.02775,0,0,0-2.90819-.02538c.00066-.02821.00426-.05565.00426-.084a3.6,3.6,0,1,0-5.96673,2.70816,11.31327,11.31327,0,0,0-1.631,1.72513,3.59972,3.59972,0,1,0-2.30229,6.36671l.0114-.00058c-.00591.14966-.0114.29946-.0114.45058a11.27051,11.27051,0,0,0,.32563,2.68783,6.74722,6.74722,0,1,0,8.806,8.36019,11.23714,11.23714,0,0,0,7.35409-1.09092,3.60041,3.60041,0,1,0,4.7214-4.7214,11.18577,11.18577,0,0,0,1.28153-4.78628l.01137.00058a3.6,3.6,0,0,0,0-7.2Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#7e77ef"
      />
      <circle cx="769.87848" cy="97.64171" r="1.8" fill="#7e77ef" />
      <circle cx="774.11285" cy="89.43667" r="1.8" fill="#7e77ef" />
      <path
        d="M940.52643,251.32953a3.57751,3.57751,0,0,0-1.01994-1.66125,11.3064,11.3064,0,0,0,1.49326-2.22732c.09454-.01863.18907-.038.28342-.06458a3.59737,3.59737,0,0,0,.84112-6.57006,11.02787,11.02787,0,0,0-.76391-2.80619c.02733-.007.05472-.011.082-.01867a3.6,3.6,0,1,0-4.22419-5.00922,11.3133,11.3133,0,0,0-2.10265-1.10227,3.59973,3.59973,0,1,0-6.75243-.49024l.00365.01082c-.14566.03488-.29134.0702-.4368.11117a11.27,11.27,0,0,0-2.49892,1.042,6.74722,6.74722,0,1,0-5.66009,10.74251,11.2371,11.2371,0,0,0,3.04357,6.783,3.60041,3.60041,0,1,0,5.82448,3.26477,11.1857,11.1857,0,0,0,4.95446-.06389l.00252.0111a3.6,3.6,0,1,0,6.93042-1.95173Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#7e77ef"
      />
      <circle cx="700.16182" cy="73.18149" r="1.8" fill="#7e77ef" />
      <circle cx="690.95808" cy="73.91887" r="1.8" fill="#7e77ef" />
      <path
        d="M867.72564,239.88258a3.57754,3.57754,0,0,0-.87207,1.74343,11.306,11.306,0,0,0-2.68-.0918c-.06574-.07044-.13212-.14048-.20451-.20657a3.59737,3.59737,0,0,0-6.02337,2.75542,11.02762,11.02762,0,0,0-1.97953,2.13065c-.02039-.01951-.03822-.04067-.05918-.05979a3.6,3.6,0,1,0-2.02291,6.23247,11.31355,11.31355,0,0,0,.17439,2.36765,3.59972,3.59972,0,1,0,3.14968,5.99292l.00726-.00881c.10655.10527.21348.21033.32508.31221a11.26967,11.26967,0,0,0,2.20457,1.57173,6.74722,6.74722,0,1,0,12.11144-.86672,11.23714,11.23714,0,0,0,4.15267-6.16668,3.60041,3.60041,0,1,0-.30355-6.67017,11.18565,11.18565,0,0,0-2.67072-4.17348l.00809-.008a3.6,3.6,0,1,0-5.31735-4.85445Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#7e77ef"
      />
      <rect x="706.55666" y="37" width="40" height="6" fill="#e6e6e6" />
      <path
        d="M197.89809,671.2944c14.41965,19.311,44.352,21.34353,44.352,21.34353s6.55352-29.27679-7.86613-48.5878-44.352-21.34353-44.352-21.34353S183.47844,651.98339,197.89809,671.2944Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#e6e6e6"
      />
      <path
        d="M271.35481,678.554c-9.51509,12.74275-29.26658,14.08395-29.26658,14.08395s-4.32447-19.31887,5.19063-32.06162,29.26658-14.084,29.26658-14.084S280.86991,665.81122,271.35481,678.554Z"
        transform="translate(-172.72167 -161.05139)"
        fill="#e6e6e6"
      />
      <rect y="575.6565" width="519.55666" height="2.24072" fill="#3f3d56" />
    </svg>
  );
}

function SVGOne() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width="821.67627"
      height="579.00958"
      className="w-full h-auto"
      viewBox="0 0 821.67627 579.00958"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M371.238,218.49521h-52.3999a19.01722,19.01722,0,0,0-19,19v56.81c-.66992-.04-1.33985-.1-2-.18a66.99888,66.99888,0,1,1,73.10009-77.63C371.0481,217.15518,371.1482,217.82523,371.238,218.49521Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#f2f2f2"
      />
      <path
        d="M989.83814,216.49521h-671a21.023,21.023,0,0,0-21,21v354a21.023,21.023,0,0,0,21,21h671a21.023,21.023,0,0,0,21-21v-354A21.023,21.023,0,0,0,989.83814,216.49521Zm19,375a19.01722,19.01722,0,0,1-19,19h-671a19.01722,19.01722,0,0,1-19-19v-354a19.01722,19.01722,0,0,1,19-19h671a19.01722,19.01722,0,0,1,19,19Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#3f3d56"
      />
      <path
        d="M956.83814,273.86484h-605a1,1,0,0,1,0-2h605a1,1,0,0,1,0,2Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#3f3d56"
      />
      <path
        d="M522.83814,569.49521a1,1,0,0,1-1-1v-329a1,1,0,1,1,2,0v329A1.00005,1.00005,0,0,1,522.83814,569.49521Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#3f3d56"
      />
      <path
        d="M673.83814,569.49521a1,1,0,0,1-1-1v-329a1,1,0,1,1,2,0v329A1.00005,1.00005,0,0,1,673.83814,569.49521Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#3f3d56"
      />
      <path
        d="M824.83814,569.49521a1,1,0,0,1-1-1v-329a1,1,0,1,1,2,0v329A1.00005,1.00005,0,0,1,824.83814,569.49521Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#3f3d56"
      />
      <path
        d="M425.75379,377.08261h-36.54a4.505,4.505,0,0,1-4.5-4.5V329.463a4.505,4.505,0,0,1,4.5-4.5h36.54a4.505,4.505,0,0,1,4.5,4.5v43.11963A4.505,4.505,0,0,1,425.75379,377.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#7e77ef"
      />
      <path
        d="M477.75379,500.08261h-36.54a4.505,4.505,0,0,1-4.5-4.5V452.463a4.505,4.505,0,0,1,4.5-4.5h36.54a4.505,4.505,0,0,1,4.5,4.5v43.11963A4.505,4.505,0,0,1,477.75379,500.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#7e77ef"
      />
      <path
        d="M595.75391,403.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V355.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,595.75391,403.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#7e77ef"
      />
      <path
        d="M748.75391,356.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V308.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,748.75391,356.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#7e77ef"
      />
      <path
        d="M889.75391,356.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V308.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,889.75391,356.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#7e77ef"
      />
      <path
        d="M954.75391,368.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V320.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,954.75391,368.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#e6e6e6"
      />
      <path
        d="M925.75391,445.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V397.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,925.75391,445.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#e6e6e6"
      />
      <path
        d="M801.75391,429.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V381.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,801.75391,429.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ff6584"
      />
      <path
        d="M730.75391,445.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V397.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,730.75391,445.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#e6e6e6"
      />
      <path
        d="M577.75391,513.08261h-36.54a4.50508,4.50508,0,0,1-4.5-4.5V465.463a4.50508,4.50508,0,0,1,4.5-4.5h36.54a4.50508,4.50508,0,0,1,4.5,4.5v43.11963A4.50508,4.50508,0,0,1,577.75391,513.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#e6e6e6"
      />
      <path
        d="M392.75379,456.08261h-36.54a4.505,4.505,0,0,1-4.5-4.5V408.463a4.505,4.505,0,0,1,4.5-4.5h36.54a4.505,4.505,0,0,1,4.5,4.5v43.11963A4.505,4.505,0,0,1,392.75379,456.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ff6584"
      />
      <path
        d="M495.75379,377.08261h-36.54a4.505,4.505,0,0,1-4.5-4.5V329.463a4.505,4.505,0,0,1,4.5-4.5h36.54a4.505,4.505,0,0,1,4.5,4.5v43.11963A4.505,4.505,0,0,1,495.75379,377.08261Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#e6e6e6"
      />
      <path
        d="M465.83814,257.49521h-57a4,4,0,0,1,0-8h57a4,4,0,0,1,0,8Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ccc"
      />
      <path
        d="M626.83814,257.49521h-57a4,4,0,0,1,0-8h57a4,4,0,0,1,0,8Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ccc"
      />
      <path
        d="M777.83814,257.49521h-57a4,4,0,0,1,0-8h57a4,4,0,0,1,0,8Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ccc"
      />
      <path
        d="M918.83814,257.49521h-57a4,4,0,0,1,0-8h57a4,4,0,0,1,0,8Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ccc"
      />
      <path
        d="M338.17107,550.38656A10.05577,10.05577,0,0,1,329.471,537.6561L303.83814,513.795l13.55277-3.43814,25.20573,20.44382a10.11027,10.11027,0,0,1-4.42557,19.58585Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ffb8b8"
      />
      <polygon
        points="184.404 566.253 196.664 566.253 202.496 518.965 184.402 518.965 184.404 566.253"
        fill="#ffb8b8"
      />
      <path
        d="M370.93892,723.24476h38.53073a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H385.82577a14.88686,14.88686,0,0,1-14.88686-14.88686v0A0,0,0,0,1,370.93892,723.24476Z"
        transform="translate(591.28005 1300.86337) rotate(179.99738)"
        fill="#2f2e41"
      />
      <polygon
        points="100.345 557.401 112.193 560.555 129.994 516.359 112.509 511.705 100.345 557.401"
        fill="#ffb8b8"
      />
      <path
        d="M285.30672,718.54064h38.53073a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H300.19358a14.88686,14.88686,0,0,1-14.88686-14.88686v0A0,0,0,0,1,285.30672,718.54064Z"
        transform="matrix(-0.96635, -0.25722, 0.25722, -0.96635, 222.9961, 1345.38778)"
        fill="#2f2e41"
      />
      <path
        d="M389.12281,717.795H370.41553a4.72981,4.72981,0,0,1-4.72607-4.293L354.333,595.5704a3.74767,3.74767,0,0,0-7.321-.71484L314.03858,705.05478a4.74216,4.74216,0,0,1-5.7,3.24609l-17.40308-4.35156a4.74747,4.74747,0,0,1-3.44727-5.78711c.28418-1.11035,28.41065-111.02832,28.65625-112.1582,6.37281-46.96778,13.99707-59.55371,18.093-66.31445.33911-.55958.65064-1.07422.93115-1.56055.35108-.6084,2.51245-6.64453,3.88355-10.56445a4.79,4.79,0,0,1,2.43506-2.97754c17.21069-8.80176,37.34741-2.709,43.10913-.63184a4.6821,4.6821,0,0,1,2.33813,1.81543c17.28467,26.07129,8.80225,177.49121,6.92627,207.581A4.75127,4.75127,0,0,1,389.12281,717.795Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#2f2e41"
      />
      <circle cx="151.68415" cy="234.02423" r="24.56103" fill="#ffb8b8" />
      <path
        d="M338.24365,512.3331l-.17651-.1709c-.33105-.32031-33.05566-32.37988-28.82056-62.02441,1.81128-12.67969,12.07032-20.78125,29.66773-23.43067a27.13473,27.13473,0,0,1,29.99976,19.1211l17.3999,59.48437Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ccc"
      />
      <path
        d="M321.49463,535.13583l-23.31836-23.17089a13.13671,13.13671,0,0,1-3.47973-12.39161l11.28857-45.91894A10.35411,10.35411,0,0,1,319.165,446.254a10.41072,10.41072,0,0,1,6.80908,12.79394L314.0896,499.44443l19.21826,20.63672Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ccc"
      />
      <path
        d="M446.56619,456.05763a10.05577,10.05577,0,0,1-14.88374,4.02868L400.553,476.22078l1.37589-13.70578,27.59693-17.07886a10.11028,10.11028,0,0,1,17.04041,10.62149Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ffb8b8"
      />
      <path
        d="M428.283,466.25982l-30.34625,13.11355a12.80885,12.80885,0,0,1-12.477-1.33846l-38.58893-27.64906A10.355,10.355,0,0,1,344.89728,435.4a10.41025,10.41025,0,0,1,14.40861-1.568l33.08845,26.042,26.30022-10.17517Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#ccc"
      />
      <path
        d="M344.91778,402.38974c3.03-3.79642,8.69082-4.00051,12.85285-6.50478,5.45181-3.28033,7.70574-10.61077,5.94888-16.726s-6.93808-10.881-12.8784-13.16029-12.5494-2.30748-18.81589-1.20568c-9.33021,1.64048-18.51612,5.99512-24.20655,13.56895s-7.13858,18.66583-1.98149,26.61243c2.37026,3.65236,6.02921,6.66714,6.97549,10.91712,1.2423,5.57954-2.6714,10.96083-6.86421,14.846-4.77673,4.42628-10.257,8.1334-14.44192,13.12294s-6.97564,11.80621-5.066,18.03215c1.6,5.21635,6.25591,9.05948,11.36143,10.98408s10.66607,2.2027,16.12124,2.30939c5.29718.10361,10.92363-.02522,15.386-2.88141,4.77715-3.05764,7.32781-8.8583,7.51626-14.52705s-1.70587-11.22252-4.24464-16.2945c-1.51323-3.02314-3.27267-5.95256-4.27818-9.18027s-1.1797-6.89016.43058-9.86274c1.69267-3.12465,5.1171-5.009,8.6041-5.69419.18117-.0356.37286-.06739.57335-.0957a7.39847,7.39847,0,0,0,6.33328-8.62766C343.8467,405.80819,343.881,403.68869,344.91778,402.38974Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#2f2e41"
      />
      <polygon
        points="483.229 567.3 470.969 567.3 465.137 520.012 483.231 520.013 483.229 567.3"
        fill="#a0616a"
      />
      <path
        d="M462.212,563.79684h23.64386a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H447.32509a0,0,0,0,1,0,0v0A14.88687,14.88687,0,0,1,462.212,563.79684Z"
        fill="#2f2e41"
      />
      <polygon
        points="572.184 553.413 561.033 558.506 536.079 517.917 552.538 510.399 572.184 553.413"
        fill="#a0616a"
      />
      <path
        d="M743.47033,716.96167h23.64388a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H728.58348a0,0,0,0,1,0,0v0A14.88685,14.88685,0,0,1,743.47033,716.96167Z"
        transform="translate(-422.52781 215.68843) rotate(-24.54855)"
        fill="#2f2e41"
      />
      <path
        d="M725.64338,568.3522a10.05579,10.05579,0,0,0,.80112-15.39851l14.4116-32.69992-18.30864,3.10281-10.87858,30.57671a10.11028,10.11028,0,0,0,13.9745,14.41891Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#a0616a"
      />
      <path
        d="M671.6094,715.32658H659.89748a4.51686,4.51686,0,0,1-4.48828-4.17383l-6.387-170.5586a4.49977,4.49977,0,0,1,4.92529-4.80468l67.73487,7.19336a4.5013,4.5013,0,0,1,4.06225,4.39355l1.41943,75.23535a3.49205,3.49205,0,0,0,.23389,1.19336l27.78516,72.05274a4.49892,4.49892,0,0,1-2.64307,5.84082l-11.86841,4.373a4.50108,4.50108,0,0,1-5.55737-2.16406l-34.13257-66.36914a4.475,4.475,0,0,1-.4043-1.14258l-5.83081-28.09375a3.49992,3.49992,0,0,0-6.904.3125L676.08034,711.33829A4.499,4.499,0,0,1,671.6094,715.32658Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#2f2e41"
      />
      <circle cx="488.27943" cy="222.17782" r="24.56103" fill="#a0616a" />
      <path
        d="M694.28491,556.18955a87.66432,87.66432,0,0,1-46.8728-14.19825l-.239-.165.02466-.28955,9.395-109.416a15.4205,15.4205,0,0,1,14.59887-14.06153c12.176-.55957,28.531.146,37.28589,6.66651,13.23071,9.85449,19.60767,24.69385,17.49561,40.7124-4.38013,33.21875.58178,78.0293,1.16186,83.0293l.042.36035-.32959.15137A77.26611,77.26611,0,0,1,694.28491,556.18955Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#7e77ef"
      />
      <path
        d="M727.02173,548.65292a5.007,5.007,0,0,1-3.68066-1.62207l-5.37256-5.86132a5.02581,5.02581,0,0,1-1.10913-4.79493l12.25073-41.46386-18.63989-39.14356a8.8323,8.8323,0,0,1-.60376-5.87939,8.809,8.809,0,0,1,16.31323-2.084l25.29468,41.042a11.95092,11.95092,0,0,1,.72,11.19824l-20.60986,45.665a4.98754,4.98754,0,0,1-3.76636,2.87988A5.05373,5.05373,0,0,1,727.02173,548.65292Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#7e77ef"
      />
      <path
        d="M553.89965,469.44778a10.05577,10.05577,0,0,0,14.99854-3.57767l35.438,4.59612L596.192,453.77776l-32.404-1.806a10.11028,10.11028,0,0,0-9.88836,17.476Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#a0616a"
      />
      <path
        d="M632.01123,478.5621a13.42535,13.42535,0,0,1-1.84472-.12744l-55.751-7.73242a5.54112,5.54112,0,0,1-4.25073-3.11133,5.65746,5.65746,0,0,1-.31787-.8291h-.00025a5.56408,5.56408,0,0,1,.575-4.43164l4.61353-7.64893a5.58411,5.58411,0,0,1,4.75586-2.686h.00757l48.59594.05566,36.29395-32.51709a9.86788,9.86788,0,0,1,6.10718-2.49951,9.83491,9.83491,0,0,1,7.37256,16.81543L641.95313,474.128A13.364,13.364,0,0,1,632.01123,478.5621Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#7e77ef"
      />
      <path
        d="M680.2335,404.52319c2.2445-5.19457,4.14379-12.11253-.16123-15.78514-2.49712-2.13029-6.09385-2.13469-9.36546-2.39972-9.21732-.74668-18.70553-4.98771-23.21077-13.06356s-1.98923-20.08442,6.51023-23.728c5.72923-2.456,12.29743-.78291,18.29443.91767l18.0058,5.10593c5.35006,1.51712,10.96737,3.19025,14.819,7.20149,6.14268,6.39729,5.6835,17.21166.80459,24.618s-12.22635,15.13079-20.63767,17.94281Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#2f2e41"
      />
      <path
        d="M928.64656,739.50479h-738.294a1.19069,1.19069,0,1,1,0-2.38137h738.294a1.19069,1.19069,0,1,1,0,2.38137Z"
        transform="translate(-189.16186 -160.49521)"
        fill="#3f3d56"
      />
    </svg>
  );
}

function SectionTitle({ title }: { title: string[] }) {
  return (
    <div className="text-gray-400">
      {title[0]} <span className="text-gray-500">{title[1]}</span>
    </div>
  );
}

function WindowHandler() {
  return (
    <button className="flex gap-1 ml-auto hover:bg-white/10 h-4 transition-all items-center w-4 justify-center  rounded-full">
      <span className="w-1 h-1 rounded-full bg-white"></span>
      <span className="w-1 h-1 rounded-full bg-white"></span>
    </button>
  );
}

function Toggle() {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    console.log(toggle);
  }, [toggle]);
  return (
    <>
      <label htmlFor="Togglecheckbox" className="mr-5">
        <input
          checked={toggle}
          onChange={() => {
            setToggle((prev) => !prev);
          }}
          id="Togglecheckbox"
          className="hidden peer"
          type="checkbox"
        />
        <div className="w-12 hover:cursor-pointer before:z-10 rounded-xl before:content-[''] relative before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2  peer-checked:before:translate-x-full peer-checked:before:ml-3 before:transition-all flex justify-between px-0.5 py-1 bg-[#323337] h-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi relative  delay-150   z-20 bi-brightness-high w-4 h-full ${
              toggle
                ? "fill-yellow-400 transition-all"
                : "fill-green-800 transition-all"
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi relative  z-20 bi-moon-stars w-4 h-full  ${
              !toggle
                ? "fill-yellow-400 transition-all"
                : "fill-green-800 transition-all"
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
          </svg>
        </div>
      </label>
    </>
  );
}

function NavBtn({
  children,
  title,
  onClick,
  comparison,
  className,
}: {
  className?: string;
  comparison: boolean;
  title: string;
  children?: React.ReactNode;
} & Pick<React.HTMLProps<HTMLButtonElement>, "onClick">) {
  return (
    <button
      onClick={onClick}
      className={` ${
        comparison === true
          ? "before:absolute before:content-[''] before:left-0 before:h-full before:bg-white before:w-1 before:rounded-lg before:bg-gradient-to-br before:from-indigo-500 before:via-purple-500 before:to-pink-500 "
          : ""
      } flex relative  items-center hover:bg-white/5 transition-all py-2 pl-5 text-gray-400 fill-gray-400 font-medium text-sm   ${className} ${
        children ? "gap-3" : ""
      }`}
    >
      {children}
      <span>{title}</span>
    </button>
  );
}

export default App;
