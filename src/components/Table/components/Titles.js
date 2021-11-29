import React from 'react';
import filter from '../../../filter.svg';

const Titles = ({titles, sortColumn}) => {
  return (
    <div className="m-auto w-2/3 flex justify-around bg-gray-100 border-b-2">
      {titles.map((item) => (
        <>
          <button className='w-1/6 py-2 text-lg' onClick={() => sortColumn(item)}>{item.title}</button>
          <button><img src={filter} alt='Фильтер'/></button>
        </>
      ))}
    </div>
  );
};

export default Titles;