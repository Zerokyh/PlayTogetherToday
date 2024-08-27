import { useState } from "react";

type GroupMake_Input_props = {
  validation?: boolean;
};

const GroupMake_Input = ({ validation = false }: GroupMake_Input_props) => {
  const [text, setText] = useState<string>("");

  return validation ? (
    <div>
      <p className={`text-[10px] ${text ? "text-green-500" : "text-red-500"}`}>
        {text ? "입력완료" : "입력해주세요"}
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-[#EADDFF] min-w-full outline-none border-b border-black"
      />
    </div>
  ) : (
    <input className="bg-[#EADDFF] min-w-full outline-none border-b border-black" />
  );
};

export default GroupMake_Input;
