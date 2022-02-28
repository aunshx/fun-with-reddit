import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/subreddit/Card";
import Subreddit from "./components/subreddit/Subreddit";
import Sidebar from "./components/sidebar/Sidebar";
import Spinner from "./components/layout/Spinner";
import api from './utils/api'

import "./App.css";

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
  const [afterName, setAfterName] = useState('');
  const [spinnerOn, setSpinnerOn] = useState(true);
  const [refChange, setRefChange] = useState(false)

  const [typeOfApi, setTypeOfApi] = useState("programmer-humor");

  const requestSent = async (typeOfApi, afterName, imagesNow) => {
    console.log(afterName, 'ss')
    const body = JSON.stringify({
      afterName
    })
    try {
      let res = await api.post(`/reddit/get-posts-${typeOfApi}`, body);

      // console.log(res.data)

      if(imagesNow.length > 0) {
        setImages([...imagesNow, ...res.data]);
      } else {
        setImages(res.data)
      }
      setAfterName(res.data[res.data.length - 1].name);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if(afterName === ''){
      setSpinnerOn(true)
    }
    requestSent(typeOfApi, afterName, '');
    setSpinnerOn(false)
  }, [typeOfApi]);

  useEffect(() => {
    if(refChange) {
      requestSent(typeOfApi, afterName, images);
    }
  }, [refChange])

  const changeType = (type) => {
    setAfterName('')
    setTypeOfApi(type)
    setImages([]);
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
          {spinnerOn ? (
            <Spinner />
          ) : (
            <Subreddit images={images} setRefChange={setRefChange} />
          )}
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
