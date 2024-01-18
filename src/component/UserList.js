import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [listOfUSer, setlistOfUSer] = useState();
  console.log(listOfUSer);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setlistOfUSer(res.data));
  }, []);
  return (
    <div className="coantainer">
      <h1>LISTES OF USERS </h1>

      <div className="cards-list">
        <div className="cards">
          {listOfUSer &&
            listOfUSer.map((users) => (
              <div className="card-items">
                <h2>
                  {" "}
                  <i class="fa-solid fa-user fa-bounce fa-xl"></i>
                  {users.name}
                </h2>
                <h2>{users.username}</h2>
                <h1>
                  {" "}
                  <i class="fa-regular fa-envelope fa-fade fa-xl"></i>
                  {users.email}{" "}
                </h1>
                <h3>
                  <i class="fa-solid fa-city fa-xl"></i>
                  {users.address.city}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;
