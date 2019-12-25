import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Homepage extends Component {

  render() {
    return (
    <div style = {{marginTop:'50px',marginLeft:'20%',width: '60%'}}>
        <center><h1> Fashion History Trends Project</h1> </center>
        <p>
          This website shows results of the work done in <a href ="https://github.com/angwhen/design-trends"> Design Trends </a>.
          This project explores free data about (mostly Western) fashion from over the past one to two centuries. The goal
          is to find trends in how fashion evolved over that time span and make visualizations showing it.
        </p>
        <b> Text Analysis </b>
        <p>
          For text data, mainly, I extracted fashion related text from the New York Times archive, by compiling a list
          of fashion nouns from multiple fashion focused websites, namely, <a href="https://www.zalora.com.hk/fashion-glossary/"> Zalora </a> and
           <a href="http://www.speak-fashion.de"> Speak Fashion </a>. I did some manual labelling, as well as some exploration
           into the co-occurence relationships between each potential fashion term with each other one, to remove bad fashion terms.

           I then extracted articles that included fashion terms from those websites.
           It is important to note that I did not have the full text of New York Times historical articles though, since that
           is only accessible through a paywall. Instead I had small snippets of text from them.
        </p>
        <p>
           For comparison, I also extracted the counts of those fashion terms I found from the Google N-gram service.
           I visualized trends in text data by making word clouds that can be viewed over time.
           <nav className="navbar navbar-expand-lg navbar-light bg-light" style = {{  justifyContent: 'center'}}>
            <Link to={'/words'} className="nav-link">Word Clouds</Link>
            <Link to={'/fashion-terms'} className="nav-link">Fashion Terms</Link>
           </nav>
        </p>
        <b> Images Analysis </b>
        <p>
          For images, mainly, I scraped from Flickr, using a hand curated list of key words to determine whether
          a image was fashion related or not. I only kept images that had a year associated with it in the title. I was inspired
          to source fashion data from Flickr by the paper <a href = "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7926668.">
          When Was That Made </a>.
          I also supplemented the image data with images from < a href ="https://vintagefashionguild.org/fashion-timeline/"> Vintage Fashion Guild</a>.
          In total I had around 4000 images to analyze, with 600 images being from Vintage Fashion Guild. I do not show any
          Vintage Fashion Guild images on my website directly though.
        </p>
        <p>
          I visualized trends in the image data from Flickr multiple ways.
          <ul>
          <li> Extracting colors from people in images through time and showing them in a grid through time. </li>
          <li> Showing trends in individual color components (eg Hue) over time </li>
          <li> Making a mosaic of clothing over time. </li>
          <li> Quantifying and graphing textures in clothing over time </li>
          </ul>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style = {{  justifyContent: 'center'}}>
            <Link to={'/colors'} className="nav-link">Colors Grids</Link>
            <Link to={'/colors-trends'} className="nav-link">Colors Trends</Link>
            <Link to={'/samples'} className="nav-link">Samples Mosaic</Link>
            <Link to={'/texturesgrid'} className="nav-link">Textures Grid</Link>
            <Link to={'/texturestrends'} className="nav-link">Textures Trends</Link>
          </nav>
        </p>

        <b> Clustering </b>
        <p>
          For both text and image data, I wanted to see which historical eras were similar to each other. To see this
          I clustered both articles and images amongst each other. So that is, I assigned a image cluster to each image, and
          and article cluster to each article. For the images I cluster on color, and for the articles I cluster on the bag of
          fashion words they can be represented by. For images a number of preprocessing steps were tried, such as removing
          monochrome/black and white images, and removing skin from the people segmented, and finding images that were predominantly
          faces instead of clothing.
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style = {{  justifyContent: 'center'}}>
            <Link to={'/colorclustered'} className="nav-link">Color Clustered</Link>
            <Link to={'/monochrome_id'} className="nav-link">Monochrome Identification</Link>
            <Link to={'/predomfaces_id'} className="nav-link">Predom. Faces Identification</Link>
            <Link to={'/skin_removal'} className="nav-link">Skin Removal</Link>
            <Link to={'/cluster-comparisons'} className="nav-link">Cluster Comparisons</Link>
          </nav>
        </p>
        <b> Vintage Fashion Guild </b>
        <p>
          I want to thank Vintage Fashion Guild for making such a great hand curated and well studied look
          into the last two centuries of fashion! To truly understand vintage fashion from a well studied point of view,
          that would be a much better website to look at. However, my website shows some possible kinds of automated analysis
          that can be done on text and image data about fashion.
        </p>
    </div>
    );
  }
}

export default Homepage;
