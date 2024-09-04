import { BorderListBox, GroupFirstBorder } from "../styles/mui";
import Categori from "./Categori";
import RegisterButton from "./RegisterButton";
import BorderList from "./BorderList";
import { Box, Typography } from "@mui/material";
import TopBox from "./TopBox";

type BorderGroupSecondBoxProps = {
  title?: string;
};

const BorderGroupSecondBox = ({ title }: BorderGroupSecondBoxProps) => {
  return (
    <BorderListBox>
      <GroupFirstBorder>
        <Typography variant="h5">{title}</Typography>
      </GroupFirstBorder>
      <div className="w-full h-2/5 ">
        <TopBox rank="TOP1" src="group.jpg"></TopBox>
      </div>
      <div className="w-full h-2/5 flex gap-4 justify-between">
        <TopBox rank="TOP2" src="private.jpg"></TopBox>
        <TopBox rank="TOP3" src="game.jpg"></TopBox>
      </div>
    </BorderListBox>
  );
};
export default BorderGroupSecondBox;
