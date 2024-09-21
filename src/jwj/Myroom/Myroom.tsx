import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Myroom_profile from "./Myroom_profile";
import Myroom_meeting_button from "./Myroom_meeting_button";
import Myroom_freindsList from "./Myroom_freindsList";
import Myroom_message from "./Myroom_message";
import { sizes } from "../../styles/sizes";
import { useNavigate } from "react-router-dom";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";
import ImgAvatar from "../../components/atom/Avatar/ImgAvatar";
import { borderRadius, display } from "@mui/system";
import { Link } from "@mui/material";
import axios from "axios";

type MemberInfo = {
  member_id: number;
  member_nickname: string;
  member_phone: string;
  member_2nd_email: string;
  member_address: string;
  member_anniversary: string;
  group_position: string;
  group_anniversary: string;
};

type GroupInfo = {
  group_id: number;
  group_name: string;
  group_type_id: number;
  group_anniversary: Date;
};

type FriendList = {
  friend_nickname: string;
  member_anniversary: string;
  group_name: string;
};

const Myroom = () => {
  const navigate = useNavigate();

  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();
  const [Memberdata, setMemberData] = React.useState<MemberInfo | null>(null); //서버에서 불러온 데이터 저장
  const [GroupData, setGroupData] = React.useState<GroupInfo[]>([]);
  const [FriendData, setFriendData] = React.useState<FriendList[]>([]);

  //쪽지함 공개/비공개
  const MessageisPublic = true;
  //그룹함 공개/비공개
  const GroupisPublic = true;
  //친구리스트 공개/비공개
  const FreindsListisPublic = true;

  React.useEffect(() => {
    // 멤버 정보 불러오기
    axios
      // .get("http://localhost:8080/Myroom")
      .get(
        "https://playtotogether-backendserver-djbdckftbygrbraw.koreasouth-01.azurewebsites.net/Myroom"
      )
      .then((response) => {
        setMemberData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching member data:", error);
      });
  }, []);

  React.useEffect(() => {
    // 멤버 정보가 설정된 후에만 그룹 정보를 불러옵니다
    if (Memberdata?.member_id) {
      axios
        .get("http://localhost:8080/Myroom/groups", {
          params: { member_id: Memberdata.member_id }, // member_id를 동적으로 가져오기
        })
        .then((response) => {
          setGroupData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching group data:", error);
        });
    }
  }, [Memberdata]); // Memberdata가 변경될 때만 그룹 정보를 요청

  React.useEffect(() => {
    // 멤버 정보가 설정된 후에만 친구 정보를 불러옵니다
    if (Memberdata?.member_id) {
      axios
        .get("http://localhost:8080/Myroom/friends", {
          params: { member_id: Memberdata.member_id }, // member_id를 동적으로 가져오기
        })
        .then((response) => {
          setFriendData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching group data:", error);
        });
    }
  }, [Memberdata]); // Memberdata가 변경될 때만 친구 정보를 요청

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
        gap: 2,
      }}
    >
      <Grid
        container
        sx={{
          gridColumn: "span 2",
          gridRow: "span 3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.secondary
              : colors.sub_background.secondary,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 2,
            gap: 2,
          }}
        >
          <Box
            sx={{
              height: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: sizes.fontSize.large }}>
              {Memberdata?.member_nickname}
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: sizes.fontSize.medium }}
            >
              그룹 총(N) 활동중입니다.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "80%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Myroom_profile
              info_name="연 락 처"
              info={Memberdata?.member_phone}
              profileIsPublic={true}
            />
            <Myroom_profile
              info_name="이 메 일"
              info={Memberdata?.member_2nd_email}
              profileIsPublic={true}
            />
            <Myroom_profile
              info_name="주 소"
              info={Memberdata?.member_address}
              profileIsPublic={true}
            />
            <Myroom_profile info_name="그룹 직책" profileIsPublic={false} />
            <Myroom_profile
              info_name="개인 기념일"
              info={Memberdata?.member_anniversary}
              profileIsPublic={true}
            />
            <Myroom_profile
              info_name="그룹 기념일"
              info={GroupData[0]?.group_anniversary}
              profileIsPublic={true}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "35%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px",
          }}
        >
          <ImgAvatar
            src="cat.jpg"
            alt="프로필"
            sx={{
              width: "100%",
              height: "100%",
              mx: "auto",
              borderRadius: 5,
            }}
          />
        </Box>
      </Grid>

      <Grid
        container
        sx={{
          gridColumn: "span 2",
          gridRow: "span 4",
          backgroundColor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.secondary
              : colors.sub_background.secondary,
          borderRadius: 2,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "120px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: sizes.fontSize.xlarge,
            fontWeight: "bold",
            backgroundColor:
              isTheme == ("기본" as ThemeType)
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
            borderRadius: "16px",
          }}
        >
          친구리스트
        </Box>
        {FreindsListisPublic ? (
          <Box
            sx={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {FriendData.length > 0 ? (
              FriendData.map((friend, index) => (
                <Myroom_freindsList
                  name={friend.friend_nickname}
                  anni={friend.member_anniversary}
                  group={friend.group_name}
                />
              ))
            ) : (
              <p>친구 정보를 불러오는 중입니다...</p>
            )}
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>공개되지않습니다.</Typography>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              권한 요청
            </Link>
          </Box>
        )}
      </Grid>

      <Grid
        container
        sx={{
          width: "100%",
          height: "100%",
          gridColumn: "span 2",
          gridRow: "span 5",
          backgroundColor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.secondary
              : colors.sub_background.secondary,
          borderRadius: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "96px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: sizes.fontSize.xlarge,
            fontWeight: "bold",
            backgroundColor:
              isTheme == ("기본" as ThemeType)
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
            borderRadius: "16px",
          }}
        >
          나의 모임
        </Box>
        {GroupisPublic ? (
          <Box
            sx={{
              width: "100%",
              height: "80%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {GroupData.length > 0 ? (
              GroupData.map((group, index) => (
                <Myroom_meeting_button
                  group={group.group_name}
                  type={`그룹 타입 ${group.group_type_id}`}
                  count="그룹 멤버수"
                  position="직책"
                  comming="다가오는 모임 날짜"
                  group_anni={group.group_anniversary}
                  onClick={() => navigate("/BorderDetail")}
                />
              ))
            ) : (
              <p>그룹 정보를 불러오는 중입니다...</p>
            )}
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>공개되지않습니다.</Typography>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              권한 요청
            </Link>
          </Box>
        )}
      </Grid>

      <Grid
        container
        sx={{
          height: "100%",
          gridColumn: "span 2",
          gridRow: "span 4",
          backgroundColor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.secondary
              : colors.sub_background.secondary,
          borderRadius: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "96px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: sizes.fontSize.xlarge,
            fontWeight: "bold",
            backgroundColor:
              isTheme == ("기본" as ThemeType)
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
            borderRadius: "16px",
          }}
        >
          쪽지함
        </Box>

        {MessageisPublic ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              overflowY: "auto",
            }}
          >
            <Myroom_message
              contents="권한 요청"
              time="쪽지 보낸시간"
              type="authorize"
              alarm="System"
            />
            <Myroom_message
              contents="기념일 알림"
              time="쪽지 보낸시간"
              type="contents"
              alarm="Group"
            />
            <Myroom_message
              contents="친구 요청"
              time="쪽지 보낸시간"
              type="normal"
              alarm="System"
            />
            <Myroom_message
              contents="탈퇴 신청"
              time="쪽지 보낸시간"
              type="contents"
              alarm="Group"
            />
            <Myroom_message
              contents="쪽지 내용"
              time="쪽지 보낸시간"
              type="contents"
              alarm="Group"
            />
            <Myroom_message
              contents="쪽지 내용"
              time="쪽지 보낸시간"
              type="normal"
              alarm="System"
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>공개되지않습니다.</Typography>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              권한 요청
            </Link>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Myroom;
