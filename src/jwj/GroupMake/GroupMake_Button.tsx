type GroupMake_Button_props = {
  text: string;
};

const GroupMake_Button = ({ text }: GroupMake_Button_props) => {
  return (
    <button className="bg-[#D7BEFF]  rounded-full font-bold text-lg shadow px-3">
      {text}
    </button>
  );
};

export default GroupMake_Button;
