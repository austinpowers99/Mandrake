import React from 'react'
import '../App/App.css';

export default function MyPlants({ plants }) {
  return (
    <>
      <div className="my-plants">
      <h1>Lettuce turnip the beet!</h1>
      </div>

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
  )
}