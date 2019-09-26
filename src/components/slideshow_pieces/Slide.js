import React from 'react'

const Slide = ({ image }) => {
  const wrapperStyles = {
    backgroundPosition: '50% 60%',
    height: '100%',
    width: '100%'
  }

  const styles = {
    backgroundImage: `url(${image[0]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '50%',
    width: '100%'
  }
  const styles2 = {
    backgroundImage: `url(${image[1]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '50%',
    width: '100%'
  }

  const whiteStyles = {
    backgroundColor:'#ffffff'
  }

  return(
    <div style={wrapperStyles}>
      <div style={whiteStyles}>{image[2]}</div>
      <div className="slide" style={styles}></div>
      <div className="slide" style={styles2}></div>
      </div>
    )
}


export default Slide
