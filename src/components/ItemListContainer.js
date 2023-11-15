import "bulma/css/bulma.css";
import lagoNess from '../assets/img/lagoness.jpg'

import ItemCount from './ItemCount'

function ItemListContainer(){
    return(
        <div className="container">
            <div className="column is-4">
                <div className="card-img">
                    <img src={lagoNess} alt="mounstro del lago ness"></img>
                </div>
                <div className="card-header-title is-centered">
                    <span>
                        Universal Monsters – 7” Scale Action Figure – Ultimate Creature from the Black Lagoon (B&W)
                    </span>
                </div>
                <div className="card-content">
                    <p></p>
                    <ItemCount/>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;