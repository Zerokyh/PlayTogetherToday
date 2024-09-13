import { useState, useEffect } from "react";
import { isGroupPasswordValid } from "./JoinValidation";

export const useGroupMakeForm = () => {
  const [formState, setFormState] = useState({
    groupName: "",
    groupType: "",
    groupHost: "",
    groupPassword: "",
    groupSecretary: "",
    groupEventDate: "",
  });

  const [validity, setValidity] = useState({
    isGroupPasswordValid: true,
  });

  const [blurred, setBlurred] = useState({
    groupNameBlurred: false,
    groupTypeBlurred: false,
    groupHostBlurred: false,
    groupPasswordBlurred: false,
    groupSecretaryBlurred: false,
    groupEventDateBlurred: false,
  });

  useEffect(() => {
    setValidity({
      isGroupPasswordValid: isGroupPasswordValid(formState.groupPassword),
    });
  }, [formState.groupPassword]);

  return {
    formState,
    setFormState,
    validity,
    blurred,
    setBlurred,
  };
};
