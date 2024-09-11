import { Card, CardContent, Typography } from "@mui/material";
import { SkeletonMini } from "../../../styles/mui";
import { colors } from "../../../styles/colors";
import { sizes } from "../../../styles/sizes";
import { TextCardProps } from "../../../utils/type";

const TextCard = ({
  text,
  sx = {
    ...SkeletonMini,
    bgcolor: colors.background.primary,
    maxWidth: sizes.width.sidebar,
  },
}: TextCardProps) => {
  return (
    <Card sx={sx}>
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{
            fontSize: sizes.fontSize.small,
            wordWrap: "break-word",
            whiteSpace: "normal",
          }}
          color="text.secondary"
          variant="body2"
          width={sizes.width.sidebar}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TextCard;
