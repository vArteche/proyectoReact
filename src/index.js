//librerias
import React from "react";
import ReactDOM from "react-dom/client";

//componentes
import NavBar from "./components/NavBar";

//estilos
import './components/navBar.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


function App(){
    return(
        <div className="encabezado">
            <NavBar></NavBar>
        </div>

    );
};

root.render(<App/>);