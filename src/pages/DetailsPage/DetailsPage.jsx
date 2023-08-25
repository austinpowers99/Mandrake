import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://perenual.com/api/species/details/${id}?key=${API_KEY}`;

    useEffect(() => {
        async function DetailsPage() {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        Authorization: `Token ${API_KEY}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setDetails(data.data);
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        DetailsPage();
    }, [API_KEY, API_URL, id]);

    return (
        <div className='detail-container'>
            {details.map((detail) => (
                <div>
                    <h2>{detail.id}</h2>
                </div>
            ))}
        </div>
    )
}