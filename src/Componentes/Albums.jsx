import { useState, useEffect } from 'react';
import './Albums.css';


function Albums() {
    const [data, setData] = useState([]);
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=search';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            
        }
    }

    useEffect()
    const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setData(result.data);

        } catch (error) {
            console.error(error);
            fetchData();
            
        };

    };
    return (
        <div>
            <h2>Albums</h2>
            <div className='albumDiv'>
                {data.map((item) => (
                    <div key={item.id}>
                        <img src={item.album.cover_medium} alt="Album" />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Albums;