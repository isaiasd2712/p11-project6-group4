import { useState, useEffect } from 'react';
import './Finder.css';
import Header from "./Header"

function Finder() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    console.log("la clave de Deezer es");
    console.log(import.meta.env.VITE_API_KEY);


    useEffect(() => {
        const finderData = async () => {
            const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setData(result.data);
            } catch (error) {
                console.error(error);
            }
        };
        if (searchTerm !== "") {
            finderData();
        }

    }, [searchTerm]); // Ejecuta la búsqueda cada vez que searchTerm cambie


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        console.log(e.target.value);
    }


    return (
        <div className='homeDiv'>
            <Header handleSearch={handleSearch} />
            <div className='categoriesDiv'>
                <h2 className='texto1'>Albums</h2>
                <h2 className='texto2'>Play List</h2>
                <h2 className='texto3'>Best Songs</h2>
            </div>
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

export default Finder;
