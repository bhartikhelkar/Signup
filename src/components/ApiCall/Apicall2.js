import React, { useEffect, useState } from "react";
import axios from "axios";
import { jsonplaceholder } from "../../api/typecode";

const Apicall2 = () => {
  const [user, setUser] = useState({});

  const fetchData = () => {
    jsonplaceholder("/todos/1")
      .then(function (response) {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={() => fetchData()}>Fetch Data</button>
      <h2>User Infor</h2>

      {Object.keys(user).length == 0 ? (
        <p>No Data Found</p>
      ) : (
        Object.keys(user).map((item, index) => {
          return (
            <p key={index}>
              {item} : {user[item].toString()}
            </p>
          );
        })
      )}
    </div>
  );
};

export default Apicall2;
