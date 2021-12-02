import React, { FC } from 'react';
import Item from './Item';

type Element = { number: number; name: string; surname: string; age: number };

type Props = {
  dataPerPage: {
    number: number;
    name: string;
    surname: string;
    age: number;
  }[];
  titles: {
    title: string;
    id: string;
    key: string;
    sorter: (a:Element, b:Element) => number;
  }[];
};

const Main: FC<Props> = ({ dataPerPage, titles }) => (
  <tbody>
    {dataPerPage.map((item) => (
      <Item item={item} titles={titles} key={'Item' + item.number} />
    ))}
  </tbody>
);

export default Main;
