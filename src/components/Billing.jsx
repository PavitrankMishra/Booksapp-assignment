import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Billing = ({ userData }) => {
  return (
    <>
      <section className="leftPartInner  w-full pb-4">
        <section className="leftPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
          <FontAwesomeIcon icon={faLocationDot} size="2x" />
          <h1 className="text-xl font-semibold">Billing</h1>
        </section>
        <section className="leftPart1Body">
          <section className="w-full flex items-center justify-start  h-10 border-b-2 border-gray-300 ">
            <h1 className="w-1/4 text-left">Address1: </h1>
            <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
              {userData?.billingAddress?.address1 || "N/A"}
            </h1>
          </section>
          <section className="w-full flex items-center justify-start  h-10 border-b-2 border-gray-300">
            <h1 className="w-1/4 text-left">Address2: </h1>
            <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
              {userData?.billingAddress?.address2 || "N/A"}
            </h1>
          </section>
          <section className="w-full flex items-center justify-start h-10 border-b-2 border-gray-300">
            <h1 className="w-1/4 text-left">City: </h1>
            <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
              {userData?.billingAddress?.city || "N/A"}
            </h1>
          </section>
          <section className="w-full flex items-center justify-start h-10 border-b-2 border-gray-300">
            <h1 className="w-1/4 text-left">State: </h1>
            <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
              {userData?.billingAddress?.state || "N/A"}
            </h1>
          </section>
          <section className="w-full flex items-center justify-start h-10 border-b-2 border-gray-300">
            <h1 className="w-1/4 text-left">Zip: </h1>
            <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
              {userData?.billingAddress?.zip || "N/A"}
            </h1>
          </section>
        </section>
      </section>
    </>
  );
};

export default Billing;
