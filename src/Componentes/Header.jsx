import './Header.css';
import Logo from './Logo';
import SearchIcon from "./SearchIcon";


function Header({ handleSearch }) {

    const handleInputChange = (event) => {
        handleSearch(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <header className="headerDiv">
            <Logo href="/" />

            <div id="searchDiv" role="search">
                <button className="searchIcon" type="submit">
                    <SearchIcon id="searchIconBtn" />
                </button>


                <input onSubmit={handleFormSubmit} className="searchImput" type="text" aria-labelledby="searchDiv" placeholder=" ¿What do you want to hear?" //value={searchTerm}
                    onChange={handleSearch} />

            </div>
        </header>
    )
}

export default Header;