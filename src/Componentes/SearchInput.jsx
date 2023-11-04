import "./SearchInput.css";
import SearchIcon from "./SearchIcon";

function SearchInput({className}) {
    return (
        <div className={className} id="searchDiv" role="search">
            <SearchIcon />
            <input className="searchImput" type="text" name='searchDiv' aria-labelledby="searchDiv" placeholder=" ¿What do you want to hear?" />
        </div>
    )
}

export default SearchInput;