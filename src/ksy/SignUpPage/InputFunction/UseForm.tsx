import { useEffect, useState } from "react";
import { doPasswordsMatch, isEmailValid, isPasswordValid } from "./validation";

export const useSignUpForm = () => {
  const [formState, setFormState] = useState({
    idEmail: "",
    password: "",
    passwordCheck: "",
    backupEmail: "",
    groupName: "",
    groupPassword: "",
  });

  const [validity, setValidity] = useState({
    isIdEmailValid: true,
    isPasswordValid: true,
    isPasswordMatch: true,
  });

  const [blurred, setBlurred] = useState({
    idEmailBlurred: false,
    passwordBlurred: false,
    passwordCheckBlurred: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  useEffect(() => {
    setValidity({
      isIdEmailValid: isEmailValid(formState.idEmail),
      isPasswordValid: isPasswordValid(formState.password),
      isPasswordMatch: doPasswordsMatch(formState.password, formState.passwordCheck),
    });
  }, [formState]);

  return {
    formState,
    setFormState,
    validity,
    blurred,
    setBlurred,
    showPassword,
    setShowPassword,
    showPasswordCheck,
    setShowPasswordCheck,
  };
};
