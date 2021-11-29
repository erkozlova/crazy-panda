import React from "react";
import Item from "./Item";

const Main = ({ dataPerPage, titles }) => (
  <div>
    {dataPerPage.map((item) => (
      <Item item={item} titles={titles} key={"Item" + item.number} />
    ))}
  </div>
);

export default Main;
