import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllFlickrSlideshow from './components/AllFlickrSlideshow';
import ColorsPage from './components/ColorsPage';
import ColorsTrends from './components/ColorsTrends';
import WordsPage from './components/WordsPage';

class App extends Component {
  componentDidMount() {
  document.title = 'Design Trends';
}
  render() {
    return (
    <Router>
        <div>
          <h2>Design Trends Over Time</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/slideshow'} className="nav-link"> Historical Fashion Images Slideshow </Link></li>
            <li><Link to={'/words'} className="nav-link">Word Frequencies Over Time in NYTimes</Link></li>
            <li><Link to={'/colors'} className="nav-link">Historical Colors in Fashion Images People</Link></li>
            <li><Link to={'/colors-trends'} className="nav-link">Colors Trends</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={ColorsPage} />
              <Route path='/slideshow' component={AllFlickrSlideshow} />
              <Route path='/words' component={WordsPage} />
              <Route path='/colors' component={ColorsPage} />
                <Route path='/colors-trends' component={ColorsTrends} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
