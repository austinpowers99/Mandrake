import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PlantsCategoryPage() {
    const [categories, setCategories] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://perenual.com/api/species-list?page=1&key=${API_KEY}`;

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch (API_URL, {
                    headers: {
                        Authorization: `Token ${API_KEY}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data.data);
                    console.log(data.data)
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, [API_KEY]);

    return (
        <>
            <h1>Categories</h1>
            <div className='category-container'>
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        className='category-card-ink'
                        to={`/categories/${category.id}`}>
                        <div>
                            <h2>{category.sunlight}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}