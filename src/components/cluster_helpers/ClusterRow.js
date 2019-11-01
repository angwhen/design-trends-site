import React from 'react'
import LazyLoad from 'react-lazyload';

const ClusterRow = ({ images}) => {

  const createAllStyles = () => {
      let allStyles = []

      for (let i = 0; i <images.length; i+=1) {

        allStyles.push(
          {
            backgroundImage: `url(${images[i]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 60%',
            display: 'inline-block',
            height: '200px',
            width: '200px'
          }
        )
      }
      return allStyles
    }
  const styles =   createAllStyles();

  const wrapperStyles = {
    height: '100%',
    width: '100%',
  }
  const whiteStyles = {
    backgroundColor:'#ffffff'
  }

  const createAllPics = () => {
      let allPics = []
      // Outer loop to create parent
      for (let i = 0; i < images.length; i+=1) {//every 3rd, bcuz slow loading

        allPics.push(
          <div style={{  height: '200px', width: '210px', display: 'inline-block'}}>
          <div className="slide" style={styles[i]}></div>
          <div style={{width: '10px',   display: 'inline-block',}}></div>
          </div>
        )
      }
      return allPics
    }

  return(
    <div style={wrapperStyles}>
      <LazyLoad once='true'>
      {createAllPics()}

        </LazyLoad>
      </div>

    )
}


export default ClusterRow
