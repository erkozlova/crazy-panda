import React, { useMemo } from "react";
import { numbersArrayCreate } from "../../utils/numbersArrayCreate";
import "./Navigation.css";

const Navigation = ({ count, navigate, currentPage }) => {
  const numbers = useMemo(
    () => numbersArrayCreate(count, currentPage),
    [count, currentPage]
  );

  return (
    <div className="py-4 flex justify-end">
      <div className="mr-64 flex">
        {numbers.map((number) => (
          <button
            className={
              currentPage === number ? "page_number_active" : "page_number"
            }
            onClick={() => navigate(number)}
            key={"navigation" + number}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
