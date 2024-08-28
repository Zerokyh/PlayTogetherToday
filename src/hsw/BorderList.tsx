import { Box, Button } from "@mui/material";

const BorderList = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        borderRadius: 4,
        bgcolor: "primary.light",
      }}
    >
      <div className="w-full h-full flex px-5 py-3 gap-2 items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-[32px] h-[32px] rounded-full border border-black bg-black">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="text-sm font-bold text-slate-700">
            {/* 제목 */}
            <p>운동 소모임</p>
          </div>
          <div className="text-[10px]">
            {/* 소개란 */}
            <p>다양한 운동 정보를 공유하세요!!</p>
          </div>
        </div>
        <div>
          <Button color="primary">가입하기</Button>
        </div>
      </div>
    </Box>
  );
};

export default BorderList;
