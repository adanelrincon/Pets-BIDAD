import { useState } from "react";
import jasonimg from "../assets/img/jasonimg";

const petsList1 = [
  {
    id: 1,
    pet: "Kai",
    avatar: jasonimg[6]
  },
  {
    id: 2,
    pet: "Atom",
    avatar: jasonimg[7]
  },
  {
    id: 3,
    pet: "Turko",
    avatar: jasonimg[8]
  },
  {
    id: 4,
    pet: "Gara",
    avatar: jasonimg[9]
  }
];

const petsList2 = [
    {
      id: 1,
      pet: "Marina",
      avatar: jasonimg[5]
    },
    {
      id: 2,
      pet: "Adonay",
      avatar: jasonimg[5]
    },
    {
      id: 3,
      pet: "Nare",
      avatar: jasonimg[5]
    },
    {
      id: 4,
      pet: "Aridane",
      avatar: jasonimg[5]
    }
  ];

const petsItems1 = () => {
    return petsList1;
}

export default petsItems1();