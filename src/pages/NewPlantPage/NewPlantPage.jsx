import { useState, useEffect } from "react";
import NewPlantForm from "../../components/NewPlantForm/NewPlantForm";
import * as plantAPI from '../../utilities/plant-api';

export default function NewPlantPage({setPlants}) {

    const addNewPlant = async(formData) => {
        const newPlant = await plantAPI.create(formData) 
        console.log(newPlant)
        setPlants(newPlant)
    };

    return(
        <>
            <div className='new-plant-h1'>
            <h1>I'm cacti-ng some good vibes</h1>
            </div>
            <div></div>
            <NewPlantForm addNewPlant={addNewPlant} />
        </>
    );
}