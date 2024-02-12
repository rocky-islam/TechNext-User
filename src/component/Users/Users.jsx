import React, { useEffect, useState } from "react";
import User from "../User/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  // console.log(query);
  // console.log(users.filter(user => user.firstName.toLowerCase().includes('te')));
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  // console.log(users);
  return (
    <div>
      <div className="">
        <label className="form-control inline-block w-full">
          <div className="label">
            <span className="label-text text-lg">Search User Here</span>
          </div>
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-6/12 mx-3"
          />
        </label>
        <div className="flex sm:flex-col md:flex-row gap-10 items-center justify-center my-5">
          <label className="flex items-center">
            <span className="label-text">Sort By Name</span>
            <input type="checkbox" name="name" id=""  className="checkbox"/>
          </label>
          <label className="flex items-center">
            <span className="label-text">Sort By Email</span>
            <input type="checkbox" name="email" id=""  className="checkbox"/>
          </label>
          <label className="flex items-center">
            <span className="label-text">Sort By Company</span>
            <input type="checkbox" name="company" id=""  className="checkbox"/>
          </label>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-2xl font-medium">All User Here</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* length:{users.length}  */}
        {users
          .filter((user) => user.firstName.toLowerCase().includes(query))
          .map((user) => (
            <User user={user} key={user.id}></User>
          ))}
      </div>
    </div>
  );
};

export default Users;
