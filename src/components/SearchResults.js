import React, { Component } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Recipe from './Recipe';
import Spinner from './Spinner';

// HOC to inject router hooks into class component
function withRouter(Component) {
  return function Wrapper(props) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    return <Component {...props} params={params} location={location} navigate={navigate} />;
  };
}

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      results: [],
      totalResults: 0,
      loading: false
    };
  }

  async componentDidMount() {
    const query = this.props.params.query;
    await this.fetchSearchResults(query);
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.params.query;
    const currentQuery = this.props.params.query;
    if (prevQuery !== currentQuery) {
      this.setState({ page: 1 }, () => {
        this.fetchSearchResults(currentQuery);
      });
    }
  }

  fetchSearchResults = async (query) => {
    const { page } = this.state;
    const offset = (page - 1) * 12;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=12&offset=${offset}&apiKey=765ad4c9ff9343b48538b7130e578796`;

    this.setState({ loading: true });

    const response = await fetch(url);
    const data = await response.json();

    const fullData = await Promise.all(
      (data.results || []).map(async (recipe) => {
        const infoUrl = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=765ad4c9ff9343b48538b7130e578796`;
        const res = await fetch(infoUrl);
        const detail = await res.json();

        return {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          sourceUrl: detail.sourceUrl,
        };
      })
    );

    this.setState({
      results: fullData,
      totalResults: data.totalResults || 0,
      loading: false,
    });
  };

  handlePrevClick = async () => {
    await this.setState((prevState) => ({
      page: prevState.page - 1,
    }));
    await this.fetchSearchResults(this.props.params.query);
  };

  handleNextClick = async () => {
    await this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
    await this.fetchSearchResults(this.props.params.query);
  };

  render() {
    const { query } = this.props.params;
    const { results, page, totalResults, loading } = this.state;

    const totalPages = Math.ceil(totalResults / 12);

    return (
      <div className="container my-4">
        {loading && <Spinner />}
        <h2 style={{ textAlign: 'center' }}>
          📜 Results for: <em>{query}</em>
        </h2>

        <div className="row">
          {!loading && results.map((item) => (
            <div className="col-md-4 my-3" key={item.id}>
              <Recipe title={item.title} imageUrl={item.image} sourceUrl={item.sourceUrl} />
            </div>
          ))}
        </div>

        <div className="container d-flex justify-content-between my-4">
          <button
            disabled={page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>

          <button
            disabled={page >= totalPages}
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchResults);
