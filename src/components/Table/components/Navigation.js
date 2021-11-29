import React from 'react';

// TODO: Вынести в отдельный файл
function numbersArrayCreate(pages, pagesCount, currentPage) {
  if (pagesCount > 5) {
    if (currentPage >= pagesCount - 2) {
      for (let i = pagesCount - 4; i <= pagesCount; i++) {
        pages.push(i);
      }
    }
    if (currentPage > 3 && currentPage < pagesCount - 2) {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
}

const Navigation = ({ count, navigate, currentPage }) => {
  // TODO: Мне кажется в tailwind так не делают. Так не работают подсказки. Если ты хочешь что-то вынеси в отдельную обертку, то используй @apply.
  const STYLE = 'w-8 h-8 mr-6 text-center border-2 border-opacity-50';
  const STYLE_ACTIVE = 'w-8 h-8 mr-6 text-center border-2 bg-gray-100';

  // TODO: Где useState?
  const numbers = [];

  // TODO: Ты че мутируешь входные данные?
  numbersArrayCreate(numbers, count, currentPage);

  return (
    <div className='py-4 flex justify-end'>
      <div className='mr-64 flex'>
        {
          // TODO: Где key?
          numbers.map((number) => (<button className={currentPage === number ? STYLE_ACTIVE : STYLE} onClick={() => navigate(number)}>{number}</button>))
        }
      </div>
    </div>
  );
};

export default Navigation;