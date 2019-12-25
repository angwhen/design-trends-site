import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
//https://www.npmjs.com/package/react-multi-carousel


class TexturesTrends extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textures_samples_data: [
['0','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_0.png'],
['1','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_1.png'],
['2','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_2.png'],
['3','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_3.png'],
['4','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_4.png'],
['5','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_5.png'],
['6','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_6.png'],
['7','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_7.png'],
['8','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_8.png'],
['9','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_9.png'],
['10','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_10.png'],
['11','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_11.png'],
['12','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_12.png'],
['13','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_13.png'],
['14','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_14.png'],
['15','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_15.png'],
['16','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_16.png'],
['17','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_17.png'],
['18','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_18.png'],
['19','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_19.png'],
['20','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_texture_amounts_bin_20.png']
],
    }
  }


  createAllSlides = () => {
      let allSlides = []
      let myStyle = {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
            width: '70px',
            height: '770px',
            overflow: 'hidden',
            justifyContent: 'center',
            textAlign: 'center'};

      // Outer loop to create parent
      for (let i = 0; i <   this.state.textures_samples_data.length; i+=1) {

        allSlides.push(
          <div style ={ myStyle }>
            <div>   {this.state.textures_samples_data[i][0]} </div>
              <div style ={{
                    backgroundImage: `url(${this.state.textures_samples_data[i][1]})`,
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block',
                    width: '70px',
                    height: '700px',
                    overflow: 'hidden',
                    justifyContent: 'center',
                    textAlign: 'center'}}>
              </div>
          </div>)
      }
      return allSlides
    }

    createDescription = () => {
      let description = []
      description.push(<center ><div style = {{width:'60%'}}><p>
        I use a sobel filter over my RGB image channels to detect edges, and I use the amount
        of edges detected in the people in the image as my metric for how textured the clothing
        in that image is.
        Below I show some cropped examples of fabrics that result in different levels of my
        texture metric. On the leftmost side is what
        I am calling least textured, and the rightmost side is what the metric considers most textured.
      </p></div></center>);

      return description;
    }

    render() {
      const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 21},
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 21},
        mobile: { breakpoint: { max: 464, min: 0 }, items: 21},
      };

      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style = {{  justifyContent: 'center'}}>
          <Link to={'/texturesgrid'} className="nav-link" style = {{fontWeight:'bold'}}>Textures Grid</Link>
          <Link to={'/texturestrends'} className="nav-link">Textures Trends</Link>
          </nav>
          {this.createDescription()}
          <div style={{ backgroundPosition: '50% 50%'}}>
          <Carousel  responsive={responsive} >
            {this.createAllSlides()}
          </Carousel>
          </div>
        </div>
      );

    }

    }

export default TexturesTrends;
