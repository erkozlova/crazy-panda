import React, { FC } from 'react';
import filter from '../../../filter.svg';

type Element = { number: number; name: string; surname: string; age: number };

type Title = {
  title: string;
  id: string;
  key: string;
  sorter: (a: Element, b: Element) => number;
};

type Props = {
  titles: Title[];
  sortColumn: (titles:Title) => void;
};

const Titles: FC<Props> = ({ titles, sortColumn }) => (
  <thead>
    <tr className="m-auto w-2/3 flex justify-around bg-gray-100 border-b-2">
      {titles.map((item) => (
        <td className="py-2 flex" key={item.key}>
          <button className="text-lg" onClick={() => sortColumn(item)}>
            {item.title}
          </button>
          <button className="ml-6">
            <img src={filter} alt="Фильтер" />
          </button>
        </td>
      ))}
    </tr>
  </thead>
);

export default Titles;
