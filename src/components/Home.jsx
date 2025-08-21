import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Billing from "./Billing";
import Shipping from "./Shipping";
import Languages from "./Languages";
import Website from "./Website";
import CustomFields from "./CustomFields";
import Documents from "./Documents";
import Capabilities from "./Capabilities";
import Availability from "./Availability";
import Services from "./Services";
import PersonalDetails from "./PersonalDetails";

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
            <PersonalDetails />
            <Billing userData={userData} />
            <Shipping userData={userData} />
            <Languages userData={userData} />
            <Website userData={userData} />
            <CustomFields userData={userData} />
          </section>
          <section className="rightPart w-full lg:w-1/2 mx-2 sm:w-full ">
            <Documents userData={userData} />
            <Capabilities userData={userData} />
            <Availability userData={userData} />
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
