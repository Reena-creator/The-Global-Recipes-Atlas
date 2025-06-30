import React, { Component } from 'react';

export default class Card2 extends Component {
  render() {
    return (
      <div>
        <div className="text-center my-5">
          <h2 style={{ fontWeight: 'bold' }}>
            🍽️ Ready to explore mouthwatering cuisines? Pick your favorite below!
          </h2>
          <div className="d-flex flex-wrap justify-content-center mt-4">
            {/* Indian */}
            <a
              href="/indian"
              className="btn text-white m-2"
              style={{
                background: '#e53935',
                borderRadius: '30px',
                padding: '10px 20px',
                fontWeight: '600',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🇮🇳 Indian
            </a>

            {/* Italian */}
            <a
              href="/italian"
              className="btn text-white m-2"
              style={{
                background: '#43a047',
                borderRadius: '30px',
                padding: '10px 20px',
                fontWeight: '600',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🍝 Italian
            </a>

            {/* Chinese */}
            <a
              href="/chinese"
              className="btn text-white m-2"
              style={{
                background: '#1e88e5',
                borderRadius: '30px',
                padding: '10px 20px',
                fontWeight: '600',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🥢 Chinese
            </a>

            {/* American */}
            <a
              href="/american"
              className="btn text-white m-2"
              style={{
                background: '#5e35b1',
                borderRadius: '30px',
                padding: '10px 20px',
                fontWeight: '600',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🍔 American
            </a>

            {/* Thai */}
            <a
              href="/thai"
              className="btn text-white m-2"
              style={{
                background: '#fb8c00',
                borderRadius: '30px',
                padding: '10px 20px',
                fontWeight: '600',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🍜 Thai
            </a>
            {/* Mexican */}
            <a
              href="/mexican"
              className="btn text-white m-2"
              style={{
                background: '#7b0d77',
                borderRadius: '30px',
                padding: '10px 20px',
                fontWeight: '600',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
                🌮 Mexican
            </a>
            {/* Japanese */}
            <a
              href="/japanese"
              className="btn text-white m-2"
              style={{
                background: '#949f13',
                borderRadius: '30px',
                padding: '10px 20px',
                fontWeight: '600',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
                🍡 Japanese
            </a>
            {/* Spanish */}
            <a
              href="/spanish"
              className="btn text-white m-2"
              style={{
                background: '#d30931',
                borderRadius: '30px',
                padding: '10px 20px',
                fontWeight: '600',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
                🍗 Spanish
            </a>
          </div>
        </div>
      </div>
    );
  }
}
