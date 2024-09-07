import { Box, Typography } from "@mui/material";
import { colors } from "../../../styles/colors";
import { sizes } from "../../../styles/sizes";
import IconTextButton from "../Button/IconTextButton";
import { useNavigate } from "react-router-dom";
import { fontFamily } from "../../../styles/theme";
import useThemeStore from "../../../store/store";

type IconTextButtonProps = {
  icon: React.ReactElement;
  text?: string;
  iconsize?: string;
  fontsize?: string;
};

type IconTextTextBoxProp = {
  icontextboxprops: IconTextButtonProps;
  textbutton?: string;
  href?: string;
  hover?: { ":hover": { cursor: "pointer" } } | {};
  buttonTextSize?: string;
  sx?: object;
};

const IconTextTextBox = ({
  icontextboxprops,
  textbutton,
  href = "#",
  hover = {},
  buttonTextSize,
  sx,
}: IconTextTextBoxProp) => {
  const navigate = useNavigate();
  const { isTheme, setIsTheme } = useThemeStore();
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      bgcolor={
        isTheme == "기본"
          ? colors.background.tertiary
          : colors.sub_background.tertiary
      }
      borderRadius={sizes.borderRadius.medium}
      sx={{ px: 1, py: 2, ...sx }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <IconTextButton {...icontextboxprops} />
        <Typography
          component={"span"}
          fontSize={buttonTextSize}
          fontFamily={fontFamily}
          sx={{
            display: "flex",
            alignItems: "center",
            px: 1,
            ...hover,
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
