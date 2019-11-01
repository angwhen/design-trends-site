import React from 'react'

const ColorToggle = props => {
  return <button onClick={props.func}> {this.state.inFavorites ? "REMOVE FROM " : "ADD TO " + "FAVORITES"}</button>
}

export default ColorToggle
