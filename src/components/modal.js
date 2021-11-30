import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import downloadImg from "../images/download-flat.png";
import { Data } from "./master";

const Rendermodal = () => {
  const getImageState = localStorage.getItem("Grayscale");
  const {
    show,
    handleClose,
    authorName,
    imageGrayscale,
    handleWidth,
    handleHeight,
    handleImageSize,
    images,
    handleGrayscaleImage,
    handleColorImage,
    grayScale,
    // handleImageDownload
  } = useContext(Data);

  const handleImageCustomization = (imgGrayscale) => {
    if (imgGrayscale) {
      return "?grayscale";
    }
    return "";
  };
  const handleImageOptions = (imgSaturation) => {
    if (getImageState === "false" && imgSaturation) {
      return "grayscale";
    }
    return "";
  };
  return (
    <Modal
      show={Boolean(show)}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          A Photo By <span>{authorName}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={images + handleImageCustomization(imageGrayscale)}
          alt="Upsplash Images"
          className={handleImageOptions(grayScale)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Row className="no-gutters">
          <Col md="3">
            <Button onClick={handleGrayscaleImage}>Grayscale</Button>
            <Button onClick={handleColorImage}>Color</Button>
          </Col>
          <Col md="6">
            <div className="input-wrapper">
              <input
                type="number"
                placeholder="Enter Width"
                onChange={(e) => handleWidth(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter Height"
                onChange={(e) => handleHeight(e.target.value)}
              />
              <Button onClick={handleImageSize}>Set</Button>
            </div>
          </Col>
          <Col md="3">
            <div className="img-center">
              <img
                src={downloadImg}
                alt="Download Img"
                // onClick={handleImageDownload}
              />
            </div>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};
export default Rendermodal;
