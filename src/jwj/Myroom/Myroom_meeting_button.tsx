import { sizes } from "../../styles/sizes";

type meeting_button_props = {
  group?: string;
  type?: string;
  count?: string;
  position?: string;
  comming?: string;
  group_anni?: string;
  onClick?: () => void;
};

const Myroom_meeting_button = ({
  group,
  type,
  count,
  position,
  comming,
  group_anni,
  onClick,
}: meeting_button_props) => {
  return (
    <button
      style={{ fontSize: sizes.fontSize.xsmall }}
      className="w-full h-1/4 flex  items-center justify-between bg-violet-200  rounded-xl"
      onClick={onClick}
    >
      <div className="w-1/2 h-full flex flex-col justify-center items-start pl-3  gap-0.5">
        <div>{group}</div>
        <div>{type}</div>
        <div>{count}</div>
      </div>
      <div
        style={{ fontSize: sizes.fontSize.xsmall }}
        className="w-1/2 h-full flex flex-col  justify-center items-start pl-3 gap-0.5"
      >
        <div>{position}</div>
        <div>{comming}</div>
        <div>{group_anni}</div>
      </div>
    </button>
  );
};

export default Myroom_meeting_button;
