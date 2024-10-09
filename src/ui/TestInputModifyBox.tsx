import * as React from "react";
import { Box } from "@mui/material";
import InputModifyBox from "../components/atom/Input/InputModifyBox";
import axios from "axios";

const TestInputModifyBox = () => {
  const [value, setValue] = React.useState<string>("");
  const [value1, setValue1] = React.useState<string>("");

  // API에서 데이터 불러오기
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const member_id = localStorage.getItem("member_id");
        const response = await axios.get(
          `http://localhost:8080/MyInfoModify/${member_id}`
          // `https://playtotogether-backendserver-djbdckftbygrbraw.koreasouth-01.azurewebsites.net/MyInfoModify/${member_id}`
        );
        const data = response.data.data;
        // 여기에 원하는 필드를 선택하여 초기값으로 설정할 수 있습니다.
        setValue(data.member_nickname || ""); // 예를 들어 nickname을 사용할 경우
        setValue1(data.member_phone || "");
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Value Changed:", event.target.value);
    setValue(event.target.value);
  };
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Value Changed:", event.target.value);
    setValue1(event.target.value);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <InputModifyBox
        type="text"
        value={value}
        onChange={handleChange}
        width="300px"
      />
    </Box>
  );
};

export default TestInputModifyBox;
