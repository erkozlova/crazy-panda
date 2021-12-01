import React, { FC } from 'react';

type Props = {
  item: {
    number: number;
    name: string;
    surname: string;
    age: number;
  };
  titles: {
    title: string;
    id: string;
    key: string;
    sort: number;
  }[];
};

const Item: FC<Props> = ({ item, titles }) => (
  <tr className="m-auto w-2/3 py-2 flex justify-around bg-gray-50 border-b-2 border-opacity-50">
    {titles.map((title) => (
      <td className="w-1/6" key={title.key + 'item' + item.number}>
        {item[title.id]}
      </td>
    ))}
  </tr>
);

export default Item;
