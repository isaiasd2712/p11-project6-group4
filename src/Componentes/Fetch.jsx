import { useState, useEffect } from 'react';
import './Fetch.css';
import Header from "../Componentes/Header"

function Fetch() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");




    useEffect(() => {
        const fetchData = async () => {
            const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '02d42d8fe8mshb672bbe6c6a7da5p1d9af8jsn2d6bea08f902',
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
            fetchData();
        }

    }, [searchTerm]); // Ejecuta la búsqueda cada vez que searchTerm cambie


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        console.log(e.target.value);
    }


    return (
        <div>
            <Header handleSearch={handleSearch} />
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

export default Fetch;
