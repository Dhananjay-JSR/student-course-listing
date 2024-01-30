import { useQuery } from "@tanstack/react-query";
import FuzzySearch from "fuzzy-search";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import WindowHandler from "../components/WindowHandler";
import { SERVER_URL } from "../utils/constant";
import CourseSkeleton from "../components/CourseSkeleton";
import CourseInsight from "../components/CourseInsigt";

export default function CourseScreen() {
  const { isPending, data } = useQuery({
    queryKey: ["courseData"],
    refetchInterval: 1000,
    queryFn: () => fetch(SERVER_URL + "/course").then((res) => res.json()),
  });

  const [searchQuerry, setSearchQuerry] = useState("");
  const [FilteredData, setFilteredData] = useState("");

  return (
    <>
      <section className="overflow-y-auto px-4">
        {isPending ? (
          <div className="grid grid-cols-3 gap-4">
            {Array.from({
              length: 20,
            }).map(() => {
              return <CourseSkeleton />;
            })}
          </div>
        ) : (
          <>
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
            <div className=" grid grid-cols-3">
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
            </div>
          </>
        )}
      </section>
    </>
  );
}
