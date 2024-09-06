import useThemeStore from "../../store/store";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import SelectDropDown from "../../components/molecules/SelectDropDown";
import LinkedButton from "../../components/atom/LinkedButton";
import { LinkedButtonHeightSmall, SkeletonNormal } from "../../styles/mui";
import NotLoginButton from "../../components/molecules/NotLoginButton";
import { fourMenuData } from "../../constants/fourMenuData";
import GroupMemberList from "../../kyh/GroupMemberList";

const OpenedBarMiddle = () => {
  const { isLogin } = useThemeStore();
  return (
    <Box>
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
            <SelectDropDown />
            <LinkedButton
              variantType="outlined"
              textcolor="primary"
              text="새로운 모임"
              sx={{ ...LinkedButtonHeightSmall }}
              href="/GroupMake"
            />
          </Box>
          {/* <Skeleton variant="rounded" sx={{ ...SkeletonNormal }} /> */}
          <Box sx={{ mx: "auto", width: 214, height: 190, my: 1 }}>
            <GroupMemberList nickname="동글동글" position="모임장" />
            <GroupMemberList nickname="네모네모" position="총무" />
            <GroupMemberList nickname="세모세모" position="멤버" />
          </Box>
          <Box sx={{ height: 120, display: "flex", alignItems: "center" }}>
            <Grid
              container
              spacing={0}
              sx={{ gap: 2, justifyContent: "center" }}
            >
              {Object.entries(fourMenuData).map(([key, item]) => (
                <Grid item xs={5} md={5}>
                  <LinkedButton
                    variantType="outlined"
                    textcolor="primary"
                    text={item.text}
                    href={item.href}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <>
          <NotLoginButton />
        </>
      )}
    </Box>
  );
};

export default OpenedBarMiddle;
