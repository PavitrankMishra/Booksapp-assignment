import { faClock } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Checkbox } from "./ui/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Availability = ({ userData }) => {
  return (
    <>
      <section className="rightPartInner w-full pb-4">
        <section className="leftPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
          <FontAwesomeIcon icon={faClock} size="2x" />
          <h1 className="text-xl font-semibold">Availability</h1>
        </section>
        <section className="leftPart1Body flex items-center justify-start flex-row flex-wrap ml-2 gap-2 pt-4">
          <section className="flex items-center justify-start flex-row gap-2 basis-1/4 ">
            {userData?.availability?.monday === true && (
              <Checkbox
                className="appearance-none border-gray-500"
                defaultChecked
              />
            )}
            {userData?.availability?.monday === false && (
              <Checkbox className="appearance-none border-gray-500" />
            )}
            <span>Mon</span>
          </section>
          <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
            {userData?.availability?.tuesday === true && (
              <Checkbox
                className="appearance-none border-gray-500"
                defaultChecked
              />
            )}
            {userData?.availability?.tuesday === false && (
              <Checkbox className="appearance-none border-gray-500" />
            )}
            <span>Tue</span>
          </section>
          <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
            {userData?.availability?.wednesday === true && (
              <Checkbox
                className="appearance-none border-gray-500"
                defaultChecked
              />
            )}
            {userData?.availability?.wednesday === false && (
              <Checkbox className="appearance-none border-gray-500" />
            )}
            <span>Wed</span>
          </section>
          <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
            {userData?.availability?.thursday === true && (
              <Checkbox
                className="appearance-none border-gray-500"
                defaultChecked
              />
            )}
            {userData?.availability?.thursday === false && (
              <Checkbox className="appearance-none border-gray-500" />
            )}
            <span>Thu</span>
          </section>
          <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
            {userData?.availability?.friday === true && (
              <Checkbox
                className="appearance-none border-gray-500"
                defaultChecked
              />
            )}
            {userData?.availability?.friday === false && (
              <Checkbox className="appearance-none border-gray-500" />
            )}
            <span>Fri</span>
          </section>
          <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
            {userData?.availability?.saturday === true && (
              <Checkbox
                className="appearance-none border-gray-500"
                defaultChecked
              />
            )}
            {userData?.availability?.saturday === false && (
              <Checkbox className="appearance-none border-gray-500" />
            )}
            <span>Sat</span>
          </section>
          <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
            {userData?.availability?.sunday === true && (
              <Checkbox
                className="appearance-none border-gray-500"
                defaultChecked
              />
            )}
            {userData?.availability?.sunday === false && (
              <Checkbox className="appearance-none border-gray-500" />
            )}
            <span>Sun</span>
          </section>
        </section>
        <section className="leftPart1Footer flex items-center justify-start ml-2 gap-2">
          <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
            {userData?.availability?.am === true && (
              <Checkbox
                className="appearance-none border-gray-500"
                defaultChecked
              />
            )}
            {userData?.availability?.am === false && (
              <Checkbox className="appearance-none border-gray-500" />
            )}
            <span>AM</span>
          </section>
          <section className="flex items-center justify-start flex-row gap-2 basis-1/4 ">
            {userData?.availability?.pm === true && (
              <Checkbox
                className="appearance-none border-gray-500"
                defaultChecked
              />
            )}
            {userData?.availability?.pm === false && (
              <Checkbox className="appearance-none border-gray-500" />
            )}
            <span>PM</span>
          </section>
        </section>
      </section>
    </>
  );
};

export default Availability;
