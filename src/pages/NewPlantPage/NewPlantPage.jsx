import { useState } from "react";
import NewPlantForm from "../../components/NewPlantForm/NewPlantForm";

export default function NewPlantPage() {
    const [plants, setPlants] = useState([]);

    const addNewPlant = (newPlant) => {
        setPlants([...plants, newPlant]);
    };

    return(
        <>
            <br></br>
            <h1>I'm cacti-ng some good vibes</h1>
            <br></br>
            <NewPlantForm onSubmit={addNewPlant} />
            <div className='new-plant-page'>
                {plants.map((plant, index) => (
                    <div key={index}>
                        <p>Common Name: {plant.commonName}</p>
                        <p>Sunlight: {plant.sunlight}</p>
                        <p>Watering: {plant.watering}</p>
                        <p>Care level: {plant.careLevel}</p>
                        <p>Growth rate: {plant.growth_rate}</p>
                        <p>Description: {plant.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}