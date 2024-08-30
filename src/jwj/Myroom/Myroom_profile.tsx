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
    <div className="w-full flex items-center bg-violet-200 text-[10px] rounded-md px-1 flex-1  min-h-0 max-h-[16.66%]">
      <div>{info_name}: </div>
      <div>{info}</div>
    </div>
  );
};

export default Myroom_profile;
