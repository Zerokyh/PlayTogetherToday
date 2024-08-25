import { Box, Typography } from "@mui/material";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";
import IconTextButton from "../atom/IconTextButton";
import { IconTextTextBoxProp } from "../../utils/type";
import { useNavigate } from "react-router-dom";

const IconTextTextBox = ({
  children,
  icontextboxprops,
  textbutton,
  href = "#",
  hover = {},
  sx,
}: IconTextTextBoxProp) => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      bgcolor={colors.background.secondary}
      borderRadius={sizes.borderRadius.medium}
      sx={{ px: 1, py: 2, ...sx }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <IconTextButton {...icontextboxprops} />
        <Typography
          component={"span"}
          sx={{ px: 1, ...hover }}
          onClick={() => {
            navigate(href);
          }}
        >
          {textbutton}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        {children}
      </Box>
    </Box>
  );
};

export default IconTextTextBox;
