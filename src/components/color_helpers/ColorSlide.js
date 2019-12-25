import React from 'react'
import LazyLoad from 'react-lazyload';

const ColorSlide = ({ samples,year}) => {

  const createCurrentColors = (colors,currHeights) => {
      let currColors = []
      for (let j = 0; j < colors.length; j+=1) {
        currColors.push(
            <div style={{
              backgroundColor: `${colors[j]}`,
              width: `70px`,
              height: `${currHeights[j]}px`,
              margin: '0px',
              padding: '0px'}}>
            </div>)
      }
      return currColors;
  }

  const createAllInCol = () => {
      let allPics = [];
      let maxHeight = 700;
      let myStyle = {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            display: 'inline-block',
            height: '100%',
            width: '100%',
            height: '700px',
            overflow: 'hidden',
            justifyContent: 'center',
            textAlign: 'center'};

        if (Array.isArray(samples)){
            let numColors = samples.length; if (numColors == 0) { numColors = 1;}
            let currHeights = [maxHeight/numColors];
            for (let j=1; j< samples.length; j+=1){
              currHeights.push(maxHeight/numColors);
            }
            allPics.push(
              <div style={{  height: `700px`, width: '70px', display: 'inline-block'}}>
              {createCurrentColors(samples,currHeights)}
              </div>
            )
        } else { // dictionary
            let currHeights = [];
            let colors = [];
            for (var key in samples){
              currHeights.push(maxHeight*samples[key]);
              colors.push(key)
            }
            allPics.push(
              <div style ={ myStyle }>
              {createCurrentColors(colors,currHeights)}
              </div>
            )
        }
      return allPics
  }

  return(
    <div style={{ height: '100%',  width: '100%'}}>
      <LazyLoad once='true'>
        <p> {year} </p>
        {createAllInCol()}
      </LazyLoad>
    </div>
  )

}


export default ColorSlide
