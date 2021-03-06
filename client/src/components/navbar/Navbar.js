import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "@mui/material";

import funRedditLogo from "../../resources/images/funRedditLogo.png";

import mediumLogo from "../../resources/images/mediumLogo.png";
import mediumLogoHover from "../../resources/images/mediumLogoHover.png";
import mediumLogoDark from "../../resources/images/mediumLogoDark.png";
import githubLogo from "../../resources/images/githubLogo.png";
import githubLogoHover from "../../resources/images/githubLogoHover.png";
import githubLogoDark from "../../resources/images/githubLogoDark.png";

import useWindowSize from "../../utils/useWindowSize";
import {SideNavbar} from "./SideNavbar";

const Navbar = ({ type, changeType }) => {
  const { width } = useWindowSize();
  const [githubHover, setGithubHover] = useState(false);
  const [mediumHover, setMediumHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);

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

  const closeMenu = () => {
    setIsOpen(false);
    setDrawer(false);
  };
  const openMenu = () => {
    setIsOpen(true);
    setDrawer(true);
  };

  return (
    <>
      <div className='navbar flex_between'>
        <div className='flex_middle left'>
          <div className='flex_middle'>
            <img src={funRedditLogo} alt='Reddit Logo' />
          </div>
          <div>Fun</div>
        </div>
        <div className='right flex_evenly'>
          {width > 786 ? (
            <>
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
            </>
          ) : (
            <>
              {isOpen ? (
                <FontAwesomeIcon
                  icon={faBars}
                  className={"hamburger--tilted cursor-pointer"}
                  onClick={closeMenu}
                  style={{
                    fontSize: 20,
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className={"hamburger cursor-pointer"}
                  onClick={openMenu}
                  style={{
                    fontSize: 20,
                  }}
                />
              )}
            </>
          )}
        </div>
      </div>
      <div>
        <Drawer
          anchor={"right"}
          open={drawer}
          onClose={closeMenu}
          className='sidebar_nav-right'
        >
          <SideNavbar
            close={closeMenu}
            type={type}
            changeType={changeType}
          />
        </Drawer>
      </div>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
