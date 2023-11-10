import CartWidget from './CartWidget';
import "bulma/css/bulma.css";
import './navBar.css';

function NavBarItem(){
    return(
        <ul className='menuNav'>
        <li><a href='https://www.google.com.ar/' target='blank' className='navbar-item'>HOME</a></li>
        <li><a href='https://www.google.com.ar/' target='blank' className='navbar-item'>SOBRE NOSOTROS</a></li>
        <li><a href='https://www.google.com.ar/' target='blank' className='navbar-item'>PRODUCTOS</a></li>
        <li><CartWidget/></li>
    </ul>
    )
};

export default NavBarItem;