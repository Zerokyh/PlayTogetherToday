type GroupMake_Title_props = {
  text: string;
  onClick?: () => void;
  style?: string;
};

const GroupMake_Title = ({ text, onClick, style }: GroupMake_Title_props) => {
  return (
    <h1
      className={`bg-[#EADDFF] max-w-full my-3 px-10 py-5 rounded-3xl text-center font-bold text-base ${style}`}
      onClick={onClick}
    >
      {text}
    </h1>
  );
};

export default GroupMake_Title;
