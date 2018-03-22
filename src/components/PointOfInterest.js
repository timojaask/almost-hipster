import React from "react";
import { ImageGrid } from "./ImageGrid";

export const PointOfInterest = ({ name, paragraphs, photos }) =>
  <div>
    <h4>{name}</h4>
    {paragraphs.map((paragraphText, idx) => <p key={idx}>{paragraphText}</p>)}
    {photos && photos.length > 0 && <ImageGrid photos={photos} />}
  </div>