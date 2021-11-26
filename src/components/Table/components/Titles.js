import React from 'react';

const Titles = ({titles, sortColumn}) => {
  return (
    <div className="m-auto w-2/3 flex justify-around bg-gray-100 border-b-2">
      {titles.map((item) => (
        <button className='w-1/6 py-2 text-lg' onClick={() => sortColumn(item)}>{item.title}</button>
      ))}
    </div>
  );
};

export default Titles;