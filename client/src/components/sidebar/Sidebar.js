import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ type, changeType }) => {
  //   const [subRedditNumber, setSubRedditNumber] = useState(0);

  return (
    <div className='sidebar'>
      <div
        className={type === "programmer-humor" ? "sub-name-active" : "sub-name"}
        onClick={() => changeType("programmer-humor")}
      >
        r/ProgrammerHumor
      </div>
      <div
        className={type === "memes" ? "sub-name-active" : "sub-name"}
        onClick={() => changeType("memes")}
      >
        r/memes
      </div>
      <div
        className={type === "thats-insane" ? "sub-name-active" : "sub-name"}
        onClick={() => changeType("thats-insane")}
      >
        r/ThatsInsane
      </div>
      <div
        className={type === "gaming" ? "sub-name-active" : "sub-name"}
        onClick={() => changeType("gaming")}
      >
        r/gaming
      </div>
      <div className='sub-name-creator'>
        <a href='https://aunsh.com' target={"_blank"} rel='noreferrer nofollow'>
          <span className='copyright'>{String.fromCodePoint("0X00A9")}</span>{" "}
          aunsh 2022
        </a>
      </div>
    </div>
  );
};

Sidebar.propTypes = {}

export default Sidebar