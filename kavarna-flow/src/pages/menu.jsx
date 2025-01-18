import { useState } from "react";
import Drinks from "../components/drinks.jsx";
import { coctails } from "../components/coctails.js";
import { spirits } from "../components/spirits.js";
import { nonAlcoholicDrinks } from "../components/nonAlcoholicDrinks.js";
import { warmDrinks } from "../components/warmDrinks.js";
import { coffee } from "../components/coffee.js";
import ReactPaginate from "react-paginate";

const items = [coctails, spirits, nonAlcoholicDrinks, warmDrinks, coffee];

const Menu = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 1;
  const currentItems = items.slice(itemOffset, endOffset)[0];
  const pageCount = Math.ceil(items.length / 1);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 1) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="price-list">
      <>
        <Drinks selectedDrinks={currentItems} />
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    </div>
  );
};

export default Menu;
