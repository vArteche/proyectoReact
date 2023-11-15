//componentes
import NavBarItem from '../NavBarItem';

//estilos
import "bulma/css/bulma.css";
import './navBar.css';


function NavBar (){
    return(
        <>
            <div className='navbar-brand'>
                <div className='navbar-start'>
                    <img src={''} alt="logoNeca"></img>
                </div>
                <div>
                    <NavBarItem/>
                </div>
            </div>  
        </>
    );
};

export default NavBar;