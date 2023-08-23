import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PlantsCategoryPage() {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]); // To keep track of selected categories

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

    // Function to toggle the selection of a category
    const handleCategoryToggle = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    // Function to check if a category is selected
    const isCategorySelected = (category) => {
        return selectedCategories.includes(category);
    };

    // Filter categories based on the selected categories
    const filteredCategories = selectedCategories.length > 0
        ? categories.filter((category) => selectedCategories.includes(category.sunlight))
        : categories;

    return (
        <>
            <h1>Categories</h1>
            <div className='category-container'>
                <div className='category-filters'>
                    <button
                        className={isCategorySelected('Full Sun') ? 'active' : ''}
                        onClick={() => handleCategoryToggle('Full Sun')}>
                        Full Sun
                    </button>
                    <button
                        className={isCategorySelected('Partial Shade') ? 'active' : ''}
                        onClick={() => handleCategoryToggle('Partial Shade')}>
                        Partial Shade
                    </button>
                    <button
                        className={isCategorySelected('Frequent Watering') ? 'active' : ''}
                        onClick={() => handleCategoryToggle('Frequent Watering')}>
                        Frequent Watering
                    </button>
                    <button
                        className={isCategorySelected('Average Watering') ? 'active' : ''}
                        onClick={() => handleCategoryToggle('Average Watering')}>
                        Average Watering
                    </button>
                    <button
                        className={isCategorySelected('Name') ? 'active' : ''}
                        onClick={() => handleCategoryToggle('Name')}>
                        Name
                    </button>
                </div>
                {filteredCategories.map((category) => (
                    <Link
                        key={category.id}
                        className='category-card-link'
                        to={`/categories/${category.id}`}>
                        <div>
                            <h2>{category.sunlight}</h2>
                            <h2>{category.watering}</h2>
                            <h2>{category.common_name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
