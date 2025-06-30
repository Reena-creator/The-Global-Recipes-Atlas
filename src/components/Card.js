import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="text-center py-4 shadow-sm my-3" style={{backgroundColor: "#f5f5dc"}}>
        <div className='d-block'>
            <img className="hero-image" style={{width: '120px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
            src="https://delimiters.s3.us-east-2.amazonaws.com/PROD/images/Mar-13th-2024/1710369273045-image.jpg"
            alt="Delicious food"
          />
          <h1 className="" style={{fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '48px', letterSpacing: '1px', color: '#333', marginBottom: '10px'}}>
            The Global Recipes Atlas
          </h1>
          <p style={{fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: '#777', marginBottom: '20px'}}>
            Discover flavors from around the world
          </p>
        </div>
      </div>
    );
  }
}