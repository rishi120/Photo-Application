import React, { useState, useEffect, createContext } from "react";
import { baseUrl } from "../axios/Baseurl";
import Renderimagecomponent from "./main";
import axios from "axios";
// import { saveAs } from "file-saver";
const Data = createContext();
const loadMoreData = createContext();

const Rendermastercomponent = () => {
  const [loadDefaultImages, setLoadDefaultImages] = useState([]);
  const [grayScale, setGrayScale] = useState(false);
  const [show, setShow] = useState(false);
  const [images, setImages] = useState();
  const [authorName, setAuthorName] = useState("");
  const [imageGrayscale, setImageGrayscale] = useState("");
  const [buttonActiveColor, setButtonActiveColor] = useState(false);
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [imageId, setImageId] = useState("");
  const [loadMoreImages, setLoadMoreImages] = useState([]);
  // const [morePage, setMorePage] = useState(0);

  useEffect(() => {
    /* use list api to fetch all the images */
    axios
      .get(baseUrl + "v2/list?page&limit=60")
      .then((response) => {
        setLoadDefaultImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleImages = () => {
    setGrayScale(!grayScale);
    localStorage.setItem("Grayscale", grayScale);
    setButtonActiveColor(!buttonActiveColor);
  };
  const handleClose = () => {
    setShow(false);
    setImageGrayscale("");
  };
  const handleImage = (id, specificImage, authorName) => {
    setShow(images);
    setImageId(id);
    setAuthorName(authorName);
    setImages(specificImage);
  };
  const handleMoreImage = (imageId, newSpecificImage, newImageAuthorName) => {
    setShow(images);
    setImageId(imageId);
    setAuthorName(newImageAuthorName);
    setImages(newSpecificImage);
  };
  const handleGrayscaleImage = () => {
    setImageGrayscale("grayscale");
    setGrayScale(false);
  };
  const handleColorImage = () => {
    setImageGrayscale("");
    setGrayScale(false);
  };
  const handleWidth = (w) => {
    setImageWidth(w);
  };
  const handleHeight = (h) => {
    setImageHeight(h);
  };
  const handleImageSize = () => {
    setImages(baseUrl + `id/${imageId}/${imageWidth}/${imageHeight}`);
  };
  // const fetchMoreData = () => {
  //   setMorePage(morePage + 1);
  //   axios
  //     .get(baseUrl + `v2/list?page=${morePage}&limit=10`)
  //     .then((response) => {
  //       setTimeout(() => {
  //         setLoadMoreImages(response.data);
  //       }, 3000);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const values = {
    show,
    setShow,
    handleClose,
    authorName,
    setAuthorName,
    imageGrayscale,
    setImageGrayscale,
    handleWidth,
    handleHeight,
    handleImageSize,
    images,
    setImages,
    handleGrayscaleImage,
    handleColorImage,
    grayScale,
    setGrayScale,
    // handleImageDownload
  };
  const moreData = {
    loadMoreImages,
    setLoadMoreImages,
    handleMoreImage,
    grayScale,
    setGrayScale,
  };

  return (
    <>
      <Data.Provider value={values}>
        <loadMoreData.Provider value={moreData}>
          <Renderimagecomponent
            loadDefaultImages={loadDefaultImages}
            handleImages={handleImages}
            grayScale={grayScale}
            handleImage={handleImage}
            buttonActiveColor={buttonActiveColor}
          />
        </loadMoreData.Provider>
      </Data.Provider>
    </>
  );
};
export default Rendermastercomponent;
export { Data };
export { loadMoreData };
