import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="270" rx="8" ry="8" width="280" height="26" />
    <rect x="0" y="308" rx="8" ry="8" width="280" height="75" />
    <rect x="0" y="411" rx="8" ry="8" width="80" height="28" />
    <rect x="120" y="403" rx="8" ry="8" width="160" height="44" />
    <circle cx="136" cy="120" r="120" />
  </ContentLoader>
);

export default Skeleton;
