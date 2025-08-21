import React, { useState, useEffect } from "react";

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
      console.log(data);
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <section className="homeContainer">
      {userData ? (
        <p>User found</p>
      ) : (
        <p>User not found</p>
      )}
    </section>
  );
};

export default Home;
