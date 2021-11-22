import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@mui/material/Grid";
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
  const { loadMoreImages, fetchMoreData, handleMoreImage, grayScale } =
    useContext(loadMoreData);
  return (
    <>
      <InfiniteScroll
        dataLength={loadMoreImages}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Grid container xs={5} spacing={1} className="no-gutters">
          {loadMoreImages.map((fetchMoreImages) => {
            return (
              <>
                <Grid item key={fetchMoreImages.id}>
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
                    <h5>{fetchMoreImages.author}</h5>
                  </div>
                </Grid>
              </>
            );
          })}
        </Grid>
      </InfiniteScroll>
      <Rendermodal />
    </>
  );
};

export default Loadmoredata;
