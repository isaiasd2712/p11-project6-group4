import { useState, useEffect } from 'react';
import './Finder.css';
import Header from "./Header"
import { BrowserRouter, Link, Route } from 'react-router-dom';


function Finder() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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
        if (searchTerm === "") {
            setSearchTerm("very")
        }

        finderData();




    }, [searchTerm]); // Ejecuta la búsqueda cada vez que searchTerm cambie


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        console.log(e.target.value);
    }


    return (
        <div className='homeDiv'>
            <Header handleSearch={handleSearch} />
            <div className='categoriesDiv'>
                <BrowserRouter>
                    <Link to='/' className='texto1'>Albums</Link>
                    <Link to='/' className='texto2'>Artists</Link>
                    <Link to='/' className='texto3'>Songs</Link>
                    <Link to='/' className='texto4'>Libraries</Link>
                    
                </BrowserRouter>
                {/* <Route path= >

                </Route> */}

            </div>
            <div className='albumDiv'>
                {/* short-circuit */}
                {data && data.map((item) => (
                    <div className='imgDiv' key={item.id}>
                        <img src={item.album.cover_medium} alt="Album" />
                        <p className='pDiv'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Finder;
