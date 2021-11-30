import React, { useContext } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rendermodal from "./modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { loadMoreData } from "./master";

const Loadmoredata = () => {
  const addDynamicClass = (grayImage) => {
    if (grayImage) {
      return "grayscale";
    } else {
      return "";
    }
  };
  const { loadMoreImages, handleMoreImage, grayScale } =
    useContext(loadMoreData);
  return (
    <>
      <Row xs={5} className="no-gutters">
        {loadMoreImages.map((fetchMoreImages) => {
          return (
            <>
              <Col key={fetchMoreImages.id}>
                <div className="img-wrapper">
                  <LazyLoadImage
                    src={fetchMoreImages.download_url}
                    alt="Lorem Picsum"
                    className={addDynamicClass(grayScale)}
                    effect="blur"
                    onClick={() =>
                      handleMoreImage(
                        fetchMoreImages.id,
                        fetchMoreImages.download_url,
                        fetchMoreImages.author
                      )
                    }
                  />
                  <h5> {fetchMoreImages.author} </h5>{" "}
                </div>
              </Col>
            </>
          );
        })}
      </Row>
      <Rendermodal />
    </>
  );
};

export default Loadmoredata;
