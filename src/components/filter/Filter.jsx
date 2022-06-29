import React from "react";
import Data from "../../data/users.json";
import { useState } from "react";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="filter-container">
      <input
        role="textbox"
        type="text"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <ul role="list">
        {Data.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((data) => {
          return <li role="listitem">{data.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Filter;
