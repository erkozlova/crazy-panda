import React, { useState } from 'react';
import Titles from './components/Titles';
import Navigation from './components/Navigation';
import Main from './components/Main';

const Table = ({titles, dataDefault}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(dataDefault);
  const itemsPerPage = 30;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  console.log(data, lastIndex, firstIndex);
  const dataPerPage = data.slice(firstIndex, lastIndex);
  // console.log('dataPerPage', dataPerPage);

  const navigate = (pageNumber) => {
    setCurrentPage(pageNumber); 
  };

  const sortColumn = (title) => {
    setData((data) => data.sort((a,b) => (a[title.id] > b[title.id] ? 1: -1)));
    console.log(data);
  }

  
  return (
    <div className='mt-6 mb-16'>
      <Titles titles={titles} sortColumn={sortColumn}/>
      <Main dataPerPage={dataPerPage} titles={titles}/>
      <Navigation count={Math.ceil(data.length/itemsPerPage)} navigate={navigate} />
    </div>
  );

}

export default Table;