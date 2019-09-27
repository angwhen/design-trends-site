import React from 'react'
import LazyLoad from 'react-lazyload';

const Slide = ({ image }) => {
  const wrapperStyles = {
    height: '100%',
    width: '100%',
  }

  const styles = {
    backgroundImage: `url(${image[0]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '400px',
    width: '400px'
  }
  const styles2 = {
    backgroundImage: `url(${image[1]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '400px',
    width: '400px'
  }

  const whiteStyles = {
    backgroundColor:'#ffffff'
  }

  return(
    <div style={wrapperStyles}>
      <LazyLoad once='true'>
      <div style={whiteStyles}>{image[2]}</div>
      <div className="slide" style={styles}></div>
      <div style={{width: '10px',   display: 'inline-block',}}></div>
      <div className="slide" style={styles2}></div>
        </LazyLoad>
      </div>

    )
}


export default Slide
