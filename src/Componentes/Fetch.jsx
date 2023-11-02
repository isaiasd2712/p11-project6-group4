import { useState, useEffect } from 'react';
import './Fetch.css';

function Fetch() {
    const [data, setData] = useState([]);
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/infos';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02d42d8fe8mshb672bbe6c6a7da5p1d9af8jsn2d6bea08f902',
		    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setData(result.albums)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    
    return (
         <div>
            <h1></h1>
        </div>
    );
}

export default Fetch