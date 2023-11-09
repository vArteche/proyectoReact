//componentes
import NavBarItem from './NavBarItem';
//estilos
import './navBar.css';

function NavBar (){
    return(
        <nav className="navbar-divider">
            <div className='navbar-brand'>
                <div className='title'>
                <h1>NECA STORE</h1>
                </div>
                <div>
                    <NavBarItem/>
                </div>
            </div>  
        </nav>
    )
};

export default NavBar;