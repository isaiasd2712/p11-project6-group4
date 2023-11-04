import './Header.css';
import Logo from './Logo';
import SearchInput from './SearchInput';
function Header() {
    return (
        <header className="headerDiv">
                <Logo href="/" />
                <SearchInput className="SearchInput" />
        </header>
    )
}

export default Header;