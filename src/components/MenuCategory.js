import React from "react";
import "./MenuCategory.css";

function MenuCategory({ name, count }) {
  return (
    <div className="menuCategory">
      <p className="menuCategory__name">{name}</p>
      <p className="menuCategory__count">{count}</p>
    </div>
  );
}

export default MenuCategory;
