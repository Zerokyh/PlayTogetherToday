import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputProps from "./InputProps";

const InputContents: React.FC<InputProps> = ({
  label,
  value,
  setValue,
  type = "text",
  isValid = true,
  validationMessage = "",
  showPasswordToggle = false,
  showPassword = false,
  togglePasswordVisibility,
  onBlur,
  onFocus,
  optional = false,
}) => {

    return (
    // Input Title 및 유효성
    <div className="bg-[#EADDFF] max-w-full my-8 px-5 py-3 rounded-3xl">
        <div className="flex">
                <h3 className="font-bold mb-1">
                    {label}
                    {optional
                        && <span className="text-gray-500 font-normal"> (선택)</span>}</h3>
                <p
                    className={`text-xs m-1 ${!isValid ? 'text-red-500' : 'text-gray-500'}`}>
            {!isValid ? validationMessage : ""}
            </p>
        </div>
    {/* 비밀번호 가시(on/off) 여부 */}
        <div className="relative">
            <input
                type={showPasswordToggle && showPassword ? "text" : type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
                onFocus={onFocus}
                className="bg-[#EADDFF] min-w-full outline-none border-b border-black" />
            
            {showPasswordToggle && togglePasswordVisibility && (
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2">
                {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            )}
      </div>
    </div>
  );
};

export default InputContents;
