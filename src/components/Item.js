import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function AddCart() {
    setInCart((prevState) => !prevState);
  }


  const listClass = inCart ? "in-cart" : "";

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={AddCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
