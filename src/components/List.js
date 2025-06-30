import React, { Component } from 'react'
import Recipe from './Recipe'
import Spinner from './Spinner';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  // DRY helper to load page
  loadRecipes = async (page) => {
    let { cuisine } = this.props;
    let offset = (page - 1) * 9;
    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${cuisine}&number=9&offset=${offset}&apiKey=765ad4c9ff9343b48538b7130e578796`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();

    let fullrecipe = await Promise.all(
      (parsedData.results || []).map(async (recipe) => {
        let infoUrl = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=765ad4c9ff9343b48538b7130e578796`;
        let infoRes = await fetch(infoUrl);
        let infoData = await infoRes.json();
        return {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          sourceUrl: infoData.sourceUrl
        };
      })
    );

    this.setState({
      articles: fullrecipe,
      totalResults: parsedData.totalResults,
      page: page,
      loading: false
    });
  }

  async componentDidMount() {
    await this.loadRecipes(1);
  }

  handlePrevClick = async () => {
    if (this.state.page <= 1) return;
    await this.loadRecipes(this.state.page - 1);
  }

  handleNextClick = async () => {
    let totalPages = Math.ceil(this.state.totalResults / 9);
    if (this.state.page >= totalPages) {
      console.log("Already at last page");
      return;
    }
    await this.loadRecipes(this.state.page + 1);
  }

  render() {
    return (
      <div className='container my-3'>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => (
            <div className="col-md-4" key={element.id}>
              <Recipe title={element.title} imageUrl={element.image} sourceUrl={element.sourceUrl} />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
          <button
            disabled={this.state.page >= Math.ceil(this.state.totalResults / 9)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    )
  }
}
