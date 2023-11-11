//componentes
import NavBarItem from './NavBarItem';
//estilos
import "bulma/css/bulma.css";
import './navBar.css';

function NavBar (){
    return(
        <>
            <div className='navbar-brand'>
                <div className='navbar-start'>
                <h1 className='titulo'>NECA STORE</h1>
                </div>
                <div>
                    <NavBarItem/>
                </div>
            </div>  
        </>
    );
};

export default NavBar;