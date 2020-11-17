import React from "react";
import "./Menu.css";
import MenuCategory from "./MenuCategory";
import { HashLink } from "react-router-hash-link";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu__title">Menu</h1>
      <HashLink to="/#Przystawki" className="menu__titleHashLink">
        <MenuCategory name="Przystawki" count="2" />
      </HashLink>
      <HashLink to="/#Dania główne" className="menu__titleHashLink">
        <MenuCategory name="Dania główne" count="2" />
      </HashLink>
      <HashLink to="/#Zupy" className="menu__titleHashLink">
        <MenuCategory name="Zupy" count="2" />
      </HashLink>
    </div>
  );
}

export default Menu;
