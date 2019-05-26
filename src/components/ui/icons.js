import React from 'react';
import { Link } from 'react-router-dom';

import lakersLogo from '../../resources/images/logos/lakers_logo.png';

export const LakersLogo = (props) => {

  const template = <div
    className="img_cover"
    style={{
      width: props.width,
      height: props.height,
      background: `url(${lakersLogo}) no-repeat`
    }}></div>

  if (props.link) {
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    )
  } else {
    return template
  }

}