import React, { useState, useEffect } from 'react';
import petsItems1 from "../../services/petsData";
import petsItems2 from "../../services/petsData2";
import { useNavigate, useParams } from 'react-router-dom';
import { usePetContext } from "../../services/PetContext";

interface Pet {
    id: number;
    pet: string;
    age: string;
    animal: string;
    breed: string;
    meal: string;
    walk: string;
    veterinary: string;
    v1: string;
    v2: string;
    v3: string;
    v4: string;
    a1: string;
    a2: string;
}

const EditPet = () => {
    const navigate = useNavigate();
    const { petId } = useParams<{ petId: string }>();
    const { updatePet } = usePetContext();

    function getPetDetailsById(id: number) {
        const allPets = [...petsItems1, ...petsItems2];
        return allPets.find(pet => pet.id === id);
    }

    // Obtén la información detallada de la mascota según el petId
    const petOld = petId ? getPetDetailsById(parseInt(petId, 10)) : undefined;

    const [petName, setPetName] = useState(petOld?.pet || "");
    const [petAge, setPetAge] = useState(petOld?.age || "");
    const [petAnimal, setPetAnimal] = useState(petOld?.animal || "");
    const [petBreed, setPetBreed] = useState(petOld?.breed || "");
    const [petMeal, setPetMeal] = useState(petOld?.meal || "");
    const [petWalk, setPetWalk] = useState(petOld?.walk || "");
    const [petVeterinary, setPetVeterinary] = useState(petOld?.veterinary || "");
    const [petV1, setPetV1] = useState(petOld?.v1 || "");
    const [petV2, setPetV2] = useState(petOld?.v2 || "");
    const [petV3, setPetV3] = useState(petOld?.v3 || "");
    const [petV4, setPetV4] = useState(petOld?.v4 || "");
    const [petA1, setPetA1] = useState(petOld?.a1 || "");
    const [petA2, setPetA2] = useState(petOld?.a2 || "");

    useEffect(() => {
        if (petOld) {
            setPetName(petOld.pet);
            setPetAge(petOld.age);
            setPetAnimal(petOld.animal);
            setPetBreed(petOld.breed);
            setPetMeal(petOld.meal);
            setPetWalk(petOld.walk);
            setPetVeterinary(petOld.veterinary);
            setPetV1(petOld.v1);
            setPetV2(petOld.v2);
            setPetV3(petOld.v3);
            setPetV4(petOld.v4);
            setPetA1(petOld.a1);
            setPetA2(petOld.a2);
        }
    }, [petId]);

    const handleUpdatePet = () => {

        let updatedPet: Pet;

        if (petOld) {
            updatedPet = {
                ...petOld,
                pet: petName,
                age: petAge,
                animal: petAnimal,
                breed: petBreed,
                meal: petMeal,
                walk: petWalk,
                veterinary: petVeterinary,
                v1: petV1,
                v2: petV2,
                v3: petV3,
                v4: petV4,
                a1: petA1,
                a2: petA2,
            };

            updatePet(updatedPet);
            navigate(`/pet/${petId}`);
        };
    };
    return (
        <div>
            <h2>Editar Mascota</h2>
            <form>
                <label>
                    Name:
                    <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="text" value={petAge} onChange={(e) => setPetAge(e.target.value)} />
                </label>
                <br />
                <label>
                    Animal:
                    <input type="text" value={petAnimal} onChange={(e) => setPetAnimal(e.target.value)} />
                </label>
                <br />
                <label>
                    Breed:
                    <input type="text" value={petBreed} onChange={(e) => setPetBreed(e.target.value)} />
                </label>
                <br />
                <label>
                Favourite:
                    <input type="text" value={petMeal} onChange={(e) => setPetMeal(e.target.value)} />
                </label>
                <br />
                <label>
                    Favourite Walk:
                    <input type="text" value={petWalk} onChange={(e) => setPetWalk(e.target.value)} />
                </label>
                <br />
                <label>
                    Veterinary:
                    <input type="text" value={petVeterinary} onChange={(e) => setPetVeterinary(e.target.value)} />
                </label>
                <br />
                {/* Añade más campos según sea necesario */}
                <button type="button" onClick={handleUpdatePet}>
                    Update Pet
                </button>
            </form>
        </div>
    );
}

export default EditPet;