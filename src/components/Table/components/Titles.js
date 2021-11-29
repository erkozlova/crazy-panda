import React from "react";
import filter from "../../../filter.svg";

const Titles = ({ titles, sortColumn }) => (
  <div className="m-auto w-2/3 flex justify-around bg-gray-100 border-b-2">
    {titles.map((item) => (
      <div className="py-2 flex" key={item.key}>
        <button className="text-lg" onClick={() => sortColumn(item)}>
          {item.title}
        </button>
        <button className="ml-6">
          <img src={filter} alt="Фильтер" />
        </button>
      </div>
    ))}
  </div>
);

export default Titles;
