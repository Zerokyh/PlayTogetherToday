import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ModalType_Authorize from "./ModalType_Authorize";
import ModalType_Normal from "./ModalType_Normal";
import ModalType_Contents from "./ModalType_Contents";
import ModalAuthorize from "./ModalAuthorize";

type MessageModalProps = {
  content: string;
  type: string;
  handleClose: () => void;
};

const MessageModal = ({ content, type, handleClose }: MessageModalProps) => {
  let modalContent;

  switch (type) {
    case "authorize":
      modalContent = (
        <ModalAuthorize content={content} handleClose={handleClose} />
      );
      break;
    case "normal":
      modalContent = (
        <ModalType_Normal content={content} handleClose={handleClose} />
      );
      break;
    case "contents":
      modalContent = (
        <ModalType_Contents content={content} handleClose={handleClose} />
      );
      break;
    default:
      modalContent = null; // 기본 값이 없으면 null 반환
      break;
  }

  return <div>{modalContent}</div>;
};

export default MessageModal;
