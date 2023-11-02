import { useState, useEffect } from 'react';
import './Fetch.css';

function Fetch() {
    const [data, setData] = useState([]);
    const url= "https://discoveryprovider.audius.co/v1/tracks/trending?app_name=ExampleApp";

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url) ;
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    return (
        <div>

            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>    
                </div>
            ))}

        </div>
    );
}
export default Fetch