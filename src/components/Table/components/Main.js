import React from 'react';
import Item from './Item';

const Main = ({dataPerPage, titles}) => {
  // console.log('Main', dataPerPage);
  return (
    <div>
      {
        dataPerPage.map((item) => (<Item item={item} titles={titles}/>))
      }
    </div>
  );
};

export default Main;