import { useState } from "react";
import NewPlantForm from "../../components/NewPlantForm/NewPlantForm";

export default function NewPlantPage() {
    const [plants, setPlants] = useState([]);

    const addNewPlant = (newPlant) => {
        setPlants([...plants, newPlant]);
    };

    return(
        <>
            <h1>I'm cacti-ng some good vibes</h1>
            <NewPlantForm onSubmit={addNewPlant} />
            <div>
                {plants.map((plant, index) => (
                    <div key={index}>
                        <p>Common Name: {plant.commonName}</p>
                        <p>Sunlight: {plant.sunlight}</p>
                        <p>Watering: {plant.watering}</p>
                        <p>Care level: {plant.care_level}</p>
                        <p>Description: {plant.description}</p>
                        <p>Growing Tips: {plant.growingTips}</p>
                    </div>
                ))}
            </div>
        </>
    );
}