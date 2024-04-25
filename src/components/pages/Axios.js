import axios from "axios";
import React, { useState } from "react";

const Axios = () => {
  const [data, setDate] = useState(null);

  const onClick = async () => {
    console.log("버튼 작동");
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=66bea56d8fb74ce5a0234baf8fd660bc",
      );
      setDate(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>axios</h2>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} readOnly={true} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default Axios;