import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PersonalDetails = () => {
  return (
    <>
      <section className="leftPartInner w-full pb-4  ">
        <section className="leftPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
          <FontAwesomeIcon icon={faAddressCard} size="2x" />
          <h1 className="text-xl font-semibold">Name & Company</h1>
        </section>
        <section className="leftPart1Body ">
          <section className="w-full flex items-center justify-start  h-10 border-b-2 border-gray-300 ">
            <h1 className="w-1/4 text-left">Name: </h1>
            <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
              Jonny Albert
            </h1>
          </section>
          <section className="w-full flex items-center justify-start  h-10 border-b-2 border-gray-300">
            <h1 className="w-1/4 text-left">Company Name: </h1>
            <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
              N/A
            </h1>
          </section>
          <section className="w-full flex items-center justify-start h-10 border-b-2 border-gray-300">
            <h1 className="w-1/4 text-left">Is Business Since: </h1>
            <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
              N/A
            </h1>
          </section>
        </section>
      </section>
    </>
  );
};

export default PersonalDetails;
