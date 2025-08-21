import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomFields = ({ userData }) => {
  return (
    <>
      <section className="leftPartInner  w-full pb-4">
        <section className="leftPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
          <FontAwesomeIcon icon={faCircleDot} size="2x" />
          <h1 className="text-xl font-semibold">Custom Fields</h1>
        </section>
        <section className="leftPart1Body pt-4">
          <section className="w-full flex items-start justify-start border-b-2 pb-2 border-gray-300">
            <h1 className="w-1/4 text-left">Custom Field 1: </h1>
            <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300 ">
              <span>
                {userData?.customFields?.field1}{" "}
                {userData?.customFields?.field2}
              </span>
            </h1>
          </section>
        </section>
      </section>
    </>
  );
};

export default CustomFields;
