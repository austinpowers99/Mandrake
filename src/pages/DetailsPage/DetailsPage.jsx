import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
    const { id } = useParams();
    const [plant, setPlant] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://perenual.com/api/species/details/${id}?key=${API_KEY}`;

    useEffect(() => {
        async function fetchId() {
            try {
                const response = await fetch(API_URL);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    setPlant(data);
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchId();
    }, []);

    return (
        <div className='category-container'>
                <div>
                    <h2>{plant.common_name}</h2>
                </div>
        </div>
    );
}
