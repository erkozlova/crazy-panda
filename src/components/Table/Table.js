import React, { useCallback, useMemo, useState } from "react";
import Titles from "./components/Titles";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import { ITEMS_PER_PAGE } from "../utils/constants";

const Table = ({ titles, dataDefault }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(dataDefault);
  const [sortFlag, setSortFlag] = useState(() =>
    titles.reduce((prev, curr) => {
      prev[curr.id] = 1;
      return prev;
    }, {})
  );

  const dataPerPage = useMemo(
    () =>
      data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      ),
    [data, currentPage]
  );

  const navigate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const sortColumn = useCallback(
    (title) => {
      switch (sortFlag[title.id]) {
        case 0:
          setData(dataDefault);
          setSortFlag((sortFlag) => {
            return { ...sortFlag, [title.id]: 1 };
          });
          break;
        case 1:
          setData((data) => [...data].sort(title.sorter));
          setSortFlag((sortFlag) => {
            return { ...sortFlag, [title.id]: -1 };
          });
          break;
        case -1:
          setData((data) => [...data].sort(title.sorter).reverse());
          setSortFlag((sortFlag) => {
            return { ...sortFlag, [title.id]: 0 };
          });
          break;
        default:
      }
    },
    [dataDefault, sortFlag]
  );

  return (
    <div className="mt-6 mb-16">
      <Titles titles={titles} sortColumn={sortColumn} />
      <Main dataPerPage={dataPerPage} titles={titles} />
      <Navigation
        count={Math.ceil(data.length / ITEMS_PER_PAGE)}
        navigate={navigate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Table;
