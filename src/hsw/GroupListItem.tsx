import { Button } from "@mui/material";
import GroupImg from "./GroupImg";
import { GroupImgAvatar } from "../styles/mui";

type GroupDetailProps = {
  groupName?: string;
  groupCategori?: string;
  groupInfo?: string;
  groupImg?: string;
  groupImgName?: string;
  groupImgSrc?: string;
};

const GroupListItem = ({
  groupName,
  groupCategori,
  groupInfo,
  groupImg,
  groupImgName,
  groupImgSrc,
}: GroupDetailProps) => {
  return (
    <div className="w-full h-full flex px-5 py-3 gap-2 items-center justify-between">
      <div className="flex items-center gap-5">
        <GroupImg
          alt={groupImgName}
          src={groupImgSrc}
          sx={{ ...GroupImgAvatar }}
        />
        <div className="text-sm font-bold text-slate-700">
          <p>{groupName}</p>
        </div>
        <div className="text-[10px]">
          <p>{groupInfo}</p>
        </div>
      </div>
      <div>
        <Button color="primary">가입하기</Button>
      </div>
    </div>
  );
};

export default GroupListItem;
