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
    height: '200px',
    width: '200px'
  }
  const styles2 = {
    backgroundImage: `url(${image[1]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '200px',
    width: '200px'
  }
  const styles3 = {
    backgroundImage: `url(${image[2]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '200px',
    width: '200px'
  }
  const styles4 = {
    backgroundImage: `url(${image[3]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '200px',
    width: '200px'
  }
  const styles5 = {
    backgroundImage: `url(${image[4]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '200px',
    width: '200px'
  }
  const styles6 = {
    backgroundImage: `url(${image[5]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '200px',
    width: '200px'
  }
  const styles7 = {
    backgroundImage: `url(${image[6]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '200px',
    width: '200px'
  }

  const whiteStyles = {
    backgroundColor:'#ffffff'
  }

  return(
    <div style={wrapperStyles}>
      <LazyLoad once='true'>
      <div className="slide" style={styles}></div>
      <div style={{width: '10px',   display: 'inline-block',}}></div>
      <div className="slide" style={styles2}></div>
      <div style={{width: '10px',   display: 'inline-block',}}></div>
      <div className="slide" style={styles3}></div>
      <div style={{width: '10px',   display: 'inline-block',}}></div>
      <div className="slide" style={styles4}></div>
      <div style={{width: '10px',   display: 'inline-block',}}></div>
      <div className="slide" style={styles5}></div>
      <div style={{width: '10px',   display: 'inline-block',}}></div>
      <div className="slide" style={styles6}></div>
      <div style={{width: '10px',   display: 'inline-block',}}></div>
      <div className="slide" style={styles7}></div>
        </LazyLoad>
      </div>

    )
}


export default Slide
