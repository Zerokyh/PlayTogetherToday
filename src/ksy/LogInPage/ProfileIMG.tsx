import { Box } from "@mui/material";

function MyProfileImg() {
    return (
        <Box display={"flex"} justifyContent={"center"}>
            <Box sx={{
                width: "220px",
                height: "220px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#E5E5E5",
                borderRadius: "100%",
            }}>
            <Box
                component="img"
                src="/cat.jpg"
                alt="프로필 이미지"
                sx={{
                    width: "200px",
                    height: "200px",
                    borderRadius: '100%',
            }}/>
            </Box>
        </Box>
    );
}

export default MyProfileImg;