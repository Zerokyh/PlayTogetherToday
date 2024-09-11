import { Box, Typography } from "@mui/material";
import { sizes } from "../../../styles/sizes";
import IconTextButton from "../Button/IconTextButton";
import { IconTextMuiBoxProp } from "../../../utils/type";

const IconTextMuiBox = ({
  icontextboxprops,
  component,
  onClick,
}: IconTextMuiBoxProp) => {
  return (
    <Box
      width={340}
      display={"flex"}
      justifyContent={"space-between"}
      borderRadius={sizes.borderRadius.medium}
    >
      <IconTextButton {...icontextboxprops} />
      <Typography component={"span"} sx={{ px: 0 }} onClick={onClick}>
        {component}
      </Typography>
    </Box>
  );
};

export default IconTextMuiBox;
