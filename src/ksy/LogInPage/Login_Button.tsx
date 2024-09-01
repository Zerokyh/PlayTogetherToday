import { Box, Button } from "@mui/material";

const LoginBtn = () => {
    return (
        <Box width={"100%"}>
            <Box display={"flex"} justifyContent={"end"} marginRight={1} gap={0.2}>
                <Button sx={{ width: "fit-content", paddingX: "3px", fontWeight: "bold", fontSize: "12px", color: "#23374D"}}>
                회원가입
                </Button>
                <Button sx={{ width: "fit", paddingX: "3px", fontWeight: "bold", fontSize: "12px", color: "#23374D"}}>
                아이디/비번 찾기
                </Button>
            </Box>

          {/* 로그인 버튼 */}
            <Box display={"flex"} justifyContent={"center"}>
                <Button
                    sx={{
                    width: "100%",
                    height: 40,
                    bgcolor: "#006DFF",
                    fontSize: 16,
                    color: "white",
                    borderRadius: 10,
                }}>
                    로그인
                </Button>
            </Box>
        </Box>
    )
}

export default LoginBtn;