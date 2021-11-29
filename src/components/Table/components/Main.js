import React from 'react';
import Item from './Item';

// TODO: Если ты можешь не оборачивать в {}, то не делай этого. Переписать
const Main = ({dataPerPage, titles}) => {
  // console.log('Main', dataPerPage);
  return (
    <div>
      {
        // TODO: Где key?
        dataPerPage.map((item) => (<Item item={item} titles={titles}/>))
      }
    </div>
  );
};

export default Main;