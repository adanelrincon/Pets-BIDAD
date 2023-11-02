import jasonimg from "../assets/img/jasonimg";

const items =[
    {
        id: 1,
        description: "Vaccine for Lilo",
        date:"24/11/2023"
    },
    {
        id: 2,
        description: "Vaccine for Toru",
        date:"30/11/2023"
    },
    {
        id: 3,
        description: "Vaccine for Pisco",
        date:"12/12/2023"
    },
   
];

const listItems = () => {
    return items
}

export const getItemById = (id: number) => {
    return items.find(item => item.id === id);
};

export default listItems();
