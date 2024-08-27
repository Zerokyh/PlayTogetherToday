type freindList_props = {
  name?: string;
  anni?: string;
  group?: string;
};

const Myroom_freindsList = ({ name, anni, group }: freindList_props) => {
  return (
    <div className="w-full h-1/5 flex  items-center justify-between bg-violet-100  rounded-xl px-2">
      <div className="flex justify-center items-center gap-1">
        <div className="w-7 h-7 rounded-full bg-pink-100"></div>
        <div className="text-sm font-bold">{name}</div>
        <div className="text-[8px] font-bold">{anni}</div>
      </div>
      <div className="text-sm font-bold">{group}</div>
    </div>
  );
};

export default Myroom_freindsList;
