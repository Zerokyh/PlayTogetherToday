import { Box, List, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { colors } from "../styles/colors";
import { sizes } from "../styles/sizes";
import AnnounceList from "./AnnounceList";

const Announce = () => {
  return (
    <Box
      sx={{
        width: "33.33%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 4,
          bgcolor: colors.background.secondary,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          padding: "12px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: sizes.fontSize.large }} variant="inherit">
            공지사항
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 4,
              bgcolor: colors.background.tertiary,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              padding: "12px",
              maxHeight: "260px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: sizes.gap.medium,
                justifyContent: "flex-end",
              }}
            >
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
                삭제하기
              </Button>
            </Box>
            <Box
              sx={{
                width: "100%",
                paddingx: sizes.padding.medium,
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: sizes.gap.mLarge,
                  padding: "0px",
                }}
              >
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="이번주 회비 미지급자 명단입니다.."
                  member="총무"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Announce;
