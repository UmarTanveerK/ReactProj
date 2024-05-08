import React from "react";
import Modal from "react-modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

Modal.setAppElement("#root");

const VideoModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          zIndex: 9999,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%", // Adjust as needed
          height: "100%",
          backgroundColor: "transparent", // No default background
          border: "none", // No default border
          padding: "0px", // No default padding
          justifyContent: "center",
        },
      }}
    >
      <div>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "150px",
            right: "305px",
            color: "white",
            zIndex: 99999,
            height: "30px",
            width: "30px",
          }}
        >
          <CloseIcon
            sx={{
              fontSize: "medium",
              width: "50px",
              height: "40px",
              fontWeight: "100",
            }}
          />
        </IconButton>
        <iframe
          width="800px"
          height="500px"
          style={{ marginLeft: "350px", marginTop: "150px" }}
          src="https://youtu.be/TYYf8zYjP5k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default VideoModal;
