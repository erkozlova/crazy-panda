export const numbersArrayCreate= (pagesCount, currentPage) => {
  let pages = [];
  if (pagesCount > 5) {
    if (currentPage >= pagesCount - 2) {
      for (let i = pagesCount - 4; i <= pagesCount; i++) {
        pages = [...pages, i];
      }
    }
    if (currentPage > 3 && currentPage < pagesCount - 2) {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages = [...pages, i]
        if (i === pagesCount) break;
      }
    }
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages = [...pages, i]
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages = [...pages, i]
    }
  }
  return pages;
}