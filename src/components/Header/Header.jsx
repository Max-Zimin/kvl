import logo from './KVL-logo.png';
import headerLogo from './KVLoblozhka.png';
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <img src={logo} className='logo' alt=''/>
            <img src={headerLogo} className='headerLogo' alt=''/>
        </div>
    )
}