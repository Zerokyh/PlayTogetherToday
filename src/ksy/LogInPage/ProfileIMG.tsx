import { Box } from "@mui/material";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors"
import { sizes } from "../../styles/sizes";

function MyProfileImg() {
    const { isTheme } = useThemeStore();

    return (
        <Box display={"flex"} justifyContent={"center"}>
            <Box sx={{
                width: "220px",
                height: "220px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: sizes.margin.xlarge,
                bgcolor:
                    isTheme == "기본"
                    ? colors.background.secondary
                    : colors.sub_background.secondary,
                borderRadius: sizes.borderRadius.circle,
            }}>
            <Box
                component="img"
                src="/cat.jpg"
                alt="프로필 이미지"
                sx={{
                    width: "200px",
                    height: "200px",
                    borderRadius: sizes.borderRadius.circle,
            }}/>
            </Box>
        </Box>
    );
}

export default MyProfileImg;