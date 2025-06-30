import React, { Component }from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({query: e.target.value});
  };

  render() {
    const {query} = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-info my-2">
            <div className="container-fluid">
                <div className='d-block mx-3'>
                    <img src= "https://delimiters.s3.us-east-2.amazonaws.com/PROD/images/Mar-13th-2024/1710369273045-image.jpg" style={{width: "40px"}} alt="LOGO"/>
                </div>
              <Link className="navbar-brand" to="/">Home</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/indian">Indian</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/chinese">Chinese</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/thai">Thai</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/italian">Italian</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/mexican">Mexican</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/japanese">Japanese</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/spanish">Spanish</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/american">American</Link>
                  </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={(e)=> e.preventDefault()}>
                  <input className="form-control me-2" type="search" placeholder="Search Recipes..." value={query} onChange={this.handleInputChange}/>
                  <Link to={`/search/${encodeURIComponent(query)}`} className="btn btn-outline-success">Search</Link>
                </form>
              </div>
            </div>
        </nav>
      </div>
    )
  }
}
