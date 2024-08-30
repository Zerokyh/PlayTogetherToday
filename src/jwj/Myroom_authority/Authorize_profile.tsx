import Authorize_button from "./Authorize_button";

type profile_props = {
  info_name?: string;

  //   email?: string;
  //   address?: string;
  //   position?: string;
  //   own_anni ?: string;
  //   group_anni ?: string;
};

const Authorize_profile = ({ info_name }: profile_props) => {
  return (
    <div className="w-full bg-violet-200 text-[8px] rounded-md px-1 flex flex-1 items-center min-h-0 max-h-[16.66%] gap-2">
      <span>{info_name}: </span>
      <Authorize_button />
    </div>
  );
};

export default Authorize_profile;
