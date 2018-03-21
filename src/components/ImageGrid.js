import React from "react";
import Img from "gatsby-image";
import styles from "./ImageGrid.module.css";

export const ImageGrid = ({ photos }) => renderImages(photos)

const styleForIndex = idx => {
  switch (idx) {
    case 1: return styles.thumbnail1;
    case 2: return styles.thumbnail2;
    case 3: return styles.thumbnail3;
    case 4: return styles.thumbnail4;
  }
}

const renderImages = photos =>
  photos.length > 1 ?
    <MultipleImages largePhoto={photos[0]} thumbnails={photos.slice(1)} /> :
    <OneImage photo={photos[0]} />

const OneImage = ({ photo }) => <Img sizes={photo.sizes} />

const MultipleImages = ({ largePhoto, thumbnails }) =>
  <div className={styles.container}>
    <div className={styles.largeImage}>
      <Img sizes={largePhoto.sizes} />
    </div>
    {thumbnails.map((photo, idx) =>
      <div key={idx} className={styleForIndex(idx)}>
        <Img sizes={photo.sizes} />
      </div>
    )}
  </div>
