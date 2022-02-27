import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/subreddit/Card";
import Subreddit from "./components/subreddit/Subreddit";

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  let checker = useRef();
  const up = useRef();
  const [fixedContent, setFixedContent] = useState(false);

  const refElement = useCallback((node) => {
    if (checker.current) {
      checker.current.disconnect();
    }
    const options = {
      root: null,
      threshold: 0,
    };
    checker.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setFixedContent(false);
      } else {
        setFixedContent(true);
      }
    }, options);
    if (node) {
      checker.current.observe(node);
    }
  }, []);

  const [images, setImages] = useState([]);
  const [afterName, setAfterName] = useState([]);

  const [typeOfApi, setTypeOfApi] = useState("programmer-humor");

  const requestSent = async (typeOfApi) => {
    try {
      let res = await axios.get(`/api/reddit/get-posts-${typeOfApi}`);

      setImages(res.data);
      setAfterName(res.data[res.data.length - 1].name);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    requestSent(typeOfApi);
  }, [typeOfApi]);

  const changeType = (type) => {
    setTypeOfApi(type)
  }

  const goUp = () => {
    up.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className='flex_column'>
        <div className='triple_grid'>
          <Sidebar innerRef={up} type={typeOfApi} changeType={changeType} />
          <Subreddit images={images} />
          <div
            ref={fixedContent ? up : refElement}
            className='flex_column'
            style={{ height: "1px", marginTop: "-50px" }}
          ></div>
        </div>
      </div>
      {fixedContent && (
        <div className='go-up' data-aos='fade-up' onClick={goUp}>
          <FontAwesomeIcon icon={faCircleArrowUp} />
        </div>
      )}
    </>
  );
}

export default App;
