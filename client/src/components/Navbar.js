import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from "@fortawesome/free-regular-svg-icons";

import redditLogo from '../resources/images/redditLogo.png'

import mediumLogo from "../resources/images/mediumLogo.png";
import mediumLogoHover from "../resources/images/mediumLogoHover.png";
import mediumLogoDark from "../resources/images/mediumLogoDark.png";
import githubLogo from "../resources/images/githubLogo.png";
import githubLogoHover from "../resources/images/githubLogoHover.png";
import githubLogoDark from "../resources/images/githubLogoDark.png";
import linkedInLogo from "../resources/images/linkedInLogo.png";
import linkedInLogoHover from "../resources/images/linkedInLogoHover.png";
import linkedInLogoDark from "../resources/images/linkedInLogoDark.png";

const Navbar = props => {
    const [githubHover, setGithubHover] = useState(false)
    const [mediumHover, setMediumHover] = useState(false)

    const onGithubEnter = () => {
      setGithubHover(true);
    };
    const onGithubLeave = () => {
      setGithubHover(false);
    };
    
    const onMediumEnter = () => {
      setMediumHover(true);
    };
    const onMediumLeave = () => {
      setMediumHover(false);
    };

  return (
    <div className='navbar flex_between'>
      <div className='flex_middle left'>
        <div className='flex_middle'>
          <img src={redditLogo} alt='Reddit Logo' />
        </div>
        <div>Fun</div>
      </div>
      <div className='right flex_evenly'>
        <div
          lassName='flex_middle'
          onMouseEnter={onGithubEnter}
          onMouseLeave={onGithubLeave}
        >
          <a
            href='https://github.com/aunshx'
            target={"_blank"}
            rel='noreferrer nofollow'
          >
            <img
              src={githubHover ? githubLogoHover : githubLogo}
              alt='Github Logo'
              style={{ marginTop: "0.5em" }}
              className='cursor-pointer'
            />
          </a>
        </div>
        <div
          className='flex_middle cursor-pointer'
          onMouseEnter={onMediumEnter}
          onMouseLeave={onMediumLeave}
        >
          <a
            href='https://aunsh.medium.com'
            target={"_blank"}
            rel='noreferrer nofollow'
          >
            <img
              src={mediumHover ? mediumLogoHover : mediumLogo}
              alt='Medium Logo'
            />
          </a>
        </div>
        <div className='flex_middle aunsh cursor-pointer'>
          <a href='https://aunsh.com'>a.</a>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {}

export default Navbar