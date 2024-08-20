import * as React from "react";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import {
  Box,
  Button,
  FormControl,
  List,
  ListItemButton,
  Select,
  SelectChangeEvent,
  InputLabel,
  MenuItem,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import ImgAvatar from "../../components/atom/ImgAvatar";
import LinkedButton from "../../components/atom/LinkedButton";
import Calendar from "../../components/organism/Calendar";
import { AvatarSize } from "../../styles/mui";

const OpenedBar = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin, isOpen } = useThemeStore();
  const [game, setGame] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setGame(event.target.value as string);
  };

  // 로그아웃으로 상태 설정
  setIsLogin(false);

  return (
    <>
      <List sx={{ ...(isOpen == false && { display: "none" }) }}>
        {isLogin ? (
          <Box>
            <ListItemButton
              sx={{
                width: "90px",
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
                position: "absolute",
                top: -54,
                fontSize: "12px",
              }}
            >
              로그아웃
            </ListItemButton>
            <Divider
              variant="middle"
              component="li"
              sx={{ position: "relative", top: -7 }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                }}
              >
                <ImgAvatar
                  alt="Logo"
                  src="/onlylogo.png"
                  sx={{ ...AvatarSize }}
                />
              </Box>
              <Box>
                <ListItemText
                  primary={`[]회원님`}
                  primaryTypographyProps={{ fontSize: 14 }}
                />
                <ListItemText
                  primary={`그룹 []의 호스트입니다.`}
                  primaryTypographyProps={{ fontSize: 14 }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1.2,
              }}
            >
              <FormControl sx={{ my: 1, width: 114 }} size="small">
                <InputLabel
                  id="group-select-label"
                  size="small"
                  sx={{ fontSize: 10 }}
                >
                  Select Group
                </InputLabel>
                <Select
                  labelId="group-select-label"
                  id="group-select"
                  value={game}
                  label="Select Group"
                  onChange={handleChange}
                >
                  <MenuItem value="">선택안함</MenuItem>
                  <MenuItem value={10}>🎳볼링</MenuItem>
                  <MenuItem value={20}>🎲보드게임</MenuItem>
                  <MenuItem value={30}>⚽축구</MenuItem>
                  <MenuItem value={40}>📚독서</MenuItem>
                  <MenuItem value={50}>🏃‍♂️런닝</MenuItem>
                </Select>
              </FormControl>
              {/* <Button
            sx={{
              width: 100,
              height: 40,
              color: "black",
              fontWeight: 600,
              border: "1px solid #C0C0C0",
              fontSize: 12,
            }}
          >
            새로운 모임
          </Button> */}
              <LinkedButton text="새로운 모임" />
            </Box>
            <Skeleton
              variant="rounded"
              width={224}
              height={200}
              sx={{ mx: "auto" }}
            />
            <Box sx={{ height: 130, display: "flex", alignItems: "center" }}>
              <Grid
                container
                spacing={0}
                sx={{ gap: 2, justifyContent: "center" }}
              >
                <Grid item xs={5} md={5}>
                  <Button
                    sx={{
                      width: 100,
                      height: 40,
                      color: "black",
                      fontWeight: 600,
                      border: "1px solid #C0C0C0",
                      fontSize: 12,
                    }}
                  >
                    마이룸
                  </Button>
                </Grid>
                <Grid item xs={5} md={5}>
                  <Button
                    sx={{
                      width: 100,
                      height: 40,
                      color: "black",
                      fontWeight: 600,
                      border: "1px solid #C0C0C0",
                      fontSize: 12,
                    }}
                    onClick={() => {
                      navigate("/Chat");
                    }}
                  >
                    채팅룸
                  </Button>
                </Grid>
                <Grid item xs={5} md={5}>
                  <Button
                    sx={{
                      width: 100,
                      height: 40,
                      color: "black",
                      fontWeight: 600,
                      border: "1px solid #C0C0C0",
                      fontSize: 12,
                    }}
                  >
                    모임룸
                  </Button>
                </Grid>
                <Grid item xs={5} md={5}>
                  <Button
                    sx={{
                      width: 100,
                      height: 40,
                      color: "black",
                      fontWeight: 600,
                      border: "1px solid #C0C0C0",
                      fontSize: 12,
                    }}
                  >
                    게임룸
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Calendar />
            </Box>
            <Skeleton
              variant="rounded"
              width={224}
              height={140}
              sx={{ mx: "auto" }}
            />
          </Box>
        ) : (
          <Box></Box>
        )}
      </List>
    </>
  );
};

export default OpenedBar;
