import React, { useState } from 'react';
import Titles from './components/Titles';
import Navigation from './components/Navigation';
import Main from './components/Main';

const Table = ({titles, dataDefault}) => {
  const sortFlagDefault = titles.reduce((prev, curr) => {
    prev[curr.id] = 1;
    return prev;
  },{});

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(dataDefault);
  const [sortFlag, setSortFlag] = useState(sortFlagDefault);

  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const dataPerPage = data.slice(firstIndex, lastIndex);

  const navigate = (pageNumber) => {
    setCurrentPage(pageNumber); 
  };

  const sortColumn = (title) => {
    switch(sortFlag[title.id]) {
      case 0: 
        setData(dataDefault);
        setSortFlag((sortFlag) => { return {...sortFlag, [title.id]: 1};});
        break;
      case 1:
        setData((data) => [...data].sort(title.sorter));
        setSortFlag((sortFlag) => { return {...sortFlag, [title.id]: -1};});
        break;
      case -1: 
        setData((data) => [...data].sort(title.sorter).reverse());
        setSortFlag((sortFlag) => { return {...sortFlag, [title.id]: 0};});
        break;
      default:
    };
  }

  
  return (
    <div className='mt-6 mb-16'>
      <Titles titles={titles} sortColumn={sortColumn}/>
      <Main dataPerPage={dataPerPage} titles={titles}/>
      <Navigation count={Math.ceil(data.length/itemsPerPage)} navigate={navigate} currentPage={currentPage}/>
    </div>
  );

}

export default Table;