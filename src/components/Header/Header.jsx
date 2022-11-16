import './Header.css'
import {GiSoccerField} from 'react-icons/gi'

function Header() {
    return (
        <header className="text-center mt-4 mb-5">
            <GiSoccerField className="field-icon" />
            <h1 className="text-center">Football Matches</h1>
        </header>                
    );
}

export default Header;