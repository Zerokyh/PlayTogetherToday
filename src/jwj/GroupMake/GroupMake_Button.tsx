type GroupMake_Button_props = {
  text: string;
};

const GroupMake_Button = ({ text }: GroupMake_Button_props) => {
  return (
    <button className="bg-[#D7BEFF] px-5 py-3 rounded-full font-bold text-lg shadow">
      {text}
    </button>
  );
};

export default GroupMake_Button;
