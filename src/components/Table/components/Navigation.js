import React from 'react';

function numbersArrayCreate(pages, pagesCount, currentPage) {
  if(pagesCount>5) {
    if ( currentPage >= pagesCount-2 ) {
      for (let i=pagesCount-4;i<=pagesCount;i++) {
        pages.push(i);
      }
    }
    if(currentPage>3 && currentPage < pagesCount-2) {
      for (let i=currentPage-2; i<=currentPage+2;i++) {
        pages.push(i);
        if(i === pagesCount) break;
      }
    } 
    if (currentPage <= 3) {
      for(let i=1; i<=5;i++) {
        pages.push(i);
        if(i === pagesCount) break;
      }
    }
  } else {
    for (let i =1; i<=pagesCount; i++) {
      pages.push(i);
    }
  }
}

 const Navigation = ({count, navigate, currentPage}) => {
   const STYLE = 'w-8 h-8 mr-6 text-center border-2 border-opacity-50';
   const STYLE_ACTIVE = 'w-8 h-8 mr-6 text-center border-2 bg-gray-100';

   const numbers = [];

  numbersArrayCreate(numbers, count, currentPage);

  return (
    <div className = 'py-4 flex justify-end'>
      <div className = 'mr-64 flex'>
        {
          numbers.map((number) => (<button className = {currentPage === number? STYLE_ACTIVE : STYLE} onClick={() => navigate(number)}>{number}</button>))
        }
      </div>
    </div>
  );
 };

 export default Navigation;