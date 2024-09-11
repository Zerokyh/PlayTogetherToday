export const isGroupPasswordValid = (password: string) => {
  // English or Number or (Eng||Math) + SpecialCharacters
  const passwordRegex = /^(?=.*[a-zA-Z])|(?=.*\d)|(?=.*[a-zA-Z\d][!@#$%^&*()_\-+=<>?{}~])[A-Za-z\d!@#$%^&*()_\-+=<>?{}~]*$/;
  return password === "" || passwordRegex.test(password);
};
