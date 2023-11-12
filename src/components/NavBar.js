//componentes
import NavBarItem from './NavBarItem';
//estilos
import "bulma/css/bulma.css";
import './navBar.css';

import logo from '../assets/img/loguito.jpg'
function NavBar (){
    return(
        <>
            <div className='navbar-brand'>
                <div className='navbar-start'>
                    <img src={logo}></img>
                </div>
                <div>
                    <NavBarItem/>
                </div>
            </div>  
        </>
    );
};

export default NavBar;