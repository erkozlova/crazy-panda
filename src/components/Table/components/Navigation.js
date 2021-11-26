import React from 'react';

 const Navigation = ({count, navigate}) => {
   const numbers = [];

  for(let i = 1;i < count + 1;i++) {
    numbers.push(i);
  }

  return (
    <div className = 'py-4 flex justify-end'>
      <div className = 'mr-64 flex'>
        {
          numbers.map((number) => (<button className = 'w-8 h-8 mr-6 text-center border-2 border-opacity-50' onClick={() => navigate(number)}>{number}</button>))
        }
      </div>
    </div>
  );
 };

 export default Navigation;