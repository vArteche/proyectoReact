import "bulma/css/bulma.css";
import './navBar.css';
import lagoNess from '../assets/img/lagoness.jpg'

function ItemListContainer(){
    return(
        <div className="container">
            <div className="column is-4">
                <div className="card-img">
                    <img src={lagoNess} alt="mounstro del lago ness"></img>
                </div>
                <div className="card-content">
                    <span>PROXIMAMENTE</span>
                    <p>lorem</p>
                </div>
                <div className="card-footer">
                    <div className="card-footer-item">
                        <button id="comprar">Comprar</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;