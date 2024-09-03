import { Button } from "@mui/material";
import { LinkedButtonNormal } from "../../styles/mui";
import { colors } from "../../styles/colors";
import { useNavigate } from "react-router-dom";
import { fontFamily } from "../../styles/theme";
import useThemeStore from "../../store/store";
import { alpha } from "@mui/material/styles";

type inputVariantType = "text" | "contained" | "outlined";

type textColorType = keyof typeof colors.text;

type classicColorType = keyof typeof colors.background;

type sunsetColorType = keyof typeof colors.sub_background;

type LinkedButtonProps = {
  variantType?: inputVariantType;
  textcolor?: textColorType;
  bgcolor?: classicColorType | sunsetColorType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  text: string;
  sx?: object;
  font?: object;
};

const LinkedButton = ({
  variantType = "text",
  textcolor = "primary",
  bgcolor = "drawer",
  onClick,
  href,
  text,
  sx = {
    ...LinkedButtonNormal,
  },
  font = { fontFamily: fontFamily },
}: LinkedButtonProps) => {
  const navigate = useNavigate();
  const { isTheme } = useThemeStore();

  // 테마에 따라 색상 선택을 다르게 할 수 있도록 함
  const backgroundColor =
    isTheme === "클래식"
      ? colors.background[bgcolor as classicColorType] // 현재 테마가 "클래식"이면 클래식 색 중에서 사용
      : colors.sub_background[bgcolor as sunsetColorType]; // 현재 테마가 "선셋"이면 선셋 색 중에서 사용

  const hoverColor = alpha(backgroundColor, 0.8);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    href && !onClick && navigate(href);
  };

  return (
    <Button
      variant={variantType}
      sx={{
        ...sx,
        ...font,
        color: colors.text[textcolor],
        backgroundColor: backgroundColor,
        "&:hover": {
          backgroundColor: hoverColor,
        },
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default LinkedButton;
