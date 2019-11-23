import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import AllFlickrSlideshow from './components/AllFlickrSlideshow';
import ColorClusteredPage from './components/ColorClusteredPage';
import ColorsPage from './components/ColorsPage';
import ColorsTrends from './components/ColorsTrends';
import WordsPage from './components/WordsPage';
import FashionTermsGraph from './components/FashionTermsGraph';
import MonochromeIdentification from './components/MonochromeIdentification';
import PredomFacesIdentification from './components/PredomFacesIdentification';
import ClusterAreaCharts from './components/ClusterAreaCharts';
import SkinRemoval from './components/SkinRemoval';

class App extends Component {
  componentDidMount() {
  document.title = 'Design Trends';
}
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/colorclustered'} className="nav-link"> Color Clustering </Link></li>
            <li><Link to={'/colors'} className="nav-link">Colors Grids</Link></li>
            <li><Link to={'/colors-trends'} className="nav-link">Colors Trends</Link></li>
            <li><Link to={'/words'} className="nav-link">Word Clouds</Link></li>
            <li><Link to={'/fashion-terms'} className="nav-link">Fashion Terms</Link></li>
            <li><Link to={'/cluster-comparisons'} className="nav-link">Cluster Comparisons</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={ColorsPage} />
              <Route path='/colorclustered' component={ColorClusteredPage} />
              <Route path='/words' component={WordsPage} />
              <Route path='/colors' component={ColorsPage} />
              <Route path='/monochrome_id' component={MonochromeIdentification} />
                <Route path='/predomfaces_id' component={PredomFacesIdentification} />
              <Route path='/skin_removal' component={SkinRemoval} />
              <Route path='/colors-trends' component={ColorsTrends} />
              <Route path='/fashion-terms' component={FashionTermsGraph} />
              <Route path='/cluster-comparisons' component={ClusterAreaCharts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
