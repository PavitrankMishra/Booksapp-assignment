import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCircleDot,
  faClock,
  faComment,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import {
  faDesktop,
  faLink,
  faLocationDot,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Billing from "./Billing";
import Shipping from "./Shipping";
import { Languages } from "lucide-react";
import Website from "./Website";
import CustomFields from "./CustomFields";
import Documents from "./Documents";
import Capabilities from "./Capabilities";
import Availability from "./Availability";
import Services from "./Services";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const fetchUserDetails = async () => {
    try {
      const res = await fetch(
        "https://api.thenotary.app/directory/getUserDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "nandhakumar1411",
          }),
        }
      );

      const data = await res.json();
      console.log(data.userDirectory);
      setUserData(data.userDirectory);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <section className="homeContainer flex items-center justify-center w-full">
      {userData ? (
        <section className="dataContainer h-full m-2 w-full lg:w-full sm:w-full flex items-start justify-center py-6 rounded-md bg-blue-50 sm:flex-col lg:flex-row flex-col pr-4 sm:mx-4 sm:my-4">
          <section className="leftPart w-full lg:w-1/2 mx-2 flex items-start flex-col h-full sm:w-full sm:px-4">
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
            {/* <section className="leftPartInner  w-full pb-4">
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
            </section> */}
            <Billing userData={userData} />
            {/* <section className="leftPartInner  w-full pb-4">
              <section className="leftPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
                <FontAwesomeIcon icon={faLocationDot} size="2x" />
                <h1 className="text-xl font-semibold">Shipping</h1>
              </section>
              <section className="leftPart1Body">
                <section className="w-full flex items-center justify-start  h-10 border-b-2 border-gray-300 ">
                  <h1 className="w-1/4 text-left">Address1: </h1>
                  <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
                    {userData?.shippingAddress?.address1 || "N/A"}
                  </h1>
                </section>
                <section className="w-full flex items-center justify-start  h-10 border-b-2 border-gray-300">
                  <h1 className="w-1/4 text-left">Address2: </h1>
                  <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
                    {userData?.shippingAddress?.address2 || "N/A"}
                  </h1>
                </section>
                <section className="w-full flex items-center justify-start h-10 border-b-2 border-gray-300">
                  <h1 className="w-1/4 text-left">City: </h1>
                  <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
                    {userData?.shippingAddress?.city || "N/A"}
                  </h1>
                </section>
                <section className="w-full flex items-center justify-start h-10 border-b-2 border-gray-300">
                  <h1 className="w-1/4 text-left">State: </h1>
                  <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
                    {userData?.shippingAddress?.state || "N/A"}
                  </h1>
                </section>
                <section className="w-full flex items-center justify-start h-10 border-b-2 border-gray-300">
                  <h1 className="w-1/4 text-left">Zip: </h1>
                  <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
                    {userData?.shippingAddress?.zip || "N/A"}
                  </h1>
                </section>
              </section>
            </section> */}
            <Shipping userData={userData} />
            {/* <section className="leftPartInner  w-full pb-4">
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
            </section> */}
            <Languages userData={userData} />
            {/* <section className="leftPartInner  w-full pb-4">
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
            </section> */}
            <Website userData={userData} />
            {/* <section className="leftPartInner  w-full pb-4">
              <section className="leftPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
                <FontAwesomeIcon icon={faCircleDot} size="2x" />
                <h1 className="text-xl font-semibold">Custom Fields</h1>
              </section>
              <section className="leftPart1Body pt-4">
                <section className="w-full flex items-start justify-start border-b-2 border-gray-300">
                  <h1 className="w-1/4 text-left">Custom Field 1: </h1>
                  <h1 className="w-3/4 text-left border-l-2 pl-2 border-gray-300">
                    <span>
                      {userData?.customFields?.field1}{" "}
                      {userData?.customFields?.field2}
                    </span>
                  </h1>
                </section>
              </section>
            </section> */}
            <CustomFields userData={userData} />
          </section>
          <section className="rightPart w-full lg:w-1/2 mx-2 sm:w-full ">
            {/* <section className="rightPartInner w-full pb-4 sm:w-full">
              <section className="rightPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md ">
                <FontAwesomeIcon icon={faLink} size="2x" />
                <h1 className="text-xl font-semibold">Documents Link</h1>
              </section>
              <section className="leftPart1Body flex items-center justify-start flex-row flex-wrap gap-2">
                <section className="flex items-center justify-start flex-row gap-2 ">
                  <Table className="w-full table-fixed border-collapsed">
                    <TableHeader className="border-b-2 border-gray-300">
                      <TableRow>
                        <TableHead className="text-left">Type</TableHead>
                        <TableHead className="text-left w-32">
                          Description
                        </TableHead>
                        <TableHead className="text-left">Expiry </TableHead>
                        <TableHead className="text-left">Start </TableHead>
                        <TableHead className="text-left">Upload </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {userData?.documentLinks?.map((d, index) => (
                        <TableRow key={index}>
                          <TableCell className="whitespace-normal break-words text-left">
                            {d.documentType}
                          </TableCell>
                          <TableCell className=" whitespace-normal break-words text-left">
                            {d.description}
                          </TableCell>
                          <TableCell className="whitespace-normal break-words text-left">
                            {new Date(d.expirateDate).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </TableCell>
                          <TableCell className="whitespace-normal break-words text-left">
                            {new Date(d.startDate).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </TableCell>
                          <TableCell className="whitespace-normal break-words text-left">
                            {new Date(d.uploadedAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </section>
              </section>
            </section> */}
            <Documents userData={userData} />
            {/* <section className="rightPartInner w-full pb-4">
              <section className="rightPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
                <FontAwesomeIcon icon={faWrench} size="2x" />
                <h1 className="text-xl font-semibold">Capabilities</h1>
              </section>
              <section className="leftPart1Body flex items-center justify-start flex-row flex-wrap  pt-4 gap-2 ml-2">
                <section className="flex items-center justify-start flex-row gap-2 basis-1/4 ">
                  {userData?.capabilities?.csa === true && (
                    <Checkbox
                      className="appearance-none border-gray-500 "
                      defaultChecked
                    />
                  )}
                  {userData?.capabilities?.csa === false && (
                    <Checkbox className="appearance-none border-gray-500" />
                  )}
                  <span>CSA</span>
                </section>
                <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                  {userData?.capabilities?.attorney === true && (
                    <Checkbox
                      className="appearance-none border-gray-500"
                      defaultChecked
                    />
                  )}
                  {userData?.capabilities?.attorney === false && (
                    <Checkbox className="appearance-none border-gray-500" />
                  )}
                  <span>Attorney</span>
                </section>
                <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                  {userData?.capabilities?.fax === true && (
                    <Checkbox
                      className="appearance-none border-gray-500"
                      defaultChecked
                    />
                  )}
                  {userData?.capabilities?.fax === false && (
                    <Checkbox className="appearance-none border-gray-500" />
                  )}
                  <span>Fax</span>
                </section>
                <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                  {userData?.capabilities?.email === true && (
                    <Checkbox
                      className="appearance-none border-gray-500"
                      defaultChecked
                    />
                  )}
                  {userData?.capabilities?.email === false && (
                    <Checkbox className="appearance-none border-gray-500" />
                  )}
                  <span>Email</span>
                </section>
                <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                  {userData?.capabilities?.internet === true && (
                    <Checkbox
                      className="appearance-none border-gray-500"
                      defaultChecked
                    />
                  )}
                  {userData?.capabilities?.internet === false && (
                    <Checkbox className="appearance-none border-gray-500" />
                  )}
                  <span>Internet</span>
                </section>
                <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                  {userData?.capabilities?.mobileHotspot === true && (
                    <Checkbox
                      className="appearance-none border-gray-500"
                      defaultChecked
                    />
                  )}
                  {userData?.capabilities?.mobileHotspot === false && (
                    <Checkbox className="appearance-none border-gray-500" />
                  )}
                  <span>Mobile Hotspots</span>
                </section>
                <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                  {userData?.capabilities?.print === true && (
                    <Checkbox
                      className="appearance-none border-gray-500"
                      defaultChecked
                    />
                  )}
                  {userData?.capabilities?.print === false && (
                    <Checkbox className="appearance-none border-gray-500" />
                  )}
                  <span>Print</span>
                </section>
                <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                  {userData?.capabilities?.scanbacks === true && (
                    <Checkbox
                      className="appearance-none border-gray-500"
                      defaultChecked
                    />
                  )}
                  {userData?.capabilities?.scanbacks === false && (
                    <Checkbox className="appearance-none border-gray-500" />
                  )}
                  <span>Scanbacks</span>
                </section>
              </section>
            </section> */}
            <Capabilities userData={userData} />
            {/* <section className="rightPartInner w-full pb-4">
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
            </section> */}
            <Availability userData={userData} />
            {/* <section className="rightPartInner w-full pb-4">
              <section className="rightPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
                <FontAwesomeIcon icon={faCreditCard} size="2x" />
                <h1 className="text-xl font-semibold">Services</h1>
              </section>
              <section className="leftPart1Body flex items-center justify-start flex-row flex-wrap  pt-4 gap-2">
                <section className="flex items-center justify-start flex-row gap-2 ">
                  <Table className="w-full table-fixed border-collapsed border-1 border-gray-300 ">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Buyer Package</TableHead>
                        <TableHead className="border-l-1 border-gray-300">
                          Cost
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="border-b-1 border-gray-300">
                      {userData?.fullServices?.map((d, index) => (
                        <TableRow key={index}>
                          <TableCell className="text-left">{d.name}</TableCell>
                          <TableCell className=" whitespace-normal break-words border-l-1 border-gray-300 text-left">
                            {d.cost}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </section>
              </section>
            </section> */}
            <Services userData={userData} />
          </section>
        </section>
      ) : (
        <p>User not found</p>
      )}
    </section>
  );
};

export default Home;
