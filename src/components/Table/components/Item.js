import React from "react";

const Item = ({ item, titles }) => (
  <div className="m-auto w-2/3 py-2 flex justify-around bg-gray-50 border-b-2 border-opacity-50">
    {titles.map((title) => (
      <div className="w-1/6" key={title.key + "item" + item.number}>
        {item[title.id]}
      </div>
    ))}
  </div>
);

export default Item;
