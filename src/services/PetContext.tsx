import React, { createContext, useContext, useState, ReactNode } from 'react';

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

interface PetContextProps {
    pets: Pet[];
    updatePet: (updatedPet: Pet) => void;
  }
  
  const PetContext = createContext<PetContextProps | undefined>(undefined);
  
  export const usePetContext = () => {
    const context = useContext(PetContext);
    if (!context) {
      throw new Error('usePetContext must be used within a PetContextProvider');
    }
    return context;
  };
  
  export const PetContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [pets, setPets] = useState<Pet[]>([]);
  
    const updatePet = (updatedPet: Pet) => {
      setPets((prevPets) => prevPets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet)));
    };
  
    return (
      <PetContext.Provider value={{ pets, updatePet }}>
        {children}
      </PetContext.Provider>
    );
  };
  
