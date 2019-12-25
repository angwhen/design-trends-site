import React, { Component } from 'react';
import SamplesRow from './cluster_helpers/SamplesRow';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { makePredomFacesData} from "./monochrome_helpers/MonochromeUtils";
import { PieChart } from 'react-easy-chart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class PredomFacesIdentification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faces_images: makePredomFacesData(),
    }
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
      // Outer loop to create parent
      for (let i = 0; i <this.state.faces_images.length; i+=1) {
        allSlides.push(
          <div style ={ myStyle }>
            <SamplesRow samples={this.state.faces_images[i]}  />
          </div>)
      }
      return allSlides
    }

  createDescription = () => {
    let description = []
    description.push(<center ><div style = {{width:'30%'}}><p>
        I used a pretrained face detector from OpenCV, found <a href="https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_frontalface_default.xml">here</a>, to identify images that are predominantly faces.
        Face pictures might not tell us that much about clothes, and the face pixels might mess up color detection,
        so I want the option to remove them from color clustering.
      </p></div></center>);
    return description
  }
  render() {
    return (
    <div style ={ {  justifyContent: 'center'  } }>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style = {{  justifyContent: 'center'}}>
        <Link to={'/monochrome_id'} className="nav-link">Monochrome Identification</Link>
        <Link to={'/predomfaces_id'} className="nav-link"  style = {{fontWeight:'bold'}}>Predom. Faces Identification</Link>
        <Link to={'/skin_removal'} className="nav-link">Skin Removal</Link>
        </nav>
        {this.createDescription()}
        <div  style ={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          display: 'inline-block',
          height: '400px',
          width: '100%',
          overflow: 'hidden',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <PieChart
            styles = {{'.chart_text': {
                fontFamily: 'serif',
                fontSize: '1.25em',
                fill: '#333'
              }}}
            labels
            data={[
              { key: '67 predom. faces', value: 67 },
              { key: '3229 other flickr images', value: 3229 },
          ]}/>
        </div>


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
          <div className="slide" style={{backgroundPosition: '50% 60%',  display: 'inline-block',  height: '20px',  width: '200px'}}>Predominantly Faces</div>
          <div style={{width: '10px',   display: 'inline-block',}}></div>
          <div className="slide" style={{ backgroundPosition: '50% 60%',  display: 'inline-block', height: '20px',  width: '200px'}}>More Clothing</div>
          <div style={{width: '10px',   display: 'inline-block',}}></div>


      </div>

      {this.createAllRows()}

    </div>
    );
  }

  }

  export default PredomFacesIdentification;
