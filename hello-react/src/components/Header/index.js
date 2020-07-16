import React from 'react';
import '../Header/index.css';
import Boton from '../Boton'

const Header = props => {

    return (
        <header className="App-header">
            <p>
                Welcome to hell
        </p>
                <Boton caption="Entrar al infierno"/>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>
        </header>
    )
}

export default Header 