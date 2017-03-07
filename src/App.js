import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Movie from './Movie';
import apiObj from './api';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        movies: [],
        currentPage: 1,
        lastPage: null
      };

      this._getMoreResults = this._getMoreResults.bind(this);
  }

  componentDidMount(){
    this._makeApiCall();
  }

  _makeApiCall() {
    let page = this.state.currentPage;
    apiObj.fetchPopularMovies(page).then(results => {
      let currentMovies = this.state.movies.concat(results.results);
      this.setState({
        movies: currentMovies,
        lastPage: results.total_pages,
        });
    }).then(() => {
      if (page > 1) {
        window.scrollBy(0, window.innerHeight);
      }
    });
  }

  _getMoreResults() {
    let currentPage = this.state.currentPage;
    currentPage += 1;
    this.setState({currentPage: currentPage}, () => {
      this._makeApiCall(currentPage);
    });
  }

  render() {
    let moviesList = this.state.movies.map(movie => {
      return (
        <Movie movie={movie} key={movie.id}/>
      );
    });

    let getMoreButton = '';
    if (this.state.currentPage < this.state.lastPage) {
      getMoreButton = (
        <button onClick={this._getMoreResults}>Get More Results</button>
        );
    }

    return (
      <div>
        <header>Popular Movies</header>
        <ReactCSSTransitionGroup
            className="movie-list"
            transitionName="transition"
            transitionEnter={true}
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={5000}
          >
          {moviesList}
        </ReactCSSTransitionGroup>
        {getMoreButton}
      </div>
    );
  }
}

export default App;
