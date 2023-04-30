import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="btn-pagination">
        <ArrowBackIosNewIcon className="btn-pagination-icon " />
      </button>

      <a href="/" className="page-link">
        1
      </a>

      <a href="/" className="page-link">
        2
      </a>

      {/* <a href="/" className="page-link">
        3
      </a> */}

      {/* <a href="/" className="page-link">
        4
      </a>

      <a href="/" className="page-link">
        5
      </a> */}

      <span className="pagination-span">...</span>

      <a href="/" className="page-link">
        4
      </a>

      <button className="btn-pagination">
        <ArrowForwardIosIcon className="btn-pagination-icon " />
      </button>
    </div>
  );
};

export default Pagination;
