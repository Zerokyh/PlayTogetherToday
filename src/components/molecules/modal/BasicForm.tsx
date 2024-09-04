import { Box } from "@mui/material";
import BasicText from "../../atom/BasicText";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { sizes } from "../../../styles/sizes";
import IconButton from "../../atom/IconButton";
import { colors } from "../../../styles/colors";
import LinkedButton from "../../atom/LinkedButton";

export type BasicFormProps = {
  title?: string;
  subtitle?: string;
  yesBtnText?: string;
  noBtnText?: string;
  handleClose?: () => void;
};

const BasicForm = ({
  title = "주제를 입력하세요",
  subtitle = "소주제를 입력하세요",
  yesBtnText = "요청하기",
  noBtnText = "확인",
  handleClose,
}: BasicFormProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 310,
          height: 120,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: sizes.gap.medium,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: sizes.gap.normal,
            }}
          >
            <InfoOutlinedIcon />
            <BasicText text={title} fontsize="medium" fontcolor="primary" />
          </Box>
          <IconButton icon={<CloseIcon />} onClick={handleClose} />
        </Box>
        <Box>
          <BasicText text={subtitle} fontsize="small" fontcolor="grey" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 30,
            gap: sizes.gap.large,
          }}
        >
          <LinkedButton
            variantType="outlined"
            text={noBtnText}
            sx={{
              height: 20,
              borderRadius: sizes.borderRadius.xs,
              border: `1px solid ${colors.text.primary}`,
            }}
          />
          <LinkedButton
            variantType="contained"
            textcolor="secondary"
            bgcolor="button"
            text={yesBtnText}
            sx={{
              height: 20,
              borderRadius: sizes.borderRadius.xs,

              bgcolor: "",
              p: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BasicForm;
