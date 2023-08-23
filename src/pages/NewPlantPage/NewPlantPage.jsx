import React, { useState } from 'react'

// Custom input component
function InputField({ label, type, value, onChange }) {
    return (
        <label>
            {label}:
            <input
            type={type}
            value={value}
            onChange={onChange}
            required
            />
        </label>
    );
}

export default function MyPlants() {
    const [formData, setFormData] = useState({
        commonName: '',
        sunlight: '',
        watering: '',
        description: '',
        growingTips: '',
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
        // Add form submission logic here (formData)
    }

    return (
        <>
            <h2 className="display-5" id="addNew">
                What plants do you have?
            </h2>
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Common Name"
                    type="text"
                    value={formData.plantCommonName}
                    onChange={handleInputChange}
                />
                <br />
                <InputField
                    label="Sunlight"
                    type="text"
                    value={formData.plantSunlight}
                    onChange={handleInputChange}
                />
                <br />
                <InputField
                    label="Watering"
                    type="text"
                    value={formData.plantWatering}
                    onChange={handleInputChange}
                />
                <br />
                <InputField
                    label="Description"
                    type="text"
                    value={formData.plantDescription}
                    onChange={handleInputChange}
                />
                <br />
                <InputField
                    label="Growing Tips"
                    type="text"
                    value={formData.plantGrowingTips}
                    onChange={handleInputChange}
                />
                <br />
                <button type="submit">Add Plant</button>
            </form>
        </>
    );
}