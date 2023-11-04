import { useState, useEffect } from 'react';
import './Fetch.css';

function Fetch() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('pop'); // Término de búsqueda por defecto
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02d42d8fe8mshb672bbe6c6a7da5p1d9af8jsn2d6bea08f902',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }

    const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setData(result.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchTerm]); // Ejecuta la búsqueda cada vez que searchTerm cambie

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        fetchData();
        if (searchTerm.trim() !== '') {
        }
        
        
    };

    return (
        <div>
            <h2>Albums</h2>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Buscar álbumes"
                />
                <button type="submit">Buscar</button>
            </form>
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

export default Fetch;