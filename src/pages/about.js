import React from "react";
import Helmet from 'react-helmet';

export default () => (
  <div>
    <Helmet>
      <title>About Almost Hipster</title>
    </Helmet>
    <h1>About</h1>
    <p>
      Cafe, bar, and restaurant recommendations, based on my subjective opinion.
    </p>
    <h2>Contact</h2>
    <p>
      <a href="mailto:contact@almosthipster.net">contact@almosthipster.net</a>
    </p>
  </div>
);