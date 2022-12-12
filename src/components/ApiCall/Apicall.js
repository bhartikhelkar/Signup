import React, { useEffect, useState } from "react";
import axios from "axios";

const Apicall = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    // api call
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(function (response) {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>User Infor</h2>

      {user &&
        Object.keys(user).map((item) => {
          return (
            <p>
              {item} : {user[item].toString()}
            </p>
          );
        })}
    </div>
  );
};

export default Apicall;
