import React, { Component } from 'react';
import SamplesRow from './cluster_helpers/SamplesRow';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import {makeHSVMonochromeData, makeHSVMonochromProps} from "./monochrome_helpers/MonochromeUtils";
import { LineChart } from 'react-easy-chart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class MonochromeIdentification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: makeHSVMonochromeData(), //each row [ not black & white, black and white]
      prop_data: makeHSVMonochromProps(),
      currentShowing: 0,
    }
  }
  toggleSource = () => {
    this.setState(prevState => ({
      currentShowing: (prevState.currentShowing+1)%2
    }));
  }
  createAllRows = () => {
      let allSlides = []
      let myStyle = {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            display: 'inline-block',
            height: '100%',
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            justifyContent: 'center',
            textAlign: 'center'};
      if (this.state.currentShowing == 0){
        let myImages = this.state.images;
        allSlides.push(
              <div style={{  height: '100%',  width: '100%'}}>
                <div  style ={{
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  display: 'inline-block',
                  height: '100%',
                  width: '100%',
                  height: '20px',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <div className="slide" style={{backgroundPosition: '50% 60%',  display: 'inline-block',  height: '20px',  width: '200px'}}>Monochrome</div>
                  <div style={{width: '10px',   display: 'inline-block',}}></div>
                  <div className="slide" style={{ backgroundPosition: '50% 60%',  display: 'inline-block', height: '20px',  width: '200px'}}>Colored</div>
                  <div style={{width: '10px',   display: 'inline-block',}}></div>
                </div>
              </div>)
        // Outer loop to create parent
        for (let i = 0; i < myImages.length; i+=1) {
          allSlides.push(
            <div style ={ myStyle }>
              <SamplesRow samples={myImages[i]}  />
            </div>)
        }
      } else {
        allSlides.push(
          <div>
          <center>Proportion of Monochrome Images Over Time</center>
          <LineChart
            margin={{top: 10, right: 10, bottom: 50, left: 50}}
            axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
             axes
             width = {window.innerWidth*0.95}
             height = {700}
             xType={'time'}
             tickTimeDisplayFormat={'%Y'}
             datePattern="%Y"
             data={this.state.prop_data}
           />
           </div>
        )
      }
      return allSlides
    }
  createDescription = () => {
    let description = []
    description.push(<center ><div style = {{width:'30%'}}><p>
        I converted all images to HSV color coordinates, and took the variance of the hues for all pixels for which it is well defined,
        as per Pat Roberts  <a href="https://www.quora.com/What-is-the-most-reliable-algorithm-to-detect-if-an-RGB-Image-is-monochrome">quora answer </a>
         in order to identify monochrome images. I do so in order to be able to exclude them from color clustering.
    </p></div></center>);
    return description
  }
  render() {
    return (
    <div style ={ {  justifyContent: 'center'  } }>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style = {{  justifyContent: 'center'}}>
      <Link to={'/monochrome_id'} className="nav-link" style = {{fontWeight:'bold'}}>Monochrome Identification</Link>
      <Link to={'/predomfaces_id'} className="nav-link">Predom. Faces Identification</Link>
      <Link to={'/skin_removal'} className="nav-link">Skin Removal</Link>
      </nav>
      {this.createDescription()}
      <ButtonToolbar style = {{justifyContent: 'center'}}>
      <Button variant="outline-primary" onClick={() => this.toggleSource()}>{this.state.currentShowing === 0 ? "Show amount over time" : "Show examples"}</Button>
      </ButtonToolbar>


      {this.createAllRows()}

    </div>
    );
  }

  }

  export default MonochromeIdentification;
