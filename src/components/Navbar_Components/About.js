import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <>
      <div>
        <div className='text-center' style={{fontFamily: 'poppins, sans-serif', fontWeight: '1000', fontSize: '3rem', color: "#2c3e50", marginTop: '2rem'}}>
          About Us
        </div>
        <div className='text-center' style={{color: '#555', fontSize: '1rem', fontStyle: 'italic', margin: '1.5 rem auto', fontWeight: '500'}}>
          "Food is our common ground, a universal experience." – <b>James Beard</b>
        </div>
      </div>
      <div>
        <div className="flexbox" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
          <img style={{maxWidth: '40%',margin: '15px', marginTop: '10px'}} src="https://png.pngtree.com/png-vector/20240920/ourmid/pngtree-smiling-girl-pointing-right-cartoon-character-illustration-png-image_13875965.png" alt='girl-image'/>
          <p className="text-center" style={{color: ' #333', maxWidth: '90%', lineHeight: '1.6', fontSize: '1.1rem', margin: '2rem', fontWeight: '400'}}>"The Global Recipes Atlas was born out of a deep love for food, culture, and creativity. What began as a simple idea to explore new flavors has grown into a space where each recipe tells a story. From spicy Indian curries to rich Italian pastas, we celebrate the diversity of global cuisines. This platform brings together food lovers from around the world to share, discover, and enjoy the joy of cooking together."</p>
        </div>
      </div>
      </>
    )
  }
}
