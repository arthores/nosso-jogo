import React, { Component } from 'react';
import '../styles/headerComponent.css';

class Header extends Component {
  render() {
    return (
      <header className='header-container' >
        <div className='logo-container' >
          <img src="#" alt="Logo of NOSSO JOGO" />
        </div>
        <div className='search-container' >
          <input className='search-bar' type="search" />
          <button type='button' className='btn-search'>P</button>
        </div>
        askME
        Login
        Carrinho
      </header>
    );
  }
}

export default Header;
