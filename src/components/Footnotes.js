import React from "react";

const footnoteId = index => `footnote-${index}`

const Footnote = ({ index, title, url }) =>
  <li id={footnoteId(index)}>
    {index}. <a href={url} target="_blank">{title}</a>
  </li>

export const FootnoteList = ({ footnotes }) =>
  <div>
    <hr />
    <h3>References</h3>
    <ul>
      {
        footnotes.map(({ index, title, url }) =>
          <Footnote key={index} index={index} title={title} url={url} />)
      }
    </ul>
  </div>

export const FootnoteLink = ({ index }) =>
  <sup><a href={`#${footnoteId(index)}`}>[{index}]</a></sup>