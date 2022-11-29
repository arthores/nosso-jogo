import React, { Component } from 'react';
import Header from '../components/Header';
import Realeses from '../components/Realeses'

class Home extends Component {
  render() {
    return (
      <main>
        {/* <Header /> */}
        <Realeses />
      </main>
    );
  }
}

export default Home;