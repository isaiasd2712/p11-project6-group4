import './Header.css';
import Logo from './Logo';
import SearchIcon from './SearchIcon';

function Header() {
    return (
        <header className="headerDiv">
            <div className="logoDiv">
                <Logo href="/" />

            </div>
            <div id="searchDiv" role="search">
                <div>
                    <SearchIcon />
                </div>
                <input className="searchImput" type="text" aria-labelledby="searchDiv" placeholder=" ¿What do you want to hear?" />
            </div>
        </header>
    )
}

export default Header;