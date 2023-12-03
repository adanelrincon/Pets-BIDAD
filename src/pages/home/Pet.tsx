import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import "./Pet.css";
import { useParams } from 'react-router-dom';
import petsItems1 from "../../services/petsData";
import petsItems2 from "../../services/petsData2";

export default function Pet() {
    const { petId } = useParams<{ petId?: string }>();

    function getPetDetailsById(id: number) {
        const allPets = [...petsItems1, ...petsItems2];
        return allPets.find(pet => pet.id === id);
    }

    // Obtén la información detallada de la mascota según el petId
    const pet = petId ? getPetDetailsById(parseInt(petId, 10)) : undefined;

    if (!pet) {
        // Manejar el caso en que la mascota no exista
        return <div>No se encontró la mascota</div>;
    }

    const url = `/pet-edit/${petId}`;


    return (
        <>
            <body>
                <Header text="Pet" />
                <div className="pet-container">
                    <img src={pet.avatar} alt={pet.pet} />
                    
                    <div className="pet-item">
                        <h2 className="pet-item-info">Description:</h2>
                        <div className="pet-item-info">
                            <p>Name: {pet.pet}</p>
                            <p>Age: {pet.age}</p>
                            <p>Animal: {pet.animal}</p>
                            <p>Breed: {pet.breed}</p>
                        </div>
                    </div>

                    <div className="pet-item">
                        <h2 className="pet-item-info">Favourities:</h2>
                        <div className="pet-item-info">
                            <p>Meal: {pet.meal}</p>
                            <p>Walk: {pet.walk}</p>
                            <p>Veterinary: {pet.veterinary}</p>
                        </div>
                    </div>

                    <div className="pet-item"> 
                        <h2 className="pet-item-info">Vaccines record:</h2>
                        <div className="pet-item-info">
                            <p>{pet.v1}</p>
                            <p>{pet.v2}</p>
                            <p>{pet.v3}</p>
                            <p>{pet.v4}</p>
                        </div>
                    </div>

                    <div className="pet-item">
                        <h2 className="pet-item-info">Medical info:</h2>
                        <div className="pet-item-info">
                            <p>{pet.a1}</p>
                            <p>{pet.a2}</p>
                        </div>
                    </div>
                </div>
                <Menu />
            </body>
        </>
    )
}

