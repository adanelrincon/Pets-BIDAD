import jasonimg from "../assets/img/jasonimg";

const items =[
    {
        id: 1,
        name: "Salmon Feed",
        info: "Nature, 12Kg",
        image: jasonimg[0],
        price: 15
    },
    {
        id: 2,
        name: "Junior Feed",
        info: "Ultima, 400g",
        image: jasonimg[1], 
        price: 20
    },
    {
        id: 3,
        name: "Turkey Feed",
        info: "Petner, 1Kg",
        image: jasonimg[2], 
        price: 12
    },
    {
        id: 3,
        name: "Adult Energy",
        info: "Help, 20Kg",
        image: jasonimg[3],
        price: 30
    },
    {
        id: 4,
        name: "Medium Max",
        info: "Ultima, 7.5Kg",
        image: jasonimg[4], 
        price: 12
    },

    {
        id: 1,
        name: "Salmon Feed",
        info: "Nature, 12Kg",
        image: jasonimg[0], 
        price: 15
    },
    {
        id: 2,
        name: "Junior Feed",
        info: "Ultima, 400g",
        image: jasonimg[1], 
        price: 7
    },
    {
        id: 3,
        name: "Turkey Feed",
        info: "Petner, 1Kg",
        image: jasonimg[2], 
        price: 15
    },
    {
        id: 3,
        name: "Adult Energy",
        info: "Help, 20Kg",
        image: jasonimg[3], 
        price: 40
    },
    {
        id: 4,
        name: "Medium Max",
        info: "Ultima, 7.5Kg",
        image: jasonimg[4], 
        price: 19
    },
];

const listItems = () => {
    return items
}

export const getItemById = (id: number) => {
    return items.find(item => item.id === id);
};

export default listItems();
