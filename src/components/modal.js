import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import downloadImg from "../images/download-flat.png";
import Grid from "@mui/material/Grid";

const Rendermodal = (props) => {
  const getImageState = localStorage.getItem("Grayscale");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleImageCustomization = () => {
    if (props.imageGrayscale) {
      return "?grayscale";
    }
    return "";
  };
  const handleImageOptions = () => {
    if (getImageState === "false" && props.grayScale) {
      return "grayscale";
    }
    return "";
  };
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box lg={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            A Photo By <span> {props.authorName} </span>
          </Typography>
          <Box>
            <img
              src={props.images + `${handleImageCustomization()}`}
              alt="Upsplash Images"
              className={handleImageOptions()}
            />
          </Box>
          <Grid container fixed spacing={1}>
            <Grid item md={3}>
              <Button onClick={props.handleGrayscaleImage}>Grayscale</Button>
              <Button onClick={props.handleColorImage}> Color </Button>
            </Grid>
            <Grid item md={6}>
              <item className="input-wrapper">
                <input
                  type="number"
                  placeholder="Enter Width"
                  onChange={(e) => props.handleWidth(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Enter Height"
                  onChange={(e) => props.handleHeight(e.target.value)}
                />
                <Button onClick={props.handleImageSize}> Set </Button>
              </item>
            </Grid>
            <Grid item md={3}>
              <item className="img-center">
                <img src={downloadImg} alt="Download Img" />
              </item>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};
export default Rendermodal;
