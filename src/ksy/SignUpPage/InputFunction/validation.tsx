export const isEmailValid = (email: string) => {
  const idEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email === "" || idEmailRegex.test(email);
};

export const isPasswordValid = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}~])[A-Za-z\d!@#$%^&*()_\-+=<>?{}~]{8,20}$/;

  return password === "" || passwordRegex.test(password);
};

export const doPasswordsMatch = (password: string, passwordCheck: string) => {
  return password === "" || passwordCheck === "" || password === passwordCheck;
};
