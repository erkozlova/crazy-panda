import React, { FC } from 'react';
import Item from './Item';

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
    sort: number;
  }[];
}

const Main:FC<Props> = ({dataPerPage, titles}) => (
  <tbody>
    {dataPerPage.map((item) => (
      <Item item={item} titles={titles} key={'Item' + item.number} />
    ))}
  </tbody>
);

export default Main;
