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
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import ImgAvatar from "../../components/atom/ImgAvatar";
import LinkedButton from "../../components/atom/LinkedButton";
import Calendar from "../../components/organism/Calendar";
import { AvatarSize, SkeletonMini, SkeletonNormal } from "../../styles/mui";
import { sizes } from "../../styles/sizes";
import { colors } from "../../styles/colors";
import NotLoginButton from "../../components/molecules/NotLoginButton";

const OpenedBar = () => {
  const navigate = useNavigate();
  const { isLogin, isOpen } = useThemeStore();
  const [game, setGame] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setGame(event.target.value as string);
  };

  return (
    <>
      <List sx={{ ...(isOpen == false && { display: "none" }) }}>
        <Box>
          {isLogin ? (
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
          ) : (
            <Box />
          )}
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
              py: sizes.padding.large,
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
              {isLogin ? (
                <>
                  <ListItemText
                    primary={`[]회원님`}
                    primaryTypographyProps={{ fontSize: sizes.fontSize.medium }}
                  />
                  <ListItemText
                    primary={`그룹 []의 호스트입니다.`}
                    primaryTypographyProps={{ fontSize: sizes.fontSize.medium }}
                  />
                </>
              ) : (
                <>
                  <ListItemText
                    primary={`Play Together Today`}
                    primaryTypographyProps={{ fontSize: sizes.fontSize.medium }}
                  />
                </>
              )}
            </Box>
          </Box>
          {isLogin ? (
            <>
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
              <Skeleton variant="rounded" sx={{ ...SkeletonNormal }} />
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
            </>
          ) : (
            <>
              <NotLoginButton />
            </>
          )}

          <Box>
            <Calendar />
          </Box>
          <Box>
            {isLogin ? (
              <Skeleton variant="rounded" sx={{ ...SkeletonMini }} />
            ) : (
              <Card
                sx={{
                  ...SkeletonMini,
                  bgcolor: colors.background.main,
                  maxWidth: sizes.width.sidebar,
                }}
              >
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
                    소모임은 여러분들의 갓생살기의 도우미입니다.
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Box>
        </Box>
      </List>
    </>
  );
};

export default OpenedBar;
