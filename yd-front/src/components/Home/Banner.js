import React,{Component} from 'react';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
class MyComponent extends React.Component {

  render() {

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
              originalClass: 'featured-slide',
              thumbnailClass: 'featured-thumb',
              originalAlt: 'original-alt',
              thumbnailAlt: 'thumbnail-alt',
              thumbnailLabel: 'Optional',
              description: 'Optional description...',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
      }
    ]

    return (
      <ImageGallery items={images} showBullets={true} autoPlay={true} showNav={false} showThumbnails={false} showFullscreenButton={false} useBrowserFullscreen={false} showPlayButton={false} infinite={false} cancelable={false}/>
    );
  }

}

export default MyComponent;