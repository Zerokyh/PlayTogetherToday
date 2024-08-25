// func.ts

export const geListItemStyles = (isOpen: boolean) => ({
  minHeight: 48,
  justifyContent: isOpen ? "initial" : "center",
});

export const getListItemIconStyles = (isOpen: boolean) => ({
  height: "50px",
  minWidth: 0,
  mr: isOpen ? 3 : "auto",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  fontSize: "14px",
  fontWeight: 600,
});
