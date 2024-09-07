import useThemeStore from "../../store/store";
import { Box, Grid, Skeleton } from "@mui/material";
import LinkedButton from "../../components/atom/Button/LinkedButton";
import { LinkedButtonHeightSmall, SkeletonNormal } from "../../styles/mui";
import NotLoginButton from "../../components/molecules/Button/NotLoginButton";
import { fourMenuData } from "../../constants/fourMenuData";
import GroupMemberBox from "../../kyh/GroupMemberBox";
import SelectDropDown from "../../components/molecules/Button/SelectDropDown";

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
              gap: 2.8,
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
          <GroupMemberBox />
          <Box
            sx={{
              height: 120,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid
              container
              spacing={0}
              sx={{ display: "flex", gap: 3, justifyContent: "center" }}
            >
              {Object.entries(fourMenuData).map(([key, item]) => (
                <Grid item xs={5} md={5} key={key}>
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
