interface InputProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  type?: string;
  isValid?: boolean;
  validationMessage?: string;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  optional?: boolean;
  optionalText?: String;
}

export default InputProps;
