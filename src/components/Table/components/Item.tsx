import React, { FC } from 'react';

type Element = { number: number; name: string; surname: string; age: number };

type Props = {
  item: Record<string, number | string>;
  titles: {
    title: string;
    id: string;
    key: string;
    sorter: (a:Element, b:Element) => number;
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
