import React, { Component } from 'react';

export default class Carousel extends Component {
  render() {
    return (
      <div>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" style={{ position: 'relative', maxWidth: '700px', maxheight: '500px', margin: 'auto' }}>
            <div className="carousel-inner" style={{ position: 'relative' }}>
              <div className="carousel-item active">
                <img src="https://media.istockphoto.com/photos/indian-spicy-food-paav-bhaji-or-pav-bhaji-picture-id1155185428?k=20&m=1155185428&s=170667a&w=0&h=9CFJ3gbV-kNLkrpFsYUVPlZID_8d2imXI8r6fmmrT00=" className="d-block mx-auto" style={{height: '500px', objectFit: 'cover' }} alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="http://images.deliveryhero.io/image/foodpanda/recipes/pani-puri-recipe-1.png" className="d-block mx-auto" style={{height: '500px', objectFit: 'cover' }} alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://wallpapercave.com/wp/wp9876500.jpg" className="d-block mx-auto" style={{height: '500px', objectFit: 'cover' }} alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://as1.ftcdn.net/v2/jpg/03/98/52/84/1000_F_398528484_ra3Tom42wvihhQfbCXtMqVORILZeUZ5B.jpg" className="d-block mx-auto" style={{height: '500px', objectFit: 'cover' }} alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="http://www.rachnas-kitchen.com/wp-content/uploads/2016/02/image-4.jpeg" className="d-block mx-auto" style={{height: '500px', objectFit: 'cover' }} alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://i.pinimg.com/originals/e2/53/dc/e253dc3aa4befeddfbe854bb2808f388.jpg" className="d-block mx-auto" style={{height: '500px', objectFit: 'cover' }} alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://thumbs.dreamstime.com/z/veg-manchurian-popular-indo-chinese-food-made-cauliflower-florets-other-vegetable-served-white-plate-over-rustic-225789552.jpg" className="d-block mx-auto" style={{height: '500px', objectFit: 'cover' }} alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://wallpaperaccess.com/full/2069499.jpg" className="d-block mx-auto" style={{height: '500px', objectFit: 'cover' }} alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden bg-dark">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden bg-dark">Next</span>
            </button>
        </div>
      </div>
    )
  }
}
