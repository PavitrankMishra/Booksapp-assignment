import { faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const Documents = ({ userData }) => {
  return (
    <>
      <section className="rightPartInner w-full pb-4 sm:w-full">
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
                  <TableHead className="text-left w-32">Description</TableHead>
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
                      {new Date(d.expirateDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell className="whitespace-normal break-words text-left">
                      {new Date(d.startDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell className="whitespace-normal break-words text-left">
                      {new Date(d.uploadedAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
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

export default Documents;
