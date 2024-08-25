import { Box, Typography } from "@mui/material";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";
import IconTextButton from "../atom/IconTextButton";
import { IconTextMuiBoxProp } from "../../utils/type";

const IconTextMuiBox = ({
  icontextboxprops,
  component,
  onClick,
}: IconTextMuiBoxProp) => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      bgcolor={colors.background.secondary}
      borderRadius={sizes.borderRadius.medium}
      sx={{ px: 1 }}
    >
      <IconTextButton {...icontextboxprops} />
      <Typography component={"span"} sx={{ px: 1 }} onClick={onClick}>
        {component}
      </Typography>
    </Box>
  );
};

export default IconTextMuiBox;
