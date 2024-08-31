import { Box, Typography } from "@mui/material";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";
import IconTextButton from "../atom/IconTextButton";
import { IconTextTextBoxProp } from "../../utils/type";
import { useNavigate } from "react-router-dom";

const IconTextTextBox = ({
  icontextboxprops,
  textbutton,
  href = "#",
  hover = {},
  buttonTextSize,
  sx,
}: IconTextTextBoxProp) => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"#96B6C5"}
      borderRadius={sizes.borderRadius.medium}
      sx={{ px: 1, py: 2, ...sx }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <IconTextButton {...icontextboxprops} />
        <Typography
          component={"span"}
          fontSize={buttonTextSize}
          sx={{
            px: 1,
            ...hover,
            fontFamily: '"HSSaemaul-Regular", Arial, sans-serif',
          }}
          onClick={() => {
            navigate(href);
          }}
        >
          {textbutton}
        </Typography>
      </Box>
    </Box>
  );
};

export default IconTextTextBox;
