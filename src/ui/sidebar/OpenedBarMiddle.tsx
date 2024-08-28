import { Box, Grid, Skeleton } from "@mui/material";
import useThemeStore from "../../store/store";
import SelectDropDown from "../../components/molecules/SelectDropDown";
import LinkedButton from "../../components/atom/LinkedButton";
import { LinkedButtonHeightSmall, SkeletonNormal } from "../../styles/mui";
import NotLoginButton from "../../components/molecules/NotLoginButton";
import { fourMenuData } from "../../constants/fourMenuData";

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
              text="새로운 모임"
              sx={{ ...LinkedButtonHeightSmall }}
              href="/GroupMake"
            />
          </Box>
          <Skeleton variant="rounded" sx={{ ...SkeletonNormal }} />
          <Box sx={{ height: 130, display: "flex", alignItems: "center" }}>
            <Grid
              container
              spacing={0}
              sx={{ gap: 2, justifyContent: "center" }}
            >
              {Object.entries(fourMenuData).map(([key, item]) => (
                <Grid item xs={5} md={5}>
                  <LinkedButton text={item.text} href={item.href} />
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
