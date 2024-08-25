import { Switch } from "@mui/material";

type SwitchBoxProp = {
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default";
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SwitchBox = ({ color = "primary", checked, onChange }: SwitchBoxProp) => {
  return <Switch checked={checked} color={color} onChange={onChange} />;
};

export default SwitchBox;
