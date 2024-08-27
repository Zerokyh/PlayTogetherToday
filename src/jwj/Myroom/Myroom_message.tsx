type message_props = {
  contents?: string;
  time?: string;
};

const Myroom_message = ({ contents, time }: message_props) => {
  return (
    <div className="w-full h-1/5 flex  items-center justify-between bg-violet-100  rounded-xl px-2">
      <div className="flex justify-center items-center gap-1">
        <div className="w-7 h-7 rounded-full bg-pink-100"></div>
        <div className="text-[10px] font-bold">{contents}</div>
      </div>
      <div className="text-[10px] font-bold">{time}</div>
    </div>
  );
};
export default Myroom_message;
