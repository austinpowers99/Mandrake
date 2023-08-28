import React, { useState } from 'react'

export default function NewPlantForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        commonName: '',
        sunlight: '',
        watering: '',
        description: '',
        careLevel: '',
        growth_rate: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(formData);
        setFormData({
            commonName: '',
            sunlight: '',
            watering: '',
            description: '',
            careLevel: '',
            growth_rate: ''
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='commonName'>Common Name:</label>
                <input
                    type='text'
                    name='commonName'
                    value={formData.commonName}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor='sunlight'>Sunlight:</label>
                <input
                    type='text'
                    name='sunlight'
                    value={formData.sunlight}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor='watering'>Watering:</label>
                <input
                    type='text'
                    name='watering'
                    value={formData.watering}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor='careLevel'>Care Level:</label>
                <input
                    type='text'
                    name='careLevel'
                    value={formData.careLevel}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor='growth_rate'>Growth rate:</label>
                <input
                    type='text'
                    name='growth_rate'
                    value={formData.growth_rate}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor='description'>Description:</label>
                <textarea
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                />
                <button type='submit'>Add Plant</button>
            </form>
        </>
    );
}