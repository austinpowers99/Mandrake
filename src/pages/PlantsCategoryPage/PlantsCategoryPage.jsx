import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ExerciseCategoryPage() {
    const [categories, setCategories] = useState([]);
    
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://perenual.com/api/species-list?page=1&key=${API_KEY}`;

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        Authorization: `Token ${API_KEY}`,
                    },
                });
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
    }, [API_KEY, API_URL]);

    return (
        <>
            <h1>Find your green-half by name</h1>
            <div className='category-container'>
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        className='category-card-link'
                        to={`/categories/${category.id}`}>
                        <div>
                            <h2>{category.common_name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
