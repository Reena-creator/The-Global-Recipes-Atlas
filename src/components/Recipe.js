import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    let {title, imageUrl, sourceUrl} = this.props;
    return (
      <div style={{backgroundColor: '#4faecf'}}>
        <div className="card my-3 shadow-sm" style={{borderRadius: '15px', overflow: 'hidden' }}>
            {/* <img src={imageUrl && imageUrl.trim() ? imageUrl:'https://media.istockphoto.com/id/943483254/vector/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-sliced-potato-cucumber.jpg?s=612x612&w=0&k=20&c=qNYr2kI9cku2On18No0EsLO7-GYmCtaMbv2ZBKYzrfQ='} className="card-img-top" alt="..."/> */}
            <img style={{ height: '220px', objectFit: 'cover' }} src={imageUrl} onError={(e) => { e.target.src = 'https://media.istockphoto.com/id/943483254/vector/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-sliced-potato-cucumber.jpg?s=612x612&w=0&k=20&c=qNYr2kI9cku2On18No0EsLO7-GYmCtaMbv2ZBKYzrfQ='; }}className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title text-center" style={{textAlign: 'center', padding: '10px 0', fontWeight: '600', alignItems: 'center'}}>{title}</h5>
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark text-center" style={{textAlign: 'center', alignItems: 'center'}}>😋 Let's Cook</a>
            </div>
        </div>
      </div>
    )
  }
}
