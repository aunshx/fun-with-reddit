import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ typeSubreddit }) => {
    const [subRedditNumber, setSubRedditNumber] = useState(0)

    // useEffect(() => {
    //     switch(true){
    //         case typeSubreddit === 'ProgrammerHumor':
    //             setSubRedditNumber(0);
    //             break
    //         case typeSubreddit === 'AskReddit':
    //             setSubRedditNumber(1);
    //             break
    //         case typeSubreddit === 'funny':
    //             setSubRedditNumber(2);
    //             break
    //         case typeSubreddit === 'gaming':
    //             setSubRedditNumber(3);
    //             break

    //         default:
    //             return null
    //     }
    // }, [])

    const selectSubreddit = (type) => {
        if(type === 'programmerHumor'){
                            setSubRedditNumber(0);
        }
        if (type === "askReddit") {
                            setSubRedditNumber(1);
        }
        if (type === "funny") {
                            setSubRedditNumber(2);
        }
        if (type === "gaming") {
             setSubRedditNumber(3);
        }
    }
  return (
    <div className='sidebar'>
      <div
        className={subRedditNumber === 0 ? "sub-name-active" : "sub-name"}
        onClick={() => selectSubreddit("programmerHumor")}
      >
        r/ProgrammerHumor
      </div>
      <div
        className={subRedditNumber === 1 ? "sub-name-active" : "sub-name"}
        onClick={() => selectSubreddit("askReddit")}
      >
        r/AskReddit
      </div>
      <div
        className={subRedditNumber === 2 ? "sub-name-active" : "sub-name"}
        onClick={() => selectSubreddit("funny")}
      >
        r/funny
      </div>
      <div
        className={subRedditNumber === 3 ? "sub-name-active" : "sub-name"}
        onClick={() => selectSubreddit("gaming")}
      >
        r/gaming
      </div>
    </div>
  );
};

Sidebar.propTypes = {}

export default Sidebar