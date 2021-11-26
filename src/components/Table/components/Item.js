import React from 'react';

const Item = ({item, titles}) => {
 return (
  <div className="m-auto w-2/3 py-2 flex justify-around bg-gray-50 border-b-2 border-opacity-50">
    {
      titles.map((title) => {
        return (
          <div className="w-1/6">{item[title.id]}</div>
        );
      })
    }
  </div>
 );
};

export default Item;