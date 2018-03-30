import React, { Component } from "react";
import Img from "gatsby-image";
import concat from "lodash/concat";
import drop from "lodash/drop";
import take from "lodash/take";
import round from "lodash/round";
import styles from "./ImageGrid.module.css";

const rotate = (array, n) => concat(drop(array, n), take(array, n));

const maxScreenWidth_px = 700;
const iPhonePhotoAspectRatio = 0.75;
const defaultPhotoWidth_px = maxScreenWidth_px;
const defaultPhotoHeight_px = defaultPhotoWidth_px * iPhonePhotoAspectRatio;
const defaultRowHeightRegular_px = round(defaultPhotoHeight_px / 4);
const defaultRowHeightCompact_vw = round(defaultRowHeightRegular_px / defaultPhotoWidth_px * 100, 2);

/* TODO

Use https://github.com/contra/react-responsive to set row height using media queries.
Right now this whole solution is disfunctional.

*/

export class ImageGrid extends Component {
  constructor(props) {
    super();
    this.state = { photos: props.photos }
  }

  onPhotoSelected(photoIndex) {
    this.setState({ photos: rotate(this.state.photos, photoIndex) })
  }

  render() {
    return renderImages({
      photos: this.state.photos,
      onPhotoSelected: idx => { this.onPhotoSelected(idx) },
      height: this.props.height ? this.props.height : defaultRowHeightRegular_px,
      credit: this.props.credit
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

const renderImages = ({ photos, onPhotoSelected, credit, height }) =>
  <div>
    {photos.length > 1 ?
      <MultipleImages largePhoto={photos[0]} thumbnails={photos.slice(1)} onPhotoSelected={onPhotoSelected} height={height} /> :
      <OneImage photo={photos[0]} />}
    {credit && <PhotoCredit credit={credit} />}
  </div>

const PhotoCredit = ({ credit }) =>
  <div className={styles.creditContainer}>Photo credit: {credit.url ?
    <a href={credit.url} target="_blank">{credit.text}</a> :
    credit.text}
  </div>

const OneImage = ({ photo }) => <Img sizes={photo.image.sizes} alt={photo.alt} />

const MultipleImages = ({ largePhoto, thumbnails, onPhotoSelected, height }) =>
  <div className={styles.container} >
    <div className={styles.largeImage}>
      <Img sizes={largePhoto.image.sizes} alt={largePhoto.alt} />
    </div>
    {thumbnails.map((photo, idx) =>
      <button onClick={() => { onPhotoSelected(idx + 1) }} key={idx} className={styleForIndex(idx + 1)}>
        <Img className={styles.thumbnailImage} sizes={photo.image.sizes} alt={photo.alt} />
      </button>
    )}
  </div>
