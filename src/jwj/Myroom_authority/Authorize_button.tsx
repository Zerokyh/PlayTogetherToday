import React, { useState } from "react";
import Button from "@mui/material/Button";

const Authorize_button = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleClick = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  return (
    <div className="flex gap-1">
      <Button
        sx={{
          fontSize: "10px",
          width: "40px",
          minWidth: "40px",
          height: "10px",
          padding: 1,
          backgroundColor:
            selectedButton === "public" ? "darkblue" : "transparent",
          color: selectedButton === "public" ? "white" : "black",
          "&:hover": {
            backgroundColor:
              selectedButton === "public" ? "darkblue" : "lightgray",
          },
        }}
        variant="outlined"
        onClick={() => handleClick("public")}
      >
        공개
      </Button>

      <Button
        sx={{
          fontSize: "10px",
          width: "50px",
          minWidth: "50px",
          height: "10px",
          padding: 1,
          backgroundColor:
            selectedButton === "friends" ? "darkblue" : "transparent",
          color: selectedButton === "friends" ? "white" : "black",
          "&:hover": {
            backgroundColor:
              selectedButton === "friends" ? "darkblue" : "lightgray",
          },
        }}
        variant="outlined"
        onClick={() => handleClick("friends")}
      >
        친구공개
      </Button>

      <Button
        sx={{
          fontSize: "10px",
          width: "50px",
          minWidth: "50px",
          height: "10px",
          padding: 1,
          backgroundColor:
            selectedButton === "private" ? "darkblue" : "transparent",
          color: selectedButton === "private" ? "white" : "black",
          "&:hover": {
            backgroundColor:
              selectedButton === "private" ? "darkblue" : "lightgray",
          },
        }}
        variant="outlined"
        onClick={() => handleClick("private")}
      >
        비공개
      </Button>
    </div>
  );
};

export default Authorize_button;
