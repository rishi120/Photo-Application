import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./styles/styles.scss";
import Rendermodal from "./modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loadmoredata from "./Loadmoredata";

const Renderimagecomponent = (props) => {
  const addDynamicClass = () => {
    if (props.grayScale) {
      return "grayscale";
    } else {
      return "";
    }
  };
  return (
    <>
      <div className="header-section">
        <h1 className="header">Photo Application</h1>
        <Button
          variant="secondary"
          className={props.buttonActiveColor ? "active" : ""}
          onClick={props.handleImages}
        >
          Switch Saturation
        </Button>
      </div>
      <section>
        <Container maxWidth="sm">
          <Grid>
            {props.loadDefaultImages.map((fetchImages) => {
              return (
                <>
                  <Grid item key={fetchImages.id}>
                    <div className="img-wrapper">
                      <LazyLoadImage
                        src={fetchImages.download_url}
                        alt="Lorem Picsum"
                        className={addDynamicClass()}
                        effect="blur"
                        onClick={() =>
                          props.handleImage(
                            fetchImages.id,
                            fetchImages.download_url,
                            fetchImages.author
                          )
                        }
                      />
                      <h5>{fetchImages.author}</h5>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Loadmoredata />
          <Rendermodal />
        </Container>
      </section>
    </>
  );
};
export default Renderimagecomponent;
