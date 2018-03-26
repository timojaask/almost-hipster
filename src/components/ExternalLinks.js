import React from "react"
import styles from "./ExternalLinks.module.css"

export const ExternalLinks = ({ website, facebook, instagram }) =>
  <div>
    <br />
    {website && <a className={styles.externalLink} href={website} target="_blank">Website</a>}
    {facebook && <a className={styles.externalLink} href={facebook} target="_blank">Facebook</a>}
    {instagram && <a className={styles.externalLink} href={instagram} target="_blank">Instagram</a>}
  </div>