import { Box, Typography } from "@mui/material";

type GroupMake_Setting_props = {
  text: string;
  feature?: string | JSX.Element;
};

const GroupMake_Setting = ({ text, feature }: GroupMake_Setting_props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      
      {/* Input 제목 */}
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        {text}
      </Typography>

      {/* 주석 */}
      <Box
        sx={{
          margin: 0.3,
          marginLeft: 0.5,
          fontSize: 'small',
          fontWeight: 'normal',
          color: '#23374D',
        }}
      >
        {feature}
      </Box>
    </Box>
  );
};

export default GroupMake_Setting;
