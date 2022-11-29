import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../styles/realesesComponent.css';

class Realeses extends Component {
  render() {
    return (
      <section className='realeses-container'>
        <div className='text-container'>
          <h1>Lançamentos</h1>
          <span>Fique ligado nos novos produtos</span>
        </div>
        <div className='cards-container' >
          {/* <Card /> */}
        </div>
      </section>
    );
  }
}

// Realeses.propTypes = {

// };

export default Realeses;