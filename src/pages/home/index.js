import React from 'react'

import StateEvents from '../../components/stateEvents'

import './styles.css'

import logo from '../../assets/img/devaneios-code-logo.png'

function Home() {
    return (
        <>
            <header>
                <img src={logo} alt="Devaneios Code" />
            </header>
            <div className="container">
                <StateEvents />
            </div>
            
        </>
    );
  }
  
  export default Home;
  