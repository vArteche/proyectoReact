//librerias
import React from "react";
import ReactDOM from "react-dom/client";

//componentes
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

//estilos
import './components/navBar.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


function App(){
    return(
        <>
            <>
                <NavBar/>
            </>
            <div className="card-section">
                <ItemListContainer/>
            </div>
        </>

    );
};

root.render(<App/>);