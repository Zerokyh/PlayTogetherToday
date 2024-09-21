import { Box, Button, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";

type MeetingButtonProps = {
  group?: string;
  type?: string;
  count?: string;
  position?: string;
  comming?: string;
  group_anni?: Date;
  onClick?: () => void;
};

const Myroom_meeting_button = ({
  group,
  type,
  count,
  position,
  comming,
  group_anni,
  onClick,
}: MeetingButtonProps) => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();

  const group_anniversary =
    group_anni instanceof Date ? group_anni.toLocaleDateString() : group_anni;

  return (
    <Button
      onClick={onClick}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor:
          isTheme == ("기본" as ThemeType)
            ? colors.background.tertiary
            : colors.sub_background.tertiary,
        borderRadius: "12px",
        padding: "8px",
        textAlign: "left",
        overflow: "hidden",
        textTransform: "none",
        color: "black",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "12px",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {group}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {type}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {count}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "12px",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {position}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {comming}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {group_anniversary}
        </Typography>
      </Box>
    </Button>
  );
};

export default Myroom_meeting_button;
