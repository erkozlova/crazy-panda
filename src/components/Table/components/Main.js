import React from "react";
import Item from "./Item";

const Main = ({ dataPerPage, titles }) => (
  <tbody>
      {dataPerPage.map((item) => (
        <Item item={item} titles={titles} key={"Item" + item.number} />
      ))}
  </tbody>
);

export default Main;
