"use client";

import { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";

interface VideoModalProps {
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button to Open Modal */}
      <button
        onClick={() => setOpen(true)}
       className="w-14 h-14 flex items-center animate-bounce justify-center rounded-full bg-[#93C7F3] text-2xl font-bold shadow-lg hover:bg-gray-300 transition">
          ▶
      </button>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm p-4"
        >
          <div className="relative rounded-lg shadow-lg backdrop-blur-sm overflow-hidden max-w-3xl w-full">
            {/* Close Button */}
            <IconButton
              onClick={() => setOpen(false)}
              className="absolute top-0 left-[50%] z-10"
              sx={{ backgroundColor: "#93C7F3" }}
            >
              <CloseIcon />
            </IconButton>

            {/* Video Player */}
            <div className="p-6">
              <ReactPlayer url={videoUrl} controls width="100%" height="400px" />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default VideoModal;
