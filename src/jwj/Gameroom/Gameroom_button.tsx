type button_name_props = {
  name?: string;
};

const Gameroom_button = ({ name = "game" }: button_name_props) => {
  return <button className="w-28 h-14 bg-violet-200 rounded-xl">{name}</button>;
};

export default Gameroom_button;
