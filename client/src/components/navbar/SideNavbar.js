import React, { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import mediumLogo from "../../resources/images/mediumLogo.png";
import mediumLogoHover from "../../resources/images/mediumLogoHover.png";
import mediumLogoDark from "../../resources/images/mediumLogoDark.png";
import githubLogo from "../../resources/images/githubLogo.png";
import githubLogoHover from "../../resources/images/githubLogoHover.png";
import githubLogoDark from "../../resources/images/githubLogoDark.png";

export const SideNavbar = ({ close, type, changeType }) => {
  const [githubHover, setGithubHover] = useState(false);
  const [mediumHover, setMediumHover] = useState(false);

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
    <>
      <div className='sidenavbar'>
        <div className='triple_grid_sidebar'>
          <div></div>
          <div className='title flex_middle'>Menu</div>
          <div className='close flex_middle' onClick={close}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div className='flex_column'>
          <div
            className={
              type === "programmer-humor" ? "elements-active" : "elements"
            }
            onClick={() => changeType("programmer-humor")}
          >
            r/ProgrammerHumor
          </div>
          <div
            className={type === "memes" ? "elements-active" : "elements"}
            onClick={() => changeType("memes")}
          >
            r/memes
          </div>
          <div
            className={type === "thats-insane" ? "elements-active" : "elements"}
            onClick={() => changeType("thats-insane")}
          >
            r/ThatsInsane
          </div>
          <div
            className={type === "gaming" ? "elements-active" : "elements"}
            onClick={() => changeType("gaming")}
          >
            r/gaming
          </div>
          <div className='icons flex_column'>
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
          <div className='credits'>
            <a
              href='https://aunsh.com'
              target={"_blank"}
              rel='noreferrer nofollow'
            >
              <span className='copyright'>
                {String.fromCodePoint("0X00A9")}
              </span>{" "}
              aunsh 2022
            </a>
          </div>
        </div>
      </div>
    </>
  );
}