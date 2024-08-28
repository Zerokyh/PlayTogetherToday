import { sizes } from "../../styles/sizes";

type GroupMake_Setting_props = {
  text: string;
  feature?: string;
};

const GroupMake_Setting = ({ text, feature }: GroupMake_Setting_props) => {
  return (
    <div>
      <div style={{ fontSize: sizes.fontSize.xsmall }} className="font-bold ">
        {text}
      </div>
      <div className="text-[10px] text-gray-500 ">{feature}</div>
    </div>
  );
};

export default GroupMake_Setting;
