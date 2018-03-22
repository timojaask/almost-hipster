import React, { Component } from "react";
import Img from "gatsby-image";
import styles from "./ImageGrid.module.css";

const swapItems = (array, idxA, idxB) => {
  let newArray = array;
  const itemAtIdxA = newArray[idxA];
  newArray[idxA] = newArray[idxB];
  newArray[idxB] = itemAtIdxA;
  return newArray;
}

export class ImageGrid extends Component {
  constructor(props) {
    super();
    this.state = { photos: props.photos }
  }

  onPhotoSelected(photoIndex) {
    this.setState({ photos: swapItems(this.state.photos, 0, photoIndex) })
  }

  render() {
    return renderImages({
      photos: this.state.photos,
      onPhotoSelected: idx => { this.onPhotoSelected(idx) }
    })
  }
}

const styleForIndex = idx => {
  switch (idx) {
    case 1: return styles.thumbnail1;
    case 2: return styles.thumbnail2;
    case 3: return styles.thumbnail3;
    case 4: return styles.thumbnail4;
  }
}

const renderImages = ({ photos, onPhotoSelected }) =>
  photos.length > 1 ?
    <MultipleImages largePhoto={photos[0]} thumbnails={photos.slice(1)} onPhotoSelected={onPhotoSelected} /> :
    <OneImage photo={photos[0]} />

const OneImage = ({ photo }) => <Img sizes={photo.sizes} />

const MultipleImages = ({ largePhoto, thumbnails, onPhotoSelected }) =>
  <div className={styles.container}>
    <div className={styles.largeImage}>
      <Img sizes={largePhoto.sizes} />
    </div>
    {thumbnails.map((photo, idx) =>
      <button onClick={() => { onPhotoSelected(idx + 1) }} key={idx} className={styleForIndex(idx + 1)}>
        <Img className={styles.thumbnailImage} sizes={photo.sizes} />
      </button>
    )}
  </div>
