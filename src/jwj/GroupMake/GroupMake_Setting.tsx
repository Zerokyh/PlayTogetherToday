type GroupMake_Setting_props = {
  text: string;
  feature?: string;
};

const GroupMake_Setting = ({ text, feature }: GroupMake_Setting_props) => {
  return (
    <div>
      <h3 className="font-bold mb-1">{text}</h3>
      <p className="text-gray-500 text-xs m-1">{feature}</p>
    </div>
  );
};

export default GroupMake_Setting;
