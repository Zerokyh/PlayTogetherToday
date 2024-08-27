type GroupMake_Title_props = {
  text: string;
};

const GroupMake_Title = ({ text }: GroupMake_Title_props) => {
  return (
    <h1 className="bg-[#EADDFF] max-w-full my-3 px-10 py-5 rounded-3xl text-center font-bold text-base">
      {text}
    </h1>
  );
};

export default GroupMake_Title;
