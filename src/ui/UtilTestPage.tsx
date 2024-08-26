import * as React from "react";
import RegisterModal from "../components/organism/RegisterModal";
import { FullPageBox } from "../styles/mui";
import BasicButton from "../components/atom/BasicButton";
import { theme } from "../styles/colors";

const UtilTestPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <FullPageBox>
      <BasicButton
        text="클릭"
        onClick={handleOpen}
        sx={{ bgcolor: theme.palette.primary.dark }}
      />
      <RegisterModal open={open} handleClose={handleClose} />
    </FullPageBox>
  );
};

export default UtilTestPage;
