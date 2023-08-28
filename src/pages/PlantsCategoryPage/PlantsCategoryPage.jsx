import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlantsCategoryPage() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://perenual.com/api/species-list?page=1&key=${API_KEY}`;

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch(API_URL);
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data.data);
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, []);

    function handleClick(id) {
        navigate('/categories/'+ id);
    }

    return (
        <>
            <br></br>
            <h1>Find your green-half by name</h1>
            <br></br>
            <div className='category-container'>
                {categories.map((category) => (
                    <div>
                        <h2 onClick={() => handleClick(category.id)}>{category.common_name}</h2>
                    </div>
                ))}
            </div>
        </>
    );
}
