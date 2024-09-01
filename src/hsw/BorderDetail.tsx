import { Box, ThemeProvider, createTheme } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import XIcon from "@mui/icons-material/X";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const BorderDetail = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F3EAFB",
        dark: "#ddc6f5",
        light: "#bdbdbd",
      },
      secondary: {
        main: "#bdbdbd",
        dark: "#000000",
      },
    },
  });

  const [value, setValue] = useState(0);

  return (
    <>
      <div className="w-full h-full flex flex-col gap-3">
        <div className="w-full h-1/2 flex gap-5 p-4 ">
          <div className="w-1/3 h-full ">
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  bgcolor: "primary.main",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "10px",
                }}
              >
                <div className="w-full h-1/4 flex items-center p-2">
                  <div className="w-[60px] h-[60px] rounded-md ">
                    <div className="w-full h-full rounded-md bg-red-400"></div>
                  </div>
                  <div className="w-full p-3 flex flex-col gap-2 text-justify ">
                    <p className="text-xl">MIC로 소프트 하게</p>
                    <p className="text-sm">노래 / 허각 외 5명의 멤버</p>
                  </div>
                </div>
                <div className="w-full h-3/4 p-2 flex gap-3">
                  <div className="w-1/2 h-full flex flex-col gap-3 ">
                    <ThemeProvider theme={theme}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "70%",
                          borderRadius: 4,
                          bgcolor: "primary.dark",
                          display: "flex",
                          flexDirection: "column",
                          gap: "14px",
                          padding: "10px",
                          alignItems: "center",
                        }}
                      >
                        <div className="w-5/6">
                          <ol className="flex flex-col gap-1">
                            <li className="text-base">
                              <p>이벤트 게시판</p>
                            </li>
                            <li className="flex text-xs justify-between">
                              <p>불꽃놀이</p>
                              <p>월미도 / 19:00</p>
                            </li>
                            <li className="flex text-xs justify-between">
                              <p>물놀이</p>
                              <p>캐리비안베이 / 9:00</p>
                            </li>
                          </ol>
                        </div>
                      </Box>
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "30%",
                          borderRadius: 4,
                          bgcolor: "primary.dark",
                          display: "flex",
                          flexDirection: "column",
                          gap: "14px",
                          padding: "10px",
                        }}
                      >
                        <ul>
                          <li className="text-base font-semibold">
                            이번달 주인공
                          </li>
                          <li className="flex justify-around text-xs">
                            <p>광복절</p>
                            <p>8월 15일</p>
                          </li>
                        </ul>
                      </Box>
                    </ThemeProvider>
                  </div>
                  <div className="w-1/2 h-full ">
                    <ThemeProvider theme={theme}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 4,
                          bgcolor: "primary.dark",
                          display: "flex",
                          flexDirection: "column",
                          gap: "14px",
                          padding: "10px",
                        }}
                      >
                        <div className="font-semibold">
                          <p>멤버 리스트</p>
                        </div>
                        <div className="flex flex-col gap-2 font-semibold">
                          <ul className="">
                            <li className="flex justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-[20px] h-[20px] rounded-full bg-red-300"></div>
                                <div>
                                  <p>허각</p>
                                </div>
                              </div>
                              <div>
                                <p>호스트</p>
                              </div>
                            </li>
                            <li className="flex justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-[20px] h-[20px] rounded-full bg-red-300"></div>
                                <div>
                                  <p>김동전</p>
                                </div>
                              </div>
                              <div>
                                <p>총무</p>
                              </div>
                            </li>
                            <li className="flex justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-[20px] h-[20px] rounded-full bg-red-300"></div>
                                <div>
                                  <p>신용재</p>
                                </div>
                              </div>
                              <div>
                                <p>멤버</p>
                              </div>
                            </li>
                            <li className="flex justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-[20px] h-[20px] rounded-full bg-red-300"></div>
                                <div>
                                  <p>임한별</p>
                                </div>
                              </div>
                              <div>
                                <p>멤버</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Box>
                    </ThemeProvider>
                  </div>
                </div>
              </Box>
            </ThemeProvider>
          </div>
          <div className="w-2/3 h-full ">
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  bgcolor: "primary.main",
                  display: "flex",
                  gap: "30px",
                  alignItems: "center",
                  padding: "30px",
                }}
              >
                {/* 이미지 박스 */}
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 4,
                      bgcolor: "primary.dark",
                    }}
                  ></Box>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 4,
                      bgcolor: "primary.dark",
                    }}
                  ></Box>
                </ThemeProvider>
              </Box>
            </ThemeProvider>
          </div>
        </div>
        <div className="w-full h-1/2 flex gap-5 p-4 ">
          <div className="w-1/3 h-full ">
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  bgcolor: "primary.main",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  padding: "12px",
                }}
              >
                <div className="w-full border text-center p-2 font-semibold">
                  <p>MIC로 소프트 하게 참석하실건가요?</p>
                </div>
                <div className="w-full flex justify-center">
                  <BottomNavigation
                    sx={{
                      width: "fit-content",
                      bgcolor: "primary.main",
                    }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                      console.log(value);
                    }}
                  >
                    <BottomNavigationAction
                      label="참여"
                      sx={{
                        color:
                          value === 0 ? "secondary.main" : "secondary.main",
                        "&.Mui-selected": {
                          color: "secondary.dark",
                        },
                      }}
                      icon={<DoneOutlineIcon />}
                    />
                    <BottomNavigationAction
                      sx={{
                        color:
                          value === 1 ? "secondary.main" : "secondary.main",
                        "&.Mui-selected": {
                          color: "secondary.dark",
                        },
                      }}
                      label="참여안함"
                      icon={<XIcon />}
                    />
                  </BottomNavigation>
                </div>
                <div className="w-full">
                  <Box
                    sx={{
                      width: "100%",
                      height: "180px",
                      borderRadius: 4,
                      bgcolor: "primary.dark",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      alignItems: "center",
                      padding: "12px",
                      justifyContent: "space-between",
                    }}
                  >
                    <ul className="w-full flex flex-col gap-2 justify-between font-semibold">
                      <li className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-[20px] h-[20px] rounded-full bg-red-300"></div>
                          <div>
                            <p>김동전</p>
                          </div>
                        </div>
                        <div>
                          <p>총무</p>
                        </div>
                        <div>
                          <p>참석</p>
                        </div>
                      </li>

                      <li className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-[20px] h-[20px] rounded-full bg-red-300"></div>
                          <div>
                            <p>홍길동</p>
                          </div>
                        </div>
                        <div>
                          <p>매니저</p>
                        </div>
                        <div>
                          <p className="font-medium">불참</p>
                        </div>
                      </li>
                    </ul>
                    <div className="flex justify-center gap-4">
                      <div className="flex w-fit h-fit">
                        <p className="font-semibold">참석 : </p>
                        <p className="font-semibold">00 명</p>
                      </div>
                      <div className="flex w-fit h-fit">
                        <p className="font-light">불참 : </p>
                        <p className="font-light">00 명</p>
                      </div>
                    </div>
                  </Box>
                </div>
              </Box>
            </ThemeProvider>
          </div>
          <div className="w-1/3 h-full ">
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  bgcolor: "primary.main",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  alignItems: "center",
                  padding: "12px",
                }}
              >
                <div className="w-full">
                  <p className="text-lg">회비운영내역</p>
                </div>
                <div className="w-full text-right">
                  <p className="font-semibold">$ 000,000,000원</p>
                </div>
                <div className="w-full flex gap-3 h-full">
                  <ThemeProvider theme={theme}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 4,
                        bgcolor: "primary.dark",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        alignItems: "center",
                        padding: "12px",
                      }}
                    >
                      <div className="w-full flex font-semibold text-sm justify-end">
                        <p>총 수익:</p>
                        <p>000,000,000원</p>
                      </div>
                      <div className="w-full">
                        <ul className="w-full flex flex-col justify-start gap-1">
                          <li className="flex gap-1 items-center border-purple-400 border-b-2 pb-1">
                            <div className="">
                              <AddCircleOutlineIcon />
                            </div>
                            <div>회비수익</div>
                          </li>
                          <li className="flex gap-1 items-center border-purple-400 border-b-2 pb-1">
                            <div className="">
                              <AddCircleOutlineIcon />
                            </div>
                            <div>회비수익</div>
                          </li>
                          <li className="flex gap-1 items-center border-purple-400 border-b-2 pb-1">
                            <div className="">
                              <AddCircleOutlineIcon />
                            </div>
                            <div>회비수익</div>
                          </li>
                        </ul>
                      </div>
                    </Box>
                  </ThemeProvider>
                  <ThemeProvider theme={theme}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 4,
                        bgcolor: "primary.dark",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        alignItems: "center",
                        padding: "12px",
                      }}
                    >
                      <div className="w-full flex font-semibold text-sm justify-end">
                        <p>총 지출:</p>
                        <p>000,000,000원</p>
                      </div>
                      <div className="w-full">
                        <ul className="w-full flex flex-col justify-start gap-1">
                          <li className="flex gap-1 items-center border-purple-400 border-b-2 pb-1">
                            <div className="">
                              <RemoveCircleOutlineIcon sx={{ color: "red" }} />
                            </div>
                            <div>회비지출</div>
                          </li>
                          <li className="flex gap-1 items-center border-purple-400 border-b-2 pb-1">
                            <div className="">
                              <RemoveCircleOutlineIcon sx={{ color: "red" }} />
                            </div>
                            <div>회비지출</div>
                          </li>
                          <li className="flex gap-1 items-center border-purple-400 border-b-2 pb-1">
                            <div className="">
                              <RemoveCircleOutlineIcon sx={{ color: "red" }} />
                            </div>
                            <div>회비지출</div>
                          </li>
                        </ul>
                      </div>
                    </Box>
                  </ThemeProvider>
                </div>
              </Box>
            </ThemeProvider>
          </div>
          <div className="w-1/3 h-full ">
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  bgcolor: "primary.main",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                  padding: "12px",
                }}
              >
                <div className="w-full">
                  <p className="text-lg">공지사항</p>
                </div>
                <div className="w-full h-full">
                  <ThemeProvider theme={theme}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 4,
                        bgcolor: "primary.dark",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        alignItems: "center",
                        padding: "12px",
                      }}
                    >
                      <div className="w-full flex gap-1 justify-end">
                        <Button
                          sx={{
                            color: "black",
                            borderRadius: "30px",
                            borderColor: "black",
                            borderStyle: "solid",
                            paddingX: "30px",
                          }}
                          variant="outlined"
                        >
                          새로작성
                        </Button>
                        <Button
                          sx={{
                            color: "black",
                            borderRadius: "30px",
                            borderColor: "black",
                            borderStyle: "solid",
                            paddingX: "30px",
                          }}
                          variant="outlined"
                        >
                          편집하기
                        </Button>
                      </div>
                      <div className="w-full px-2">
                        <ul className="w-full px-2 flex flex-col gap-3">
                          <li className="w-full px-2 flex gap-1 items-center border-purple-400 border-b-2 pb-1">
                            <div className="w-full flex items-center justify-between">
                              <div className=" flex gap-2 items-center">
                                <p>
                                  <NotificationsActiveIcon />
                                </p>
                                <p className="text-xs">공지사항입니다.</p>
                              </div>
                              <p className="font-semibold">게시자</p>
                            </div>
                          </li>
                          <li className="w-full px-2 flex gap-1 items-center border-purple-400 border-b-2 pb-1">
                            <div className="w-full flex items-center justify-between">
                              <div className=" flex gap-2  items-center">
                                <p>
                                  <NotificationsActiveIcon />
                                </p>
                                <p className="text-xs">
                                  이번주 모임 참석자 분들은 필독 부탁드립니다.
                                </p>
                              </div>
                              <p className="font-semibold">게시자</p>
                            </div>
                          </li>
                          <li className="w-full px-2 flex gap-1 items-center border-purple-400 border-b-2 pb-1">
                            <div className="w-full flex items-center justify-between">
                              <div className=" flex gap-2  items-center">
                                <p>
                                  <NotificationsActiveIcon />
                                </p>
                                <p className="text-xs">
                                  회비 미지급자 명단 공개
                                </p>
                              </div>
                              <p className="font-semibold">총무</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Box>
                  </ThemeProvider>
                </div>
              </Box>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default BorderDetail;
