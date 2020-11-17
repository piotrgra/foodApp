import React from "react";
import "./RightColumn.css";
import CategoryItems from "./CategoryItems";

const przystawki = {
  categoryName: "Przystawki",
  items: [
    {
      id: 1,
      image:
        "https://papupos.s3.amazonaws.com/media/eresto/0537a8f2-be6b-49af-b0b3-b33554a9b522/6a2efbf1-89fd-4839-80c4-c92b99a2ba9a/sajgonki-na-ciepo_xySOtvA.jpg",
      name: "Sajgonki z warzywami",
      description:
        "Sajgonki na ciepło w cienkim pszennym cieście, z kapustą, makaronem sojowym i sosem słodko-kwaśnym.",
      price: 15,
    },
    {
      id: 2,
      image:
        "https://papupos.s3.amazonaws.com/media/eresto/0537a8f2-be6b-49af-b0b3-b33554a9b522/6a2efbf1-89fd-4839-80c4-c92b99a2ba9a/chipsy-krewetkowe.jpg",
      name: "Chispy krewetkowe",
      description:
        "Chipsy krewetkowe z tajskim sosem orzechowym, według oryginalnej receptury Why Thai.",
      price: 12,
    },
  ],
};
const daniaGlowne = {
  categoryName: "Dania główne",
  items: [
    {
      id: 3,
      image:
        "https://papupos.s3.amazonaws.com/media/eresto/0537a8f2-be6b-49af-b0b3-b33554a9b522/6a2efbf1-89fd-4839-80c4-c92b99a2ba9a/zupa-pho-z-woowina.jpg",
      name: "Pathatai",
      description:
        "Pikantna zupa tajska z chili, galangalem, mlekiem kokosowym i makaronem vermicelli",
      price: 32,
    },
    {
      id: 4,
      image:
        "https://papupos.s3.amazonaws.com/media/eresto/0537a8f2-be6b-49af-b0b3-b33554a9b522/6a2efbf1-89fd-4839-80c4-c92b99a2ba9a/bami-tom-yum-z-warzywami_0byJBzP.jpg",
      name: "Udon pudon",
      description:
        "Chipsy krewetkowe z tajskim sosem orzechowym, według oryginalnej receptury Why Thai.",
      price: 52,
    },
  ],
};

const zupy = {
  categoryName: "Zupy",
  items: [
    {
      id: 5,
      image:
        "https://papupos.s3.amazonaws.com/media/eresto/0537a8f2-be6b-49af-b0b3-b33554a9b522/6a2efbf1-89fd-4839-80c4-c92b99a2ba9a/tom-kha-z-kurczakiem_MwANDEA.jpg",
      name: "Tom Kha z warzywami",
      description:
        "Zupa na bazie mleczka kokosowego, z trawą cytrynową, liśćmi kaffiru i odrobiną chili.",
      price: 19,
    },
    {
      id: 6,
      image:
        "https://papupos.s3.amazonaws.com/media/eresto/0537a8f2-be6b-49af-b0b3-b33554a9b522/6a2efbf1-89fd-4839-80c4-c92b99a2ba9a/bami-tom-yum-z-warzywami_0byJBzP.jpg",
      name: "Bami Tom Yum z warzywami",
      description:
        "Pikantna zupa tajska z chili, galangalem, mlekiem kokosowym i makaronem vermicelli.",
      price: 17,
    },
  ],
};

function RightColumn() {
  return (
    <div className="rightColumn">
      <CategoryItems categoryName="Przystawki" items={przystawki.items} />
      <CategoryItems categoryName="Dania główne" items={daniaGlowne.items} />
      <CategoryItems categoryName="Zupy" items={zupy.items} />
    </div>
  );
}

export default RightColumn;
