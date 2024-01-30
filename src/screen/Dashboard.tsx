import { useQuery } from "@tanstack/react-query";
import FuzzySearch from "fuzzy-search";
import { useState } from "react";
import WindowHandler from "../components/WindowHandler";
import { REFETCH_INTERVAL, SERVER_URL } from "../utils/constant";
import SectionTitle from "../components/SectionTitle";
import { SVGOne, SVGTwo } from "../components/SVGResource";
import CourseSkeleton from "../components/CourseSkeleton";
import CourseInsight from "../components/CourseInsigt";

export default function Dashboard() {
  const { isPending, data } = useQuery({
    refetchInterval: REFETCH_INTERVAL,
    queryKey: ["courseData"],
    queryFn: () => fetch(SERVER_URL + "/course").then((res) => res.json()),
  });

  const [searchQuerry, setSearchQuerry] = useState("");
  const [FilteredData, setFilteredData] = useState("");

  return (
    <div className="flex-grow flex flex-col xl:flex-row  xl:overflow-hidden">
      <section className="xl:w-2/3 px-3 bg-[#191d1e] xl:overflow-y-auto flex flex-col justify-evenly">
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
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
              />
            </svg>
          </button>
          <WindowHandler />
        </div>
        <div className="text-xs text-gray-300">Studying streams</div>
        <div className="xl:flex grid gap-4 xl:gap-0 grid-cols-5 justify-between w-full mt-4">
          {Array.from({
            length: 10,
          }).map(() => {
            const random = Math.random() * 100;
            return (
              <button
                key={random.toString()}
                onClick={() => {
                  window.open("https://www.dhananjaay.dev");
                }}
                className="bg-gradient-to-t from-violet-500 to-blue-500 w-fit  p-0.5 rounded-full "
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
          <div className="mt-3.5 grid xl:grid-cols-2 gap-4">
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
            })}
          </div>
        </div>
      </section>
      <section className="w-1/3 px-3 xl:block hidden overflow-y-auto">
        {isPending ? (
          <>
            {Array.from({
              length: 10,
            }).map((_data, index) => {
              return <CourseSkeleton key={`${index}`} />;
            })}
          </>
        ) : (
          <>
            {" "}
            <div>
              <div className="flex">
                <SectionTitle title={["Search", "tutorials"]} />
                <WindowHandler />
              </div>
              <div className="flex mt-2">
                <input
                  value={searchQuerry}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchQuerry(value);
                  }}
                  placeholder="Find the best tutorials "
                  className="w-full mr-4 bg-[#202425] rounded-lg pl-3 text-sm text-white"
                  type="text"
                />
                <button
                  onClick={() => {
                    setFilteredData(searchQuerry);
                  }}
                  className="px-3 bg-[#323337] text-gray-300 py-1.5 rounded-lg"
                >
                  Search
                </button>
              </div>
            </div>
            {data
              .filter((Couses: any) => {
                if (FilteredData != "") {
                  const searcher = new FuzzySearch(
                    data,
                    ["name", "prerequisites", "instructor"],
                    {
                      caseSensitive: false,
                    }
                  );
                  const courseID = Couses.id.toString();
                  const result = searcher.search(FilteredData);
                  return result.find(
                    (d: any) => parseInt(d.id) == parseInt(courseID)
                  );
                }
                return true;
              })
              .map((data: any, index: number) => {
                return (
                  <CourseInsight key={`${data.id}-${index}`} data={data} />
                );
              })}
          </>
        )}
      </section>
    </div>
  );
}
