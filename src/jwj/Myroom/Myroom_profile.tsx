import { sizes } from "../../styles/sizes";

type profile_props = {
  info_name?: string;
  info?: string;
  //   email?: string;
  //   address?: string;
  //   position?: string;
  //   own_anni ?: string;
  //   group_anni ?: string;
};

const Myroom_profile = ({ info_name, info }: profile_props) => {
  return (
    <div
      style={{ fontSize: sizes.fontSize.xsmall }}
      className="w-full bg-violet-200 rounded-md px-1  flex-1 items-center min-h-0 max-h-[16.66%]"
    >
      <span>{info_name}: </span>
      <span>{info}</span>
    </div>
  );
};

export default Myroom_profile;
