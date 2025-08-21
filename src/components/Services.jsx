import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = ({ userData }) => {
  return (
    <>
      <section className="rightPartInner w-full pb-4">
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
      </section>
    </>
  );
};

export default Services;
