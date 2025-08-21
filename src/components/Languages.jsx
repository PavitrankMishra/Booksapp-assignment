import { faComment } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Languages = ({ userData }) => {
  return (
    <>
      <section className="leftPartInner  w-full pb-4">
        <section className="leftPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
          <FontAwesomeIcon icon={faComment} size="2x" />
          <h1 className="text-xl font-semibold">Spoken Languages</h1>
        </section>
        <section className="leftPart1Body">
          <section className="w-full flex items-center justify-start  h-10 border-b-2 border-gray-300 ">
            {userData?.spokenLanguages?.map((u, index) => (
              <h1 className="w-1/4 text-left" key={index}>
                {u}{" "}
              </h1>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Languages;
