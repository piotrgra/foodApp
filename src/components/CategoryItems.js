import React from "react";
import "./CategoryItems.css";
import MenuItem from "./MenuItem";
function CategoryItems({ categoryName, items }) {
  return (
    <div className="categoryItems" id={categoryName}>
      <h1 className="categoryItems__name">{categoryName}</h1>
      {items.map((item, i) => (
        <MenuItem
          key={i}
          id={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default CategoryItems;
