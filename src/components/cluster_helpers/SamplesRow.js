import React from 'react'
import LazyLoad from 'react-lazyload';

const SamplesRow = ({ samples,box_height=200, horizontal=false}) => {

  const createAllStyles = () => {
      let allStyles = []
      for (let i = 0; i <samples.length; i+=1) {
        allStyles.push({
            backgroundImage: `url(${samples[i]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 60%',
            display: 'inline-block',
            height: '200px',
            width: `${box_height}px`
          })
      }
      return allStyles
    }
  const styles = createAllStyles();

  const createCurrentColors = (colors,currWidths) => {
      let currColors = []
      for (let j = 0; j < colors.length; j+=1) {
        if (! horizontal){
          currColors.push(
            <div style={{
              backgroundColor: `${colors[j]}`,
              width: `200px`,
              height: `${currWidths[j]}px`,
              margin: '0px',
              padding: '0px'}}>
            </div>)
        } else {
          currColors.push(
            <div style={{
              display: 'inline-block',
              backgroundColor: `${colors[j]}`,
              width: `${currWidths[j]}px`,
              height: `${box_height}px`,
              margin: '0px',
              padding: '0px'}}>
            </div>)
        }
      }
      return currColors;
  }

  const createAllPics = () => {
      let allPics = []
      for (let i = 0; i < samples.length; i+=1) {//every 3rd, bcuz slow loading
        if (typeof samples[i] === 'string'){
          allPics.push(
            <div style={{  height:`${box_height}px`, width: '210px', display: 'inline-block'}}>
            <div  className="slide" style={styles[i]}></div>
            <div style={{width: '10px', backgroundColor:'#ffffff',  display: 'inline-block',}}></div>
            </div>
          )
        } else if (Array.isArray(samples[i])){
          let numColors = samples[i].length;
          if (numColors == 0) { numColors = 1;}
          let maxWidth = box_height;
          if (horizontal){
            maxWidth = 200;
          }
          let currWidths = [maxWidth/numColors];
          for (let j=1; j< samples[i].length; j+=1){
            currWidths.push(maxWidth/numColors);
          }
          allPics.push(
            <div style={{  height: `${box_height}px`, width: '210px', display: 'inline-block'}}>
            {createCurrentColors(samples[i],currWidths)}
            </div>
          )
        } else { // dictionary
          let currWidths = [];
          let colors = [];
          let maxWidth = box_height;
          if (horizontal){
            maxWidth = 200;
          }
          for (var key in samples[i]){
            currWidths.push(maxWidth*samples[i][key]);
            colors.push(key)
          }
          allPics.push(
            <div style={{height: `${box_height}px`, width: '210px', display: 'inline-block'}}>
            {createCurrentColors(colors,currWidths)}
            </div>
          )
        }
      }
      return allPics
  }

  return(
    <div style={{ height: '100%',  width: '100%'}}>
      <LazyLoad once='true'>
        {createAllPics()}
      </LazyLoad>
    </div>
  )

}


export default SamplesRow
