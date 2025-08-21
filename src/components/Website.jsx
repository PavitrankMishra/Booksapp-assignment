import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Website = ({ userData }) => {
  return (
    <>
      <section className="leftPartInner  w-full pb-4">
        <section className="leftPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
          <FontAwesomeIcon icon={faDesktop} size="2x" />
          <h1 className="text-xl font-semibold">Websites</h1>
        </section>
        <section className="leftPart1Body">
          <section className="w-full flex items-center justify-start flex-col">
            {userData?.websites?.map((u, index) => (
              <section className="w-full flex items-center justify-start h-10 border-b-2 border-gray-300">
                <h1 className="w-1/4 text-left" key={index}>
                  {u}{" "}
                </h1>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Website;
