import './Header.css';
import Logo from './LOGO';

function Header() {
    return (
        <header>
            <div className='header-left'>
            <Logo/>
            </div>
            <div className='headeright'>
                <input className="search-Btn" type="text" placeholder='Buscar' />
                <input type="submit-Btn" />
            </div>
        </header>

    )
}
export default Header;